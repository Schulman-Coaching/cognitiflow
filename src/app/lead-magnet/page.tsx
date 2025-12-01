'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Bot,
  Download,
  CheckCircle,
  ArrowRight,
  Mail,
  FileText,
  Zap,
  Clock,
  Target,
  Shield,
  Sparkles
} from 'lucide-react'
import type { Metadata } from 'next'

const guideContents = [
  {
    title: 'The 7 Tasks Every Small Business Should Automate First',
    description: 'Discover the highest-ROI automation opportunities that free up the most time.'
  },
  {
    title: 'Task Audit Worksheet',
    description: 'A simple framework to identify which of YOUR tasks are ready for automation.'
  },
  {
    title: 'Cost Calculator Template',
    description: 'Calculate exactly how much money you can save by automating specific tasks.'
  },
  {
    title: 'Implementation Checklist',
    description: 'Step-by-step guide to successfully implementing your first automation.'
  },
  {
    title: 'Vendor Evaluation Criteria',
    description: 'What to look for when choosing an automation solution for your business.'
  },
  {
    title: 'Common Pitfalls to Avoid',
    description: 'Learn from others\' mistakes so you can succeed on your first try.'
  },
  {
    title: 'Quick-Win Templates',
    description: 'Ready-to-use templates for email responses, data entry, and more.'
  }
]

export default function LeadMagnetPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Save lead
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          source: 'lead_magnet',
          message: 'Downloaded: Small Business Automation Survival Kit'
        }),
      })

      // Send email with PDF link
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company: '',
          message: 'Lead magnet download request'
        }),
      })

      setSubmitStatus('success')
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-cyan-500 to-violet-600 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">CognitiFlow</span>
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Check Your Inbox!</h1>
          <p className="text-lg text-slate-600 mb-8">
            We've sent your free Automation Survival Kit to <strong>{email}</strong>.
            If you don't see it within a few minutes, check your spam folder.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 mb-8">
            <h2 className="font-semibold text-slate-900 mb-4">While you wait...</h2>
            <p className="text-slate-600 mb-4">
              Want to see how CognitiFlow can automate tasks for your business specifically?
            </p>
            <Link
              href="/#get-started"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-cyan-500 to-violet-600 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">CognitiFlow</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-indigo-100 rounded-full text-indigo-700 text-xs md:text-sm font-medium mb-4 md:mb-6">
              <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Free Download
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
              The Small Business<br />
              <span className="gradient-text">Automation Survival Kit</span>
            </h1>

            <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed">
              A practical guide to identifying, prioritizing, and implementing automation
              in your business. Save 20+ hours per week without hiring more staff.
            </p>

            {/* What's inside */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4">What's Inside:</h2>
              <div className="space-y-2.5 md:space-y-3">
                {guideContents.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900 text-sm md:text-base">{item.title}</div>
                      <p className="text-xs md:text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-slate-500">
              <div className="flex items-center gap-1.5 md:gap-2">
                <FileText className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-500" />
                32 pages
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-500" />
                15 min read
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-500" />
                No spam, ever
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 border border-slate-200 order-1 lg:order-2">
            <div className="text-center mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Download className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 md:mb-2">Get Your Free Copy</h2>
              <p className="text-slate-600 text-sm md:text-base">Enter your email and we'll send it right over.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5 md:mb-2">
                  First Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
                  placeholder="Your first name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5 md:mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
                  placeholder="you@company.com"
                  required
                />
              </div>

              {submitStatus === 'error' && (
                <div className="p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 md:py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Download className="w-4 h-4 md:w-5 md:h-5" />
                    Send Me the Free Guide
                  </>
                )}
              </button>

              <p className="text-[11px] md:text-xs text-slate-500 text-center">
                By submitting, you agree to receive emails from CognitiFlow.
                We respect your privacy and you can unsubscribe anytime.
              </p>
            </form>

            {/* Social proof */}
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-200">
              <div className="flex items-center justify-center gap-2 text-slate-600 text-xs md:text-sm">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-[10px] md:text-xs font-bold text-indigo-700">JD</div>
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-cyan-200 border-2 border-white flex items-center justify-center text-[10px] md:text-xs font-bold text-cyan-700">SM</div>
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-violet-200 border-2 border-white flex items-center justify-center text-[10px] md:text-xs font-bold text-violet-700">AK</div>
                </div>
                <span>Join 500+ business owners</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-10 md:mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-5 md:p-8 shadow-lg border border-slate-200">
            <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg md:text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-base md:text-lg text-slate-700 mb-3 md:mb-4 italic">
              "This guide helped me identify that I was spending 12 hours a week on tasks
              that could be automated. Within a month of implementing their suggestions,
              I had that time back to focus on growing my business."
            </blockquote>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm md:text-base">
                MR
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm md:text-base">Michael R.</div>
                <div className="text-slate-600 text-xs md:text-sm">Owner, Small Business Consulting</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="text-slate-600 hover:text-slate-900 text-xs md:text-sm">
            © {new Date().getFullYear()} CognitiFlow. All rights reserved.
          </Link>
        </div>
      </footer>
    </div>
  )
}
