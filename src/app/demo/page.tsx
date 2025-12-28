'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Bot,
  Send,
  FileText,
  MessageSquare,
  Wand2,
  ArrowRight,
  Loader2,
  Copy,
  Check,
  ArrowLeft,
  Play,
  Clock,
  Zap,
  Database,
  TrendingUp,
  Calendar,
  Laptop,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react'

// Interactive chat demo types
const chatDemoTypes = [
  {
    id: 'chatbot',
    icon: MessageSquare,
    title: 'AI Assistant',
    description: 'Experience a custom-trained business assistant',
    placeholder: 'Ask me anything about AI solutions for your business...'
  },
  {
    id: 'document',
    icon: FileText,
    title: 'Document Analysis',
    description: 'See AI extract insights from documents',
    placeholder: 'Paste any text to analyze (contract clauses, customer feedback, etc.)'
  },
  {
    id: 'content',
    icon: Wand2,
    title: 'Content Generation',
    description: 'Generate professional business content',
    placeholder: 'Describe what content you need (email, proposal, social post...)'
  }
]

const sampleResponses: Record<string, string[]> = {
  chatbot: [
    "Based on your question about AI solutions, here are some recommendations:\n\n**For Customer Service:**\n- AI chatbots can handle 60-80% of routine inquiries\n- Average response time reduction: 90%\n- Estimated cost savings: $50-100K annually\n\n**For Operations:**\n- Document processing automation\n- Data entry elimination\n- Report generation\n\nWould you like me to elaborate on any of these areas?",
    "Great question! Here's how AI can help small businesses compete:\n\n1. **Automation** - Handle repetitive tasks 24/7\n2. **Insights** - Make data-driven decisions faster\n3. **Scale** - Serve more customers without adding staff\n4. **Quality** - Reduce human errors\n\nThe key is starting with high-impact, low-risk projects. What's your biggest operational challenge?"
  ],
  document: [
    "**Document Analysis Results:**\n\n📊 **Key Insights:**\n- Document Type: Contract/Agreement\n- Sentiment: Neutral/Professional\n- Risk Level: Low\n\n📋 **Extracted Entities:**\n- Parties identified: 2\n- Key dates: Contract start, renewal periods\n- Financial terms: Payment schedules, penalties\n\n⚠️ **Attention Points:**\n- Termination clause requires 30-day notice\n- Auto-renewal provision detected\n- Limitation of liability cap: $10,000\n\nWould you like a detailed breakdown of any section?",
    "**Analysis Complete:**\n\n🎯 **Summary:**\nThis appears to be customer feedback data. Here's what I found:\n\n**Sentiment Breakdown:**\n- Positive: 65%\n- Neutral: 25%\n- Negative: 10%\n\n**Top Themes:**\n1. Product quality (mentioned 45 times)\n2. Customer service (mentioned 32 times)\n3. Delivery speed (mentioned 28 times)\n\n**Recommendations:**\n- Address shipping delays mentioned in negative feedback\n- Highlight quality in marketing based on positive mentions"
  ],
  content: [
    "**Generated Email:**\n\n---\n\nSubject: Transform Your Operations with AI - Free Consultation\n\nHi [Name],\n\nI noticed [Company] has been growing rapidly - congratulations! With that growth often comes operational challenges.\n\nAt CognitiFlow, we've helped businesses like yours:\n✅ Reduce document processing time by 80%\n✅ Handle 3x customer inquiries with same team\n✅ Save $100K+ annually on manual tasks\n\nWould you be open to a 15-minute call to explore if AI automation could help [Company]?\n\nBest regards,\n[Your Name]\n\n---\n\nShall I create variations or adjust the tone?",
    "**Social Media Post Generated:**\n\n---\n\n🚀 The future of small business is here.\n\nWhile big corporations have had AI advantages for years, we're democratizing access for SMBs.\n\nOur clients are seeing:\n📈 40% time savings\n💰 60% cost reduction\n🎯 3x productivity gains\n\nNo technical expertise needed. No massive budgets required.\n\nReady to transform your business? Link in bio.\n\n#AI #SmallBusiness #Automation #BusinessGrowth\n\n---\n\nWant me to create versions for different platforms?"
  ]
}

// Workflow demos with GIF placeholders
const workflowDemos = [
  {
    id: 'invoice',
    title: 'Invoice Processing',
    description: 'Watch our AI employee extract data from invoices, match with purchase orders, and update your accounting system automatically.',
    icon: FileText,
    steps: [
      'AI receives invoice email attachment',
      'Extracts vendor, amount, line items, dates',
      'Matches with existing PO in system',
      'Creates entry in accounting software',
      'Sends confirmation to accounts payable'
    ],
    timeSaved: '15 hours/week',
    accuracy: '99.5%'
  },
  {
    id: 'email',
    title: 'Email Triage',
    description: 'See how our AI sorts, categorizes, and responds to routine emails while escalating important messages to your team.',
    icon: MessageSquare,
    steps: [
      'AI monitors inbox 24/7',
      'Categorizes by type and priority',
      'Drafts responses to routine inquiries',
      'Routes urgent messages to right person',
      'Logs all interactions in CRM'
    ],
    timeSaved: '10 hours/week',
    accuracy: '98%'
  },
  {
    id: 'crm',
    title: 'CRM Updates',
    description: 'Keep your customer database current with automatic updates from emails, calls, and interactions.',
    icon: Database,
    steps: [
      'AI monitors all customer touchpoints',
      'Extracts key information automatically',
      'Updates contact records in real-time',
      'Adds notes and interaction history',
      'Triggers follow-up tasks when needed'
    ],
    timeSaved: '8 hours/week',
    accuracy: '99%'
  },
  {
    id: 'leads',
    title: 'Lead Scraping',
    description: 'Find and compile potential customers from directories, social media, and industry databases.',
    icon: TrendingUp,
    steps: [
      'Define target criteria (industry, size, location)',
      'AI searches multiple data sources',
      'Compiles contact information',
      'Enriches with company details',
      'Adds qualified leads to CRM'
    ],
    timeSaved: '20 hours/week',
    accuracy: '95%'
  },
  {
    id: 'scheduling',
    title: 'Appointment Scheduling',
    description: 'Coordinate calendars, send reminders, and handle rescheduling without any manual work.',
    icon: Calendar,
    steps: [
      'AI receives meeting request',
      'Checks all participants\' availability',
      'Proposes optimal time slots',
      'Sends calendar invites',
      'Handles rescheduling and reminders'
    ],
    timeSaved: '5 hours/week',
    accuracy: '100%'
  },
  {
    id: 'data-entry',
    title: 'Data Entry',
    description: 'Transfer information between systems, update spreadsheets, and maintain records automatically.',
    icon: Laptop,
    steps: [
      'AI monitors source system for new data',
      'Validates and transforms data format',
      'Updates destination system',
      'Cross-references for accuracy',
      'Generates completion report'
    ],
    timeSaved: '25 hours/week',
    accuracy: '99.9%'
  }
]

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<'interactive' | 'workflows'>('workflows')
  const [activeChatDemo, setActiveChatDemo] = useState('chatbot')
  const [activeWorkflowDemo, setActiveWorkflowDemo] = useState(workflowDemos[0])
  const [activeStep, setActiveStep] = useState(0)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1500))

    const responses = sampleResponses[activeChatDemo]
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]

    setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }])
    setIsLoading(false)
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const clearChat = () => {
    setMessages([])
    setInput('')
  }

  const currentWorkflowIndex = workflowDemos.findIndex(d => d.id === activeWorkflowDemo.id)

  const nextWorkflow = () => {
    const nextIndex = (currentWorkflowIndex + 1) % workflowDemos.length
    setActiveWorkflowDemo(workflowDemos[nextIndex])
    setActiveStep(0)
  }

  const prevWorkflow = () => {
    const prevIndex = (currentWorkflowIndex - 1 + workflowDemos.length) % workflowDemos.length
    setActiveWorkflowDemo(workflowDemos[prevIndex])
    setActiveStep(0)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-cyan-500 to-violet-600 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CognitiFlow</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/pricing" className="text-slate-400 hover:text-white text-sm font-medium">
                Pricing
              </Link>
              <Link
                href="/#get-started"
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-4">
              <Eye className="w-4 h-4" />
              See It In Action
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">AI Capabilities Demo</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experience firsthand how our AI solutions can transform your business operations.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('workflows')}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                activeTab === 'workflows'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Workflow Demos
              </span>
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                activeTab === 'interactive'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Interactive Chat
              </span>
            </button>
          </div>

          {/* Workflow Demos Tab */}
          {activeTab === 'workflows' && (
            <>
              {/* Demo Selector */}
              <div className="flex flex-wrap justify-center gap-3 mb-8 py-4 border-y border-slate-800">
                {workflowDemos.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => { setActiveWorkflowDemo(demo); setActiveStep(0); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                      activeWorkflowDemo.id === demo.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <demo.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{demo.title}</span>
                  </button>
                ))}
              </div>

              {/* Demo Viewer */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Demo Animation/Video Placeholder */}
                <div className="relative">
                  <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                        <activeWorkflowDemo.icon className="w-10 h-10 text-indigo-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{activeWorkflowDemo.title}</h3>
                      <p className="text-slate-400 text-sm text-center px-8 mb-4">
                        Demo GIF/video placeholder
                      </p>
                      <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 rounded-lg font-medium text-white hover:bg-indigo-700 transition">
                        <Play className="w-5 h-5" />
                        Play Demo
                      </button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-cyan-900/30 pointer-events-none"></div>
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={prevWorkflow}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-slate-300 hover:bg-slate-700 transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Previous
                    </button>
                    <button
                      onClick={nextWorkflow}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-slate-300 hover:bg-slate-700 transition"
                    >
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Demo Details */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                      <activeWorkflowDemo.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{activeWorkflowDemo.title}</h2>
                  </div>

                  <p className="text-slate-400 mb-6">{activeWorkflowDemo.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                        <Clock className="w-4 h-4" />
                        Time Saved
                      </div>
                      <div className="text-2xl font-bold text-green-400">{activeWorkflowDemo.timeSaved}</div>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                        <Zap className="w-4 h-4" />
                        Accuracy
                      </div>
                      <div className="text-2xl font-bold text-indigo-400">{activeWorkflowDemo.accuracy}</div>
                    </div>
                  </div>

                  {/* Step-by-step breakdown */}
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h3 className="font-semibold text-white mb-4">How It Works</h3>
                    <div className="space-y-3">
                      {activeWorkflowDemo.steps.map((step, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveStep(i)}
                          className={`w-full flex items-start gap-3 p-3 rounded-lg transition text-left ${
                            activeStep === i
                              ? 'bg-indigo-600/20 border border-indigo-500/50'
                              : 'hover:bg-slate-700'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${
                            activeStep === i ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400'
                          }`}>
                            {i + 1}
                          </div>
                          <span className={activeStep === i ? 'text-white' : 'text-slate-300'}>
                            {step}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* All Demos Grid */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-white text-center mb-8">All Workflow Demos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {workflowDemos.map((demo) => (
                    <button
                      key={demo.id}
                      onClick={() => { setActiveWorkflowDemo(demo); setActiveStep(0); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                      className={`text-left bg-slate-800 rounded-xl p-6 border transition hover:border-indigo-500 ${
                        activeWorkflowDemo.id === demo.id ? 'border-indigo-500' : 'border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                          <demo.icon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h3 className="font-semibold text-white">{demo.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm mb-3 line-clamp-2">{demo.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-green-400">Save {demo.timeSaved}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-indigo-400">{demo.accuracy} accuracy</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Interactive Chat Tab */}
          {activeTab === 'interactive' && (
            <>
              {/* Demo Type Selector */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {chatDemoTypes.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => { setActiveChatDemo(demo.id); clearChat() }}
                    className={`p-4 rounded-xl text-left transition ${
                      activeChatDemo === demo.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <demo.icon className="w-6 h-6 mb-2" />
                    <div className="font-semibold">{demo.title}</div>
                    <div className={`text-sm ${activeChatDemo === demo.id ? 'text-indigo-200' : 'text-slate-400'}`}>
                      {demo.description}
                    </div>
                  </button>
                ))}
              </div>

              {/* Chat Interface */}
              <div className="bg-slate-800 rounded-2xl overflow-hidden">
                {/* Messages Area */}
                <div className="h-96 overflow-y-auto p-6 space-y-4">
                  {messages.length === 0 && (
                    <div className="flex items-center justify-center h-full text-slate-500">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-4">
                          {chatDemoTypes.find(d => d.id === activeChatDemo)?.icon &&
                            (() => {
                              const Icon = chatDemoTypes.find(d => d.id === activeChatDemo)!.icon
                              return <Icon className="w-8 h-8 text-slate-400" />
                            })()
                          }
                        </div>
                        <p>Start a conversation to see AI in action</p>
                      </div>
                    </div>
                  )}

                  {messages.map((message, i) => (
                    <div
                      key={i}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-2xl rounded-2xl px-4 py-3 ${
                          message.role === 'user'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-700 text-slate-100'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                        {message.role === 'assistant' && (
                          <button
                            onClick={() => handleCopy(message.content)}
                            className="mt-2 flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
                          >
                            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {copied ? 'Copied!' : 'Copy response'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-slate-700 rounded-2xl px-4 py-3 flex items-center gap-2 text-slate-400">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        AI is thinking...
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={chatDemoTypes.find(d => d.id === activeChatDemo)?.placeholder}
                      className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Disclaimer */}
              <p className="text-center text-slate-500 text-sm mt-6">
                This is a demo with simulated responses. Real implementations are customized to your specific data and requirements.
              </p>
            </>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to See Your Own Workflow Automated?</h2>
            <p className="text-slate-400 mb-8">
              Book a personalized demo and we&apos;ll show you exactly how CognitiFlow can transform your specific tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#get-started"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-xl font-semibold hover:opacity-90 transition"
              >
                Book a Personalized Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition border border-slate-700"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 via-cyan-500 to-violet-600 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">CognitiFlow</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <a href="mailto:hello@cognitiflow.ai" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} CognitiFlow
          </p>
        </div>
      </footer>
    </div>
  )
}
