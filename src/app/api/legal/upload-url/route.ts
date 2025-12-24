import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

const s3 = new S3Client({ 
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});

export async function POST(request: Request) {
  try {
    const { fileName, fileType, tenantId = 'default' } = await request.json();
    
    const fileId = randomUUID();
    const fileExtension = fileName.split('.').pop();
    const s3Key = `${tenantId}/documents/${fileId}.${fileExtension}`;
    
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: s3Key,
      ContentType: fileType
    });
    
    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
    
    return NextResponse.json({ 
      success: true,
      uploadUrl,
      key: s3Key,
      fileId
    });
    
  } catch (error) {
    console.error('Upload URL generation error:', error);
    return NextResponse.json({ 
      error: 'Failed to generate upload URL' 
    }, { status: 500 });
  }
}
