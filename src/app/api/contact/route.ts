import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send notification email to Cognitiflow team
    const { error: teamError } = await resend.emails.send({
      from: 'Cognitiflow <notifications@cognitiflow.ai>',
      to: ['hello@cognitiflow.ai'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Submitted via cognitiflow.ai contact form
        </p>
      `,
    })

    if (teamError) {
      console.error('Failed to send team notification:', teamError)
    }

    // Send confirmation email to the user
    const { error: userError } = await resend.emails.send({
      from: 'Cognitiflow <hello@cognitiflow.ai>',
      to: [email],
      subject: 'Thank you for contacting Cognitiflow',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #6366f1, #06b6d4); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Cognitiflow</h1>
          </div>
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b;">Thank you for reaching out, ${name}!</h2>
            <p style="color: #475569; line-height: 1.6;">
              We've received your message and one of our AI consultants will be in touch within 24 hours.
            </p>
            <p style="color: #475569; line-height: 1.6;">
              In the meantime, feel free to explore our AI capabilities demo at
              <a href="https://cognitiflow.ai/demo" style="color: #6366f1;">cognitiflow.ai/demo</a>.
            </p>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">Your message:</p>
              <p style="color: #1e293b; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="color: #475569; margin-top: 30px;">
              Best regards,<br>
              <strong>Jacob Rubinstein & Elie Schulman</strong><br>
              Co-Founders, Cognitiflow
            </p>
          </div>
          <div style="padding: 20px; text-align: center; background: #1e293b;">
            <p style="color: #94a3b8; margin: 0; font-size: 12px;">
              © ${new Date().getFullYear()} Cognitiflow. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    if (userError) {
      console.error('Failed to send user confirmation:', userError)
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We\'ll be in touch soon!'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
