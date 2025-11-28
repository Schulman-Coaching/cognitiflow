'use client'

import Link from 'next/link'
import {
  Workflow,
  ArrowRight,
  CheckCircle,
  FileText,
  Mail,
  Database,
  RefreshCw,
  Zap,
  Clock,
  TrendingDown,
  Sparkles,
  ArrowLeft
} from 'lucide-react'

const automationTypes = [
  {
    icon: FileText,
    title: 'Document Processing',
    description: 'Automatically extract, classify, and route information from invoices, contracts, and forms.',
    savings: 'Save 20+ hours/week'
  },
  {
    icon: Mail,
    title: 'Email & Communication',
    description: 'Smart email routing, auto-responses, and communication workflow automation.',
    savings: 'Reduce response time by 80%'
  },
  {
    icon: Database,
    title: 'Data Entry & Migration',
    description: 'Eliminate manual data entry with intelligent data capture and validation.',
    savings: '99.9% accuracy rate'
  },
  {
    icon: RefreshCw,
    title: 'Report Generation',
    description: 'Automated reporting with real-time data aggregation and distribution.',
    savings: 'Daily reports in minutes'
  }
]

const caseStudies = [
  {
    industry: 'Healthcare',
    challenge: 'Manual patient intake forms taking 15 minutes each',
    solution: 'AI-powered form processing with auto-population',
    result: '90% reduction in processing time',
    savings: '$150K annual savings'
  },
  {
    industry: 'Legal',
    challenge: 'Document review consuming 40% of paralegal time',
    solution: 'Intelligent document classification and extraction',
    result: '75% faster document review',
    savings: '200+ hours saved monthly'
  },
  {
    industry: 'E-commerce',
    challenge: 'Customer service overwhelmed with routine inquiries',
    solution: 'AI chatbot handling 60% of inquiries automatically',
    result: '3x inquiry handling capacity',
    savings: 'No additional headcount needed'
  }
]

const features = [
  'No-code workflow builder',
  'Pre-built industry templates',
  'Custom AI model training',
  'Real-time monitoring dashboard',
  'Error handling & escalation',
  'Integration with 100+ apps',
  'SOC 2 compliant security',
  '24/7 technical support'
]

export default function WorkflowAutomationPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-indigo-50" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto relative">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center mb-6">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
                Workflow Automation
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Eliminate repetitive tasks and free your team to focus on high-value work.
                Our AI-powered automation solutions integrate seamlessly with your existing systems.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  Save 40% of team time
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <TrendingDown className="w-4 h-4" />
                  Reduce errors by 90%
                </div>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
              >
                Get Automation Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Platform Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Automate</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From simple tasks to complex workflows, we help you automate processes that matter most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationTypes.map((type, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 mb-4">{type.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm">
                  <Zap className="w-4 h-4" />
                  {type.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real Results</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              See how businesses like yours have transformed their operations with our automation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-slate-800 rounded-2xl p-6">
                <div className="text-indigo-400 font-medium mb-4">{study.industry}</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Challenge</div>
                    <div className="text-white">{study.challenge}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Solution</div>
                    <div className="text-white">{study.solution}</div>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{study.result}</div>
                    <div className="text-slate-400 text-sm">{study.savings}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500 via-indigo-500 to-violet-500 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Automate?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free automation assessment and discover how much time and money you could save.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-slate-100 transition shadow-lg"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
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
