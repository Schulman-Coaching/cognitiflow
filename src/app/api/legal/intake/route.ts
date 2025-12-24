import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import { NextResponse } from 'next/server';

const bedrock = new BedrockRuntimeClient({ 
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});

export async function POST(request: Request) {
  try {
    const { clientName, email, phone, inquiry } = await request.json();
    
    const prompt = `You are an expert legal intake specialist. Analyze this client inquiry and provide structured analysis.

CLIENT: ${clientName}
EMAIL: ${email}
PHONE: ${phone}
INQUIRY: ${inquiry}

Provide your analysis in the following JSON format:
{
  "practice_area": "one of: litigation, contracts, estate_planning, family_law, real_estate, criminal, employment, personal_injury",
  "urgency": "one of: immediate, urgent, routine, consultation",
  "jurisdiction": "extract state and/or federal jurisdiction mentioned",
  "confidence": "number from 0-100",
  "key_facts": ["fact 1", "fact 2", "fact 3"],
  "potential_issues": ["issue 1", "issue 2"],
  "recommended_next_steps": ["step 1", "step 2", "step 3"],
  "estimated_complexity": "one of: simple, moderate, complex",
  "suggested_attorney_hours": "estimated range like 5-10"
}

Respond ONLY with valid JSON, no additional text.`;

    const payload = {
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 2000,
      messages: [{ 
        role: "user", 
        content: [{ type: "text", text: prompt }]
      }],
      temperature: 0.3
    };

    const command = new InvokeModelCommand({
      modelId: process.env.BEDROCK_MODEL_ID || "anthropic.claude-3-sonnet-20240229-v1:0",
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify(payload)
    });

    const response = await bedrock.send(command);
    const result = JSON.parse(new TextDecoder().decode(response.body));
    const analysisText = result.content[0].text;
    const analysis = JSON.parse(analysisText);
    
    return NextResponse.json({ 
      success: true, 
      analysis,
      intake: { clientName, email, phone, inquiry }
    });
    
  } catch (error) {
    console.error('Legal intake error:', error);
    return NextResponse.json({ 
      error: 'Failed to analyze intake', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
