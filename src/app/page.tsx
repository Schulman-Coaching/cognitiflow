'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Bot,
  Zap,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  ChevronDown,
  Clock,
  DollarSign,
  Shield,
  Sparkles,
  Users,
  Target,
  Laptop,
  FileText,
  Calendar,
  Database,
  MessageSquare,
  TrendingUp,
  AlertCircle,
  Repeat,
  UserX,
  Timer,
  Play,
  Download,
  Lock,
  Check
} from 'lucide-react'

// Pain points for SMBs
const painPoints = [
  { icon: Repeat, text: 'Too many manual tasks' },
  { icon: Laptop, text: 'Repetitive computer work' },
  { icon: Timer, text: 'Slow turnaround times' },
  { icon: UserX, text: 'Staffing shortages' },
  { icon: AlertCircle, text: 'Errors and inconsistency' },
  { icon: Target, text: 'Tasks falling through cracks' }
]

// Benefits
const benefits = [
  { icon: Laptop, title: 'Works with any software', description: 'Integrates with your existing tools and platforms' },
  { icon: Zap, title: 'No code or integrations', description: 'Set up your AI employee without technical expertise' },
  { icon: Clock, title: 'Works 24/7', description: 'Your AI employee never sleeps, takes breaks, or calls in sick' },
  { icon: CheckCircle, title: 'Accurate & error-free', description: 'Consistent quality every time, no human mistakes' },
  { icon: DollarSign, title: 'Cheaper than hiring', description: 'Fraction of the cost of a full-time employee' },
  { icon: Timer, title: 'Setup in minutes', description: 'Go from signup to automation in under an hour' }
]

// Use case examples
const useCases = [
  {
    title: 'Invoice Processing',
    description: 'Automatically extract data from invoices, match with purchase orders, and update your accounting system.',
    icon: FileText,
    savings: '15 hours/week'
  },
  {
    title: 'Email Triage',
    description: 'Sort, categorize, and respond to routine emails. Escalate important messages to your team.',
    icon: MessageSquare,
    savings: '10 hours/week'
  },
  {
    title: 'CRM Updates',
    description: 'Keep your customer database current with automatic updates from emails, calls, and interactions.',
    icon: Database,
    savings: '8 hours/week'
  },
  {
    title: 'Lead Scraping',
    description: 'Find and compile potential customers from directories, social media, and industry databases.',
    icon: TrendingUp,
    savings: '20 hours/week'
  },
  {
    title: 'Appointment Scheduling',
    description: 'Coordinate calendars, send reminders, and handle rescheduling without any manual work.',
    icon: Calendar,
    savings: '5 hours/week'
  },
  {
    title: 'Data Entry',
    description: 'Transfer information between systems, update spreadsheets, and maintain records automatically.',
    icon: Laptop,
    savings: '25 hours/week'
  }
]

// Pricing tiers
const pricingTiers = [
  {
    name: 'Starter',
    price: 99,
    description: 'Perfect for trying automation',
    features: [
      '1 automated workflow',
      'Email support',
      'Basic analytics',
      'Standard setup assistance',
      '500 tasks/month'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Growth',
    price: 299,
    description: 'For growing businesses',
    features: [
      '3 automated workflows',
      'Priority support',
      'Advanced analytics',
      'Dedicated onboarding',
      '2,500 tasks/month',
      'Custom integrations'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Pro',
    price: 599,
    description: 'For scaling operations',
    features: [
      'Unlimited workflows',
      'Dedicated support manager',
      'Enterprise analytics',
      'White-glove setup',
      'Unlimited tasks',
      'API access',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

// FAQ items
const faqItems = [
  {
    question: 'How long does setup take?',
    answer: 'Most clients are up and running within 1-2 hours. Our Growth and Pro plans include dedicated setup assistance to make the process even smoother.'
  },
  {
    question: 'Do I need technical skills?',
    answer: 'Not at all. CognitiFlow is designed for business owners, not developers. You describe what you want automated in plain English, and we handle the technical implementation.'
  },
  {
    question: 'What software does it work with?',
    answer: 'CognitiFlow works with virtually any software that runs on a computer—email clients, CRMs, spreadsheets, accounting software, web browsers, and more. If a human can use it, so can your AI employee.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption, never store your passwords, and comply with SOC 2 standards. Your data stays yours—we don\'t train AI models on your information.'
  },
  {
    question: 'What if I need help?',
    answer: 'Starter plans include email support with 24-hour response times. Growth and Pro plans include priority support with faster response and dedicated assistance.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, all plans are month-to-month with no long-term contracts. Cancel anytime from your dashboard—no questions asked.'
  },
  {
    question: 'How is this different from Zapier or other automation tools?',
    answer: 'Traditional automation tools require you to set up complex workflows between specific apps. CognitiFlow\'s AI employee can handle tasks that span multiple applications, understand context, and adapt to variations—just like a human would.'
  },
  {
    question: 'What happens if the AI makes a mistake?',
    answer: 'You can set up approval workflows for sensitive tasks. The AI learns from corrections, becoming more accurate over time. Plus, our analytics dashboard helps you monitor performance.'
  }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    tasks: '',
    hoursWasted: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Save lead to CRM
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'homepage_form',
          message: `Tasks to automate: ${formData.tasks}\nHours wasted weekly: ${formData.hoursWasted}`
        }),
      })

      // Send emails
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: `Phone: ${formData.phone}\nTasks to automate: ${formData.tasks}\nHours wasted weekly: ${formData.hoursWasted}`
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', phone: '', tasks: '', hoursWasted: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-cyan-500 to-violet-600 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">CognitiFlow</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="#how-it-works" className="text-slate-600 hover:text-indigo-600 transition text-sm font-medium">How It Works</Link>
              <Link href="#use-cases" className="text-slate-600 hover:text-indigo-600 transition text-sm font-medium">Use Cases</Link>
              <Link href="#pricing" className="text-slate-600 hover:text-indigo-600 transition text-sm font-medium">Pricing</Link>
              <Link href="#faq" className="text-slate-600 hover:text-indigo-600 transition text-sm font-medium">FAQ</Link>
              <Link href="/demo" className="text-slate-600 hover:text-indigo-600 transition text-sm font-medium">Demo</Link>
              <Link
                href="#get-started"
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition text-sm"
              >
                Book a Demo
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <Link href="#how-it-works" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
              <Link href="#use-cases" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>Use Cases</Link>
              <Link href="#pricing" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link href="#faq" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <Link href="/demo" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>Demo</Link>
              <Link
                href="#get-started"
                className="block py-3 bg-indigo-600 text-white rounded-lg text-center font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
                  <Bot className="w-4 h-4" />
                  Your AI Employee is Ready
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Meet your{' '}
                  <span className="gradient-text">AI employee.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed">
                  <strong>Automate any task a human performs on a computer.</strong>
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Save 20–40 hours a week with AI automation. No coding required.
                  Works with your existing tools. Setup in minutes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="#get-started"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 text-lg"
                  >
                    Start AI Employee Setup
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition border border-slate-200 text-lg"
                  >
                    <Play className="w-5 h-5" />
                    See It In Action
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    14-day free trial
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Cancel anytime
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Cost comparison */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 md:mb-6 text-center">Why Pay More?</h3>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {/* AI Employee */}
                  <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-3 sm:p-4 md:p-6 border-2 border-indigo-500 relative">
                    <div className="absolute -top-2.5 md:-top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full whitespace-nowrap">
                      RECOMMENDED
                    </div>
                    <div className="text-center mb-2 md:mb-4 mt-1">
                      <Bot className="w-8 h-8 md:w-12 md:h-12 mx-auto text-indigo-600 mb-1 md:mb-2" />
                      <div className="font-semibold text-slate-900 text-sm md:text-base">AI Employee</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600">$99</div>
                      <div className="text-slate-500 text-xs md:text-sm">/month</div>
                    </div>
                    <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 text-xs md:text-sm">
                      <li className="flex items-center gap-1.5 md:gap-2 text-slate-600">
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                        <span className="hidden sm:inline">Works</span> 24/7
                      </li>
                      <li className="flex items-center gap-1.5 md:gap-2 text-slate-600">
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                        No sick days
                      </li>
                      <li className="flex items-center gap-1.5 md:gap-2 text-slate-600">
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                        Zero training
                      </li>
                      <li className="flex items-center gap-1.5 md:gap-2 text-slate-600">
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                        No benefits
                      </li>
                    </ul>
                  </div>

                  {/* Human Employee */}
                  <div className="bg-slate-50 rounded-xl p-3 sm:p-4 md:p-6 border border-slate-200 opacity-75">
                    <div className="text-center mb-2 md:mb-4 mt-1">
                      <Users className="w-8 h-8 md:w-12 md:h-12 mx-auto text-slate-400 mb-1 md:mb-2" />
                      <div className="font-semibold text-slate-700 text-sm md:text-base">Human Employee</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-500">$4,000</div>
                      <div className="text-slate-400 text-xs md:text-sm">/month</div>
                    </div>
                    <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 text-xs md:text-sm">
                      <li className="flex items-center gap-1.5 md:gap-2 text-slate-500">
                        <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400 flex-shrink-0" />
                        40 hrs/wk max
                      </li>
                      <li className="flex items-center gap-1.5 md:gap-2 text-slate-500">
                        <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400 flex-shrink-0" />
                        PTO & sick
                      </li>
                      <li className="flex items-center gap-1.5 md:gap-2 text-slate-500">
                        <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400 flex-shrink-0" />
                        2+ wk training
                      </li>
                      <li className="flex items-center gap-1.5 md:gap-2 text-slate-500">
                        <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400 flex-shrink-0" />
                        + benefits
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                  <div className="text-green-700 font-semibold text-sm md:text-base">Save $3,900+/month</div>
                  <div className="text-green-600 text-xs md:text-sm">That's $46,800/year back in your pocket</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Banner */}
      <section className="py-6 md:py-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-slate-400 mb-3 md:mb-4 text-sm font-medium">Sound familiar?</p>
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 md:gap-8">
            {painPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-xs md:text-sm">
                <point.icon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span className="leading-tight">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose an AI Employee?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              All the productivity of an employee. None of the overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Can Your AI Employee Do?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real automation examples with real time savings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition">
                    <useCase.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                    Save {useCase.savings}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-slate-600 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 mb-4">Don't see your use case?</p>
            <Link
              href="#get-started"
              className="text-indigo-600 font-semibold hover:text-indigo-700 inline-flex items-center gap-2"
            >
              Tell us what you need to automate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Who This Is For</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Small business owners</div>
                    <p className="text-slate-600">Drowning in admin work and can't afford to hire</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Operations managers</div>
                    <p className="text-slate-600">Looking to scale without scaling headcount</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Agencies & consultants</div>
                    <p className="text-slate-600">Wanting to deliver more without burning out</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Anyone tired of repetitive work</div>
                    <p className="text-slate-600">Ready to let AI handle the boring stuff</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why We Built CognitiFlow</h3>
              <blockquote className="text-slate-700 leading-relaxed mb-6">
                "We've watched countless small business owners struggle with the same problem:
                too much work, not enough hands. Enterprise companies have armies of people
                handling their admin. We believe every business deserves that same advantage.
                <br /><br />
                CognitiFlow is our answer—AI employees that work alongside you, handling
                the repetitive tasks so you can focus on growth."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold">
                  JR
                </div>
                <div className="w-12 h-12 rounded-full bg-cyan-200 flex items-center justify-center text-cyan-700 font-bold">
                  ES
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Jacob Rubinstein & Elie Schulman</div>
                  <div className="text-slate-600 text-sm">Co-Founders, CognitiFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Simple, Transparent Pricing</h2>
            <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto">
              Start free. Scale as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800 rounded-2xl p-5 md:p-8 ${
                  tier.popular ? 'ring-2 ring-indigo-500 md:scale-105 order-first md:order-none' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{tier.name}</h3>
                  <p className="text-slate-400 text-xs md:text-sm mb-3 md:mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl md:text-4xl font-bold">${tier.price}</span>
                    <span className="text-slate-400 text-sm">/month</span>
                  </div>
                </div>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 md:gap-3 text-slate-300 text-sm md:text-base">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#get-started"
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition text-sm md:text-base ${
                    tier.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-6 md:mt-8 text-xs md:text-sm">
            All plans include 14-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-indigo-600" />
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Security First</h2>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Your data security is our top priority. We've built CognitiFlow with enterprise-grade
                  protections so you can automate with confidence.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Bank-level encryption</div>
                      <p className="text-slate-600 text-sm">256-bit AES encryption for all data</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">We never store your passwords</div>
                      <p className="text-slate-600 text-sm">Secure credential handling with zero knowledge</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">SOC 2 compliant</div>
                      <p className="text-slate-600 text-sm">Enterprise security standards</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">GDPR ready</div>
                      <p className="text-slate-600 text-sm">Full compliance with data protection regulations</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 max-w-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Data Retention Policy</h3>
                    <p className="text-slate-600 text-sm mb-4">
                      We retain your automation logs for 30 days. You can request deletion at any time.
                      Your business data is never used to train our AI models.
                    </p>
                    <Link href="/privacy" className="text-indigo-600 text-sm font-medium hover:text-indigo-700">
                      Read our Privacy Policy →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about CognitiFlow</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-slate-900">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-4">
            <Download className="w-12 h-12" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Free Guide: The Small Business Automation Survival Kit</h2>
          <p className="text-lg opacity-90 mb-8">
            Learn the 7 tasks every small business should automate first, plus templates and checklists to get started.
          </p>
          <Link
            href="/lead-magnet"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            <Download className="w-5 h-5" />
            Download Free PDF
          </Link>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Coming Next</h2>
            <p className="text-xl text-slate-600">Our roadmap for making AI automation even better</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Core automation platform</div>
                <p className="text-slate-600 text-sm">Email, data entry, CRM updates, and more</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                Q1
              </div>
              <div>
                <div className="font-semibold text-slate-900">Voice AI integration</div>
                <p className="text-slate-600 text-sm">AI employees that can handle phone calls</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center flex-shrink-0 text-slate-600 text-sm font-bold">
                Q2
              </div>
              <div>
                <div className="font-semibold text-slate-700">Mobile app</div>
                <p className="text-slate-500 text-sm">Monitor and control automations from your phone</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center flex-shrink-0 text-slate-600 text-sm font-bold">
                Q3
              </div>
              <div>
                <div className="font-semibold text-slate-700">Team collaboration</div>
                <p className="text-slate-500 text-sm">Share automations across your organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Signup Form Section */}
      <section id="get-started" className="py-12 md:py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Meet Your AI Employee?</h2>
              <p className="text-base md:text-xl text-slate-400 mb-6 md:mb-8">
                Tell us about the tasks that are eating up your time. We'll show you exactly how AI can help.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 md:space-y-0 lg:space-y-6 mb-6 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs md:text-sm">Email</div>
                    <div className="text-white text-sm md:text-base">hello@cognitiflow.ai</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs md:text-sm">Phone</div>
                    <div className="text-white text-sm md:text-base">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs md:text-sm">Locations</div>
                    <div className="text-white text-sm md:text-base">Israel & USA</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://linkedin.com/company/cognitiflow" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/cognitiflow" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5 md:p-8 order-1 lg:order-2">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Start Your AI Employee Setup</h3>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5 md:mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5 md:mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5 md:mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5 md:mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="tasks" className="block text-sm font-medium text-slate-300 mb-1.5 md:mb-2">
                    What tasks would you like to automate? *
                  </label>
                  <textarea
                    id="tasks"
                    value={formData.tasks}
                    onChange={(e) => setFormData({ ...formData, tasks: e.target.value })}
                    rows={3}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-base"
                    placeholder="E.g., Data entry, email responses, invoice processing..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hoursWasted" className="block text-sm font-medium text-slate-300 mb-1.5 md:mb-2">
                    Hours spent on these tasks weekly
                  </label>
                  <select
                    id="hoursWasted"
                    value={formData.hoursWasted}
                    onChange={(e) => setFormData({ ...formData, hoursWasted: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
                  >
                    <option value="">Select hours</option>
                    <option value="1-5">1-5 hours</option>
                    <option value="5-10">5-10 hours</option>
                    <option value="10-20">10-20 hours</option>
                    <option value="20-40">20-40 hours</option>
                    <option value="40+">40+ hours</option>
                  </select>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 md:p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm md:text-base">
                    <strong>Thanks!</strong> We'll reach out within 24 hours to schedule your demo.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 md:p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm md:text-base">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 md:py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Book a Demo
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Calendly Integration */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-700">
                <p className="text-slate-400 text-xs md:text-sm text-center mb-3 md:mb-4">Or schedule directly</p>
                <a
                  href="https://calendly.com/elie-schulman/ai-strategy-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 md:py-3 border border-indigo-500 text-indigo-400 rounded-lg font-medium text-center hover:bg-indigo-500/10 transition text-sm md:text-base"
                >
                  Book a Free 30-Min Demo Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-cyan-500 to-violet-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">CognitiFlow</span>
              </div>
              <p className="text-slate-400 text-xs md:text-sm">
                AI employees for small businesses. Automate any task a human performs on a computer.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Product</h4>
              <ul className="space-y-2 text-slate-400 text-xs md:text-sm">
                <li><Link href="#how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link href="#use-cases" className="hover:text-white transition">Use Cases</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/demo" className="hover:text-white transition">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
              <ul className="space-y-2 text-slate-400 text-xs md:text-sm">
                <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-xs md:text-sm">
                <li><Link href="/lead-magnet" className="hover:text-white transition">Free PDF Guide</Link></li>
                <li><Link href="#faq" className="hover:text-white transition">FAQ</Link></li>
                <li><a href="mailto:hello@cognitiflow.ai" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-xs md:text-sm">
              © {new Date().getFullYear()} CognitiFlow. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/cognitiflow" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/cognitiflow" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
