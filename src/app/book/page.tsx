'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowLeft, CheckCircle, Clock, Video, Calendar } from 'lucide-react'

const benefits = [
  'Personalized AI strategy discussion',
  'Review of your current workflows',
  'Identification of automation opportunities',
  'ROI estimates for your business',
  'Q&A with our AI consultants',
  'No obligation, completely free'
]

export default function BookPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-cyan-500 to-violet-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Cognitiflow</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Book Your Free AI Strategy Session
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Schedule a 30-minute consultation with our AI experts to discover
                how intelligent automation can transform your business.
              </p>

              {/* Session Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <Video className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span>Video call (Zoom or Google Meet)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span>Pick a time that works for you</span>
                </div>
              </div>

              {/* What You'll Get */}
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">What We&apos;ll Cover:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 p-6 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-xl border border-indigo-500/20">
                <p className="text-slate-300 italic mb-4">
                  &quot;The consultation alone gave us a clear picture of what&apos;s possible.
                  Within a month of implementing their recommendations, we saved 20 hours per week.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                    DM
                  </div>
                  <div>
                    <div className="text-white font-medium">David Martinez</div>
                    <div className="text-slate-400 text-sm">CEO, TechStart Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Calendly Embed */}
            <div className="bg-white rounded-2xl overflow-hidden min-h-[700px]">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/elie-schulman/ai-strategy-consultation?hide_gdpr_banner=1&background_color=1e293b&text_color=ffffff&primary_color=6366f1"
                style={{ minWidth: '100%', height: '700px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
