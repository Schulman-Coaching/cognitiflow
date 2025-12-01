'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Bot,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Headphones,
  Users,
  ChevronDown
} from 'lucide-react'

const pricingTiers = [
  {
    name: 'Starter',
    price: { monthly: 99, annual: 79 },
    description: 'Perfect for trying automation',
    features: [
      '1 automated workflow',
      'Email support (24hr response)',
      'Basic analytics dashboard',
      'Standard setup assistance',
      '500 tasks/month',
      'Community access'
    ],
    notIncluded: [
      'Priority support',
      'Custom integrations',
      'API access'
    ],
    cta: 'Start Free Trial',
    popular: false,
    stripePriceId: {
      monthly: 'price_starter_monthly',
      annual: 'price_starter_annual'
    }
  },
  {
    name: 'Growth',
    price: { monthly: 299, annual: 239 },
    description: 'For growing businesses',
    features: [
      '3 automated workflows',
      'Priority support (4hr response)',
      'Advanced analytics',
      'Dedicated onboarding call',
      '2,500 tasks/month',
      'Custom integrations',
      'Workflow templates library',
      'Team collaboration (2 users)'
    ],
    notIncluded: [
      'Unlimited workflows',
      'API access'
    ],
    cta: 'Start Free Trial',
    popular: true,
    stripePriceId: {
      monthly: 'price_growth_monthly',
      annual: 'price_growth_annual'
    }
  },
  {
    name: 'Pro',
    price: { monthly: 599, annual: 479 },
    description: 'For scaling operations',
    features: [
      'Unlimited workflows',
      'Dedicated support manager',
      'Enterprise analytics',
      'White-glove setup',
      'Unlimited tasks',
      'Full API access',
      'Custom workflow development',
      'Team collaboration (unlimited)',
      'SLA guarantee (99.9% uptime)',
      'Priority feature requests'
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
    stripePriceId: {
      monthly: 'price_pro_monthly',
      annual: 'price_pro_annual'
    }
  }
]

const comparisonFeatures = [
  { name: 'Automated workflows', starter: '1', growth: '3', pro: 'Unlimited' },
  { name: 'Tasks per month', starter: '500', growth: '2,500', pro: 'Unlimited' },
  { name: 'Team members', starter: '1', growth: '2', pro: 'Unlimited' },
  { name: 'Support response time', starter: '24 hours', growth: '4 hours', pro: 'Dedicated manager' },
  { name: 'Analytics', starter: 'Basic', growth: 'Advanced', pro: 'Enterprise' },
  { name: 'Onboarding', starter: 'Self-serve', growth: 'Guided call', pro: 'White-glove' },
  { name: 'Custom integrations', starter: false, growth: true, pro: true },
  { name: 'API access', starter: false, growth: false, pro: true },
  { name: 'SLA guarantee', starter: false, growth: false, pro: true },
  { name: 'Priority features', starter: false, growth: false, pro: true }
]

const faqItems = [
  {
    question: 'What counts as a "task"?',
    answer: 'A task is a single automated action, like sending an email, updating a spreadsheet row, or processing an invoice. Most workflows use 5-10 tasks per run.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle.'
  },
  {
    question: 'What happens if I exceed my task limit?',
    answer: 'We\'ll notify you when you reach 80% of your limit. If you exceed it, your automations will pause until the next billing cycle or you upgrade your plan.'
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No. All plans are month-to-month (or annual if you choose). Cancel anytime without penalty.'
  },
  {
    question: 'Do you offer discounts for nonprofits?',
    answer: 'Yes! Qualifying nonprofits receive 25% off any plan. Contact us at hello@cognitiflow.ai with your organization details.'
  }
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleCheckout = async (tier: typeof pricingTiers[0]) => {
    // In production, this would create a Stripe Checkout session
    // For now, redirect to contact form
    if (tier.name === 'Pro') {
      window.location.href = '/#get-started'
    } else {
      // This would be replaced with Stripe Checkout
      window.location.href = '/#get-started'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-cyan-500 to-violet-600 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">CognitiFlow</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-600 hover:text-indigo-600 text-sm font-medium">
                Home
              </Link>
              <Link
                href="/#get-started"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition text-sm"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-10 md:py-16 px-4 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8">
            Start with a 14-day free trial. No credit card required.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-2 md:gap-4 bg-white rounded-full p-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition text-sm md:text-base ${
                billingPeriod === 'monthly'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition text-sm md:text-base flex items-center ${
                billingPeriod === 'annual'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual
              <span className="ml-1.5 md:ml-2 text-[10px] md:text-xs bg-green-100 text-green-700 px-1.5 md:px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-5 md:p-8 shadow-sm border ${
                  tier.popular ? 'border-indigo-500 ring-2 ring-indigo-500 order-first md:order-none' : 'border-slate-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{tier.name}</h3>
                  <p className="text-slate-600 text-xs md:text-sm mb-3 md:mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-slate-900">
                      ${tier.price[billingPeriod]}
                    </span>
                    <span className="text-slate-500 text-sm">/month</span>
                  </div>
                  {billingPeriod === 'annual' && (
                    <p className="text-green-600 text-xs md:text-sm mt-2">
                      Billed annually (${tier.price.annual * 12}/year)
                    </p>
                  )}
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 md:gap-3 text-slate-700 text-sm md:text-base">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                  {tier.notIncluded.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 md:gap-3 text-slate-400 text-sm md:text-base">
                      <span className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-center">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCheckout(tier)}
                  className={`w-full py-2.5 md:py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 text-sm md:text-base ${
                    tier.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-6 md:mt-8 text-xs md:text-sm">
            All plans include 14-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Compare Plans
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-medium text-slate-600">Feature</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600">Starter</th>
                  <th className="text-center py-4 px-4 font-medium text-indigo-600">Growth</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-4 px-4 text-slate-700">{feature.name}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )
                      ) : (
                        <span className="text-slate-700">{feature.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-indigo-50/50">
                      {typeof feature.growth === 'boolean' ? (
                        feature.growth ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )
                      ) : (
                        <span className="text-slate-700 font-medium">{feature.growth}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )
                      ) : (
                        <span className="text-slate-700">{feature.pro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Secure Payments</h3>
              <p className="text-slate-600 text-sm">
                Payments processed securely by Stripe. We never see your card details.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Instant Access</h3>
              <p className="text-slate-600 text-sm">
                Start your free trial immediately. No waiting, no hassle.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Expert Support</h3>
              <p className="text-slate-600 text-sm">
                Our team is here to help you succeed with automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Pricing FAQ
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition"
                >
                  <span className="font-medium text-slate-900">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Automating?</h2>
          <p className="text-xl opacity-90 mb-8">
            Start your free trial today. No credit card required.
          </p>
          <Link
            href="/#get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 via-cyan-500 to-violet-600 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">CognitiFlow</span>
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
