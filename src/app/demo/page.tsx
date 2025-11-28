'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Sparkles,
  Send,
  FileText,
  MessageSquare,
  BarChart3,
  Wand2,
  ArrowRight,
  Loader2,
  Copy,
  Check,
  ArrowLeft
} from 'lucide-react'

const demoTypes = [
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
    "**Generated Email:**\n\n---\n\nSubject: Transform Your Operations with AI - Free Consultation\n\nHi [Name],\n\nI noticed [Company] has been growing rapidly - congratulations! With that growth often comes operational challenges.\n\nAt Cognitiflow, we've helped businesses like yours:\n✅ Reduce document processing time by 80%\n✅ Handle 3x customer inquiries with same team\n✅ Save $100K+ annually on manual tasks\n\nWould you be open to a 15-minute call to explore if AI automation could help [Company]?\n\nBest regards,\n[Your Name]\n\n---\n\nShall I create variations or adjust the tone?",
    "**Social Media Post Generated:**\n\n---\n\n🚀 The future of small business is here.\n\nWhile big corporations have had AI advantages for years, we're democratizing access for SMBs.\n\nOur clients are seeing:\n📈 40% time savings\n💰 60% cost reduction\n🎯 3x productivity gains\n\nNo technical expertise needed. No massive budgets required.\n\nReady to transform your business? Link in bio.\n\n#AI #SmallBusiness #Automation #BusinessGrowth\n\n---\n\nWant me to create versions for different platforms?"
  ]
}

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState('chatbot')
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

    const responses = sampleResponses[activeDemo]
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
            <Link
              href="/#contact"
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Get Started
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

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">AI Capabilities Demo</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experience firsthand how our AI solutions can transform your business operations.
            </p>
          </div>

          {/* Demo Type Selector */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {demoTypes.map((demo) => (
              <button
                key={demo.id}
                onClick={() => { setActiveDemo(demo.id); clearChat() }}
                className={`p-4 rounded-xl text-left transition ${
                  activeDemo === demo.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <demo.icon className="w-6 h-6 mb-2" />
                <div className="font-semibold">{demo.title}</div>
                <div className={`text-sm ${activeDemo === demo.id ? 'text-indigo-200' : 'text-slate-400'}`}>
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
                      {demoTypes.find(d => d.id === activeDemo)?.icon &&
                        (() => {
                          const Icon = demoTypes.find(d => d.id === activeDemo)!.icon
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
                  placeholder={demoTypes.find(d => d.id === activeDemo)?.placeholder}
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

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Ready to build custom AI for your business?</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-xl font-semibold hover:opacity-90 transition"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
