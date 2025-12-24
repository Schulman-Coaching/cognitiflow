import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import { NextResponse } from 'next/server';

const s3 = new S3Client({ 
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});

const bedrock = new BedrockRuntimeClient({ 
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});

export async function POST(request: Request) {
  try {
    const { s3Key } = await request.json();
    
    const getCommand = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: s3Key
    });
    
    const s3Response = await s3.send(getCommand);
    const documentText = await s3Response.Body!.transformToString();
    
    const truncatedText = documentText.substring(0, 100000);
    
    const prompt = `You are an expert legal document analyst. Analyze this document:

${truncatedText}

Provide JSON:
{
  "document_type": "type",
  "executive_summary": "2-3 sentences",
  "parties": ["list"],
  "key_dates": ["dates with context"],
  "deadlines": ["deadlines"],
  "legal_issues": ["issues"],
  "risks": ["risks"],
  "recommended_actions": ["actions"]
}`;

    const payload = {
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 3000,
      messages: [{ role: "user", content: [{ type: "text", text: prompt }] }],
      temperature: 0.2
    };

    const command = new InvokeModelCommand({
      modelId: process.env.BEDROCK_MODEL_ID || "anthropic.claude-3-sonnet-20240229-v1:0",
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify(payload)
    });

    const response = await bedrock.send(command);
    const result = JSON.parse(new TextDecoder().decode(response.body));
    const summary = JSON.parse(result.content[0].text);
    
    return NextResponse.json({ success: true, summary, s3Key });
    
  } catch (error) {
    console.error('Document analysis error:', error);
    return NextResponse.json({ 
      error: 'Failed to analyze document'
    }, { status: 500 });
  }
}
