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
    const { message, history = [] } = await request.json();
    
    const systemPrompt = `You are a knowledgeable legal assistant. Help lawyers with research, drafting, and strategy.`;

    const messages = history.map((msg: any) => ({
      role: msg.role,
      content: [{ type: "text", text: msg.content }]
    }));
    
    messages.push({
      role: "user",
      content: [{ type: "text", text: message }]
    });

    const payload = {
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 2000,
      system: systemPrompt,
      messages,
      temperature: 0.7
    };

    const command = new InvokeModelCommand({
      modelId: process.env.BEDROCK_MODEL_ID || "anthropic.claude-3-sonnet-20240229-v1:0",
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify(payload)
    });

    const response = await bedrock.send(command);
    const result = JSON.parse(new TextDecoder().decode(response.body));
    const assistantResponse = result.content[0].text;
    
    return NextResponse.json({ success: true, response: assistantResponse });
    
  } catch (error) {
    console.error('Legal assistant error:', error);
    return NextResponse.json({ error: 'Failed to get response' }, { status: 500 });
  }
}
