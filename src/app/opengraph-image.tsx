import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Cognitiflow - AI Services & Workflow Automation'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(6, 182, 212, 0.1)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            borderRadius: 20,
            background: 'linear-gradient(135deg, #6366f1, #06b6d4, #8b5cf6)',
            marginBottom: 30,
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
          </svg>
        </div>

        {/* Company name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
          }}
        >
          Cognitiflow
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: '#94a3b8',
            marginBottom: 40,
          }}
        >
          AI Services & Workflow Automation
        </div>

        {/* Gradient line */}
        <div
          style={{
            width: 400,
            height: 4,
            borderRadius: 2,
            background: 'linear-gradient(90deg, #6366f1, #06b6d4, #8b5cf6)',
            marginBottom: 40,
          }}
        />

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            color: '#64748b',
            fontSize: 24,
          }}
        >
          <span>AI Consulting</span>
          <span>|</span>
          <span>Process Automation</span>
          <span>|</span>
          <span>Custom Solutions</span>
        </div>

        {/* Website */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: '#6366f1',
          }}
        >
          cognitiflow.ai
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
