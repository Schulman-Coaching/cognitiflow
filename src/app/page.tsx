'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Brain,
  Workflow,
  Bot,
  Shield,
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
  ChevronRight,
  Sparkles,
  Building2,
  Users,
  Target
} from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Strategy Consulting',
    description: 'We analyze your business processes and identify high-impact opportunities for AI integration that deliver measurable ROI.',
    features: ['Process Assessment', 'AI Readiness Audit', 'Implementation Roadmap', 'ROI Projections']
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks and optimize operations with intelligent automation solutions tailored to your industry.',
    features: ['Document Processing', 'Data Entry Automation', 'Email & Communication', 'Reporting Systems']
  },
  {
    icon: Bot,
    title: 'Custom AI Solutions',
    description: 'Bespoke AI applications built specifically for your unique business challenges and competitive advantages.',
    features: ['Chatbots & Assistants', 'Predictive Analytics', 'Computer Vision', 'NLP Solutions']
  }
]

const industries = [
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Legal', icon: '⚖️' },
  { name: 'Real Estate', icon: '🏠' },
  { name: 'Finance', icon: '💰' },
  { name: 'E-commerce', icon: '🛒' },
  { name: 'Manufacturing', icon: '🏭' }
]

const stats = [
  { value: '40%', label: 'Average Time Saved' },
  { value: '3x', label: 'Productivity Increase' },
  { value: '60%', label: 'Cost Reduction' },
  { value: '24/7', label: 'AI Availability' }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your business, challenges, and goals through in-depth consultation.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Our team designs a customized AI solution roadmap with clear milestones and ROI targets.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'We build and deploy your solution with minimal disruption to your operations.'
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Continuous monitoring and refinement ensures your AI systems improve over time.'
  }
]

const testimonials = [
  {
    quote: "Cognitiflow transformed our customer service operations. We now handle 3x the inquiries with the same team.",
    author: "Sarah M.",
    role: "Operations Director",
    company: "Regional Healthcare Provider"
  },
  {
    quote: "The ROI was clear within the first month. Document processing that took hours now takes minutes.",
    author: "David R.",
    role: "Managing Partner",
    company: "Law Firm"
  },
  {
    quote: "Their team understood our unique challenges and delivered a solution that actually works for our workflow.",
    author: "Jennifer L.",
    role: "CEO",
    company: "E-commerce Brand"
  }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Save lead to CRM
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'contact_form' }),
      })

      // Send emails
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-slate-600 hover:text-indigo-600 transition">Services</Link>
              <Link href="#process" className="text-slate-600 hover:text-indigo-600 transition">Process</Link>
              <Link href="#industries" className="text-slate-600 hover:text-indigo-600 transition">Industries</Link>
              <Link href="#about" className="text-slate-600 hover:text-indigo-600 transition">About</Link>
              <Link
                href="#contact"
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <Link href="#services" className="block py-2 text-slate-600">Services</Link>
              <Link href="#process" className="block py-2 text-slate-600">Process</Link>
              <Link href="#industries" className="block py-2 text-slate-600">Industries</Link>
              <Link href="#about" className="block py-2 text-slate-600">About</Link>
              <Link
                href="#contact"
                className="block py-3 bg-indigo-600 text-white rounded-lg text-center font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              AI-Powered Business Transformation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Transform Your Business with{' '}
              <span className="gradient-text">Intelligent AI</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We help small and medium businesses harness the power of AI to automate workflows,
              enhance decision-making, and drive growth. No technical expertise required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition border border-slate-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to solve real business problems and deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful AI implementation with minimal risk.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-slate-800 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-slate-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Deep expertise across multiple sectors, with solutions tailored to each industry&apos;s unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition cursor-pointer"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="font-semibold text-slate-900">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  <div className="text-indigo-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Cognitiflow</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded by Jacob Rubinstein and Elie Schulman, Cognitiflow was born from a simple
                observation: small businesses deserve the same AI advantages that large enterprises enjoy.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                We combine deep technical expertise with practical business understanding to deliver
                AI solutions that work in the real world. Our mission is to make AI accessible,
                affordable, and impactful for businesses of all sizes.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Results-Focused</div>
                    <div className="text-slate-600 text-sm">Every solution tied to ROI</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Human-Centered</div>
                    <div className="text-slate-600 text-sm">AI that augments your team</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Security-First</div>
                    <div className="text-slate-600 text-sm">Your data stays protected</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">SMB Experts</div>
                    <div className="text-slate-600 text-sm">Built for small business</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 via-cyan-500 to-violet-500 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">50+</div>
                    <div className="text-slate-600 text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">98%</div>
                    <div className="text-slate-600 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">6</div>
                    <div className="text-slate-600 text-sm">Industries Served</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">2M+</div>
                    <div className="text-slate-600 text-sm">Tasks Automated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 gradient-bg">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8">
            Schedule a free consultation to discover how AI can revolutionize your operations.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-slate-100 transition shadow-lg"
          >
            Book Your Free Strategy Session
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let&apos;s Talk</h2>
              <p className="text-xl text-slate-400 mb-8">
                Tell us about your business challenges. We&apos;ll show you how AI can help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Email</div>
                    <div className="text-white">hello@cognitiflow.ai</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Phone</div>
                    <div className="text-white">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Locations</div>
                    <div className="text-white">Israel & USA</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your business challenges..."
                    required
                  />
                </div>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                    Thank you! We&apos;ll be in touch within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {/* Calendly Integration */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-slate-400 text-sm text-center mb-4">Or schedule a call directly</p>
                <a
                  href="https://calendly.com/cognitiflow/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 border border-indigo-500 text-indigo-400 rounded-lg font-medium text-center hover:bg-indigo-500/10 transition"
                >
                  Book a Free 30-Min Consultation
                </a>
              </div>
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
            <div className="flex gap-8 text-slate-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
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
