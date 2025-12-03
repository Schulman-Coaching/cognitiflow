'use client'

import Link from 'next/link'
import {
  Brain,
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Clock,
  DollarSign,
  Sparkles,
  ArrowLeft
} from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: 'Strategic Clarity',
    description: 'Clear roadmap for AI adoption aligned with your business goals'
  },
  {
    icon: DollarSign,
    title: 'ROI Focused',
    description: 'Every recommendation tied to measurable business outcomes'
  },
  {
    icon: Clock,
    title: 'Time to Value',
    description: 'Prioritized initiatives for quick wins and long-term success'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Edge',
    description: 'Stay ahead of competitors with cutting-edge AI capabilities'
  }
]

const process = [
  {
    step: '1',
    title: 'Business Discovery',
    description: 'Deep dive into your operations, challenges, and objectives through stakeholder interviews and process mapping.',
    duration: '1-2 weeks'
  },
  {
    step: '2',
    title: 'AI Opportunity Assessment',
    description: 'Identify high-impact areas where AI can drive efficiency, reduce costs, or create new value.',
    duration: '1 week'
  },
  {
    step: '3',
    title: 'Technical Feasibility',
    description: 'Evaluate your data infrastructure, systems, and readiness for AI implementation.',
    duration: '1 week'
  },
  {
    step: '4',
    title: 'Strategy & Roadmap',
    description: 'Deliver comprehensive AI strategy with prioritized initiatives, timelines, and ROI projections.',
    duration: '1 week'
  }
]

const deliverables = [
  'AI Readiness Assessment Report',
  'Process Automation Opportunities Matrix',
  'Data Infrastructure Evaluation',
  'Prioritized Implementation Roadmap',
  'ROI Projections & Business Case',
  'Technology Stack Recommendations',
  'Change Management Guidelines',
  'Vendor Evaluation Framework'
]

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-cyan-500 to-violet-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Cognitiflow</span>
            </Link>
            <Link
              href="/#contact"
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto relative">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
                AI Strategy Consulting
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Transform your business with a clear, actionable AI strategy. We help you identify
                the highest-impact opportunities and create a roadmap for successful implementation.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
              >
                Schedule Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">What You&apos;ll Get</h3>
              <div className="space-y-4">
                {deliverables.slice(0, 5).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why AI Strategy Matters</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Without a clear strategy, AI initiatives often fail. We ensure your investment delivers real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A proven 4-week engagement that delivers actionable insights and a clear path forward.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="bg-slate-800 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 mb-4">{step.description}</p>
                <div className="text-sm text-indigo-400">Duration: {step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Complete Deliverables</h2>
              <p className="text-lg text-slate-600 mb-8">
                Walk away with everything you need to confidently move forward with AI implementation.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200">
                    <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 via-cyan-500 to-violet-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6">
                Schedule a free 30-minute discovery call to discuss your business challenges
                and explore how AI strategy consulting can help.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-slate-100 transition"
              >
                Book Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-cyan-500 to-violet-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Cognitiflow</span>
            </div>
            <div className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Cognitiflow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
