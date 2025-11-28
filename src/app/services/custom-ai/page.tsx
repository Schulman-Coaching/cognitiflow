'use client'

import Link from 'next/link'
import {
  Bot,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Eye,
  BarChart3,
  FileSearch,
  Shield,
  Code,
  Sparkles,
  ArrowLeft,
  Cpu
} from 'lucide-react'

const solutions = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Assistants',
    description: 'Custom conversational AI trained on your data to handle customer inquiries, internal support, and sales conversations.',
    capabilities: ['24/7 customer support', 'Lead qualification', 'FAQ automation', 'Appointment scheduling']
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Machine learning models that forecast trends, predict outcomes, and help you make data-driven decisions.',
    capabilities: ['Sales forecasting', 'Demand prediction', 'Churn prevention', 'Risk assessment']
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'AI that can see and understand images and video for quality control, security, and automation.',
    capabilities: ['Quality inspection', 'Object detection', 'Document scanning', 'Video analytics']
  },
  {
    icon: FileSearch,
    title: 'NLP & Text Analysis',
    description: 'Natural language processing for document understanding, sentiment analysis, and content generation.',
    capabilities: ['Document extraction', 'Sentiment analysis', 'Content summarization', 'Language translation']
  }
]

const technologies = [
  { name: 'OpenAI GPT-4', category: 'Language Models' },
  { name: 'Claude', category: 'Language Models' },
  { name: 'TensorFlow', category: 'ML Framework' },
  { name: 'PyTorch', category: 'ML Framework' },
  { name: 'Hugging Face', category: 'Model Hub' },
  { name: 'LangChain', category: 'LLM Framework' },
  { name: 'Pinecone', category: 'Vector Database' },
  { name: 'AWS SageMaker', category: 'MLOps' }
]

const process = [
  {
    phase: 'Discovery',
    description: 'Understand your unique challenges and define success metrics'
  },
  {
    phase: 'Data Assessment',
    description: 'Evaluate your data quality and prepare for model training'
  },
  {
    phase: 'Prototype',
    description: 'Build and test a proof-of-concept to validate the approach'
  },
  {
    phase: 'Development',
    description: 'Full implementation with your systems integration'
  },
  {
    phase: 'Deployment',
    description: 'Production launch with monitoring and optimization'
  },
  {
    phase: 'Support',
    description: 'Ongoing maintenance, updates, and model improvements'
  }
]

export default function CustomAIPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto relative">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
              Custom AI Solutions
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Bespoke AI applications built specifically for your business challenges.
              From intelligent chatbots to predictive models, we create solutions that
              give you a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition border border-slate-200"
              >
                See Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">AI Solutions We Build</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Custom-built AI applications that solve real business problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                    <p className="text-slate-600 mb-4">{solution.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.capabilities.map((cap, j) => (
                        <span key={j} className="px-3 py-1 bg-white rounded-full text-sm text-slate-600 border border-slate-200">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We leverage cutting-edge AI technologies to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-4 text-center">
                <div className="text-white font-medium mb-1">{tech.name}</div>
                <div className="text-slate-400 text-sm">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Development Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From concept to production, our proven methodology ensures successful delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            {process.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-xl p-6 border border-slate-200 h-full">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.phase}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Enterprise-Grade Security</h2>
              <p className="text-lg text-slate-600 mb-8">
                Your data security is our top priority. All custom AI solutions are built with
                enterprise-grade security measures and compliance standards.
              </p>
              <div className="space-y-4">
                {[
                  'SOC 2 Type II compliant infrastructure',
                  'End-to-end encryption for all data',
                  'Private model deployment options',
                  'GDPR and HIPAA compliance available',
                  'Regular security audits and penetration testing'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
              <p className="text-white/90 mb-6">
                Tell us about your business challenge and we&apos;ll design a custom AI solution
                that delivers results. Free initial consultation included.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-slate-100 transition"
              >
                Get Started
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
