import Link from 'next/link'
import { Bot, FileText, CreditCard, AlertTriangle, Scale } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using CognitiFlow services.',
}

export default function TermsOfServicePage() {
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
            <Link href="/" className="text-slate-600 hover:text-indigo-600 text-sm font-medium">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
            </div>
            <p className="text-slate-600">Last updated: December 2024</p>
          </div>

          {/* Quick Summary */}
          <div className="bg-amber-50 rounded-xl p-6 mb-8 border border-amber-100">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-semibold text-amber-900 mb-2">Important Summary</h2>
                <p className="text-sm text-amber-800">
                  By using CognitiFlow, you agree to these terms. Key points: Services are provided &quot;as is,&quot;
                  you&apos;re responsible for your data and how you use automations, and disputes are resolved through
                  arbitration. Please read the full terms below.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  By accessing or using CognitiFlow&apos;s website (cognitiflow.ai) and services, you agree to be
                  bound by these Terms of Service (&quot;Terms&quot;) and all applicable laws and regulations.
                  If you do not agree with any of these Terms, you are prohibited from using or accessing
                  our services. These Terms constitute a legally binding agreement between you and CognitiFlow.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Description of Services</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  CognitiFlow provides AI-powered automation services that help businesses automate repetitive
                  computer-based tasks. Our services include:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>AI workflow automation setup and configuration</li>
                  <li>Task automation across various software applications</li>
                  <li>Monitoring and analytics dashboards</li>
                  <li>Customer support and assistance</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  The specific scope of services will be defined by the plan you select and any additional
                  agreements between CognitiFlow and you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Account Registration</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  To use our services, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  You must be at least 18 years old and have the legal authority to bind yourself or
                  your organization to these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Subscription Plans and Pricing</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  CognitiFlow offers various subscription plans with different features and pricing.
                  By subscribing to a plan, you agree to:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Pay all fees associated with your selected plan</li>
                  <li>Provide valid payment information</li>
                  <li>Authorize automatic recurring billing unless you cancel</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Prices are subject to change with 30 days&apos; notice. Changes will not affect your current
                  billing period.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Payment Terms</h2>
                <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 mb-4">
                  <CreditCard className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Payment Processing:</strong> All payments are processed securely through Stripe.
                    CognitiFlow does not store your full credit card information.
                  </p>
                </div>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>Billing Cycle:</strong> Subscriptions are billed monthly or annually based on your selection.</li>
                  <li><strong>Free Trial:</strong> If offered, the free trial period is 14 days. Your card will be charged after the trial unless you cancel.</li>
                  <li><strong>Failed Payments:</strong> If payment fails, we will attempt to charge your card again. After 3 failed attempts, your account may be suspended.</li>
                  <li><strong>Refunds:</strong> We offer a 14-day money-back guarantee for new subscribers. After this period, payments are non-refundable except as required by law.</li>
                  <li><strong>Taxes:</strong> Prices may not include applicable taxes. You are responsible for any taxes associated with your subscription.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Cancellation</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You may cancel your subscription at any time through your account dashboard or by
                  contacting us at billing@cognitiflow.ai.
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Cancellation takes effect at the end of your current billing period</li>
                  <li>You will retain access to services until the end of your paid period</li>
                  <li>No partial refunds are provided for unused time in a billing period</li>
                  <li>You may export your data before cancellation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">7. User Responsibilities</h2>
                <p className="text-slate-600 leading-relaxed mb-4">When using our services, you agree to:</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Provide accurate information about the tasks you want to automate</li>
                  <li>Ensure you have the legal right to automate the tasks you configure</li>
                  <li>Provide necessary access to systems and data as required for automations</li>
                  <li>Maintain confidentiality of any shared credentials and access tokens</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for illegal, harmful, or unauthorized purposes</li>
                  <li>Not attempt to reverse engineer, decompile, or hack our services</li>
                  <li>Not use our services to spam, harass, or harm others</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Acceptable Use</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You may not use CognitiFlow services to:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights of others</li>
                  <li>Transmit malware, viruses, or harmful code</li>
                  <li>Engage in unauthorized access to systems or data</li>
                  <li>Send spam or unsolicited communications</li>
                  <li>Scrape data without proper authorization</li>
                  <li>Circumvent security measures or rate limits</li>
                  <li>Impersonate others or misrepresent your identity</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Violation of these rules may result in immediate termination of your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Intellectual Property</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Our Property:</strong> All content on this website, including but not limited to text,
                  graphics, logos, software, and the service itself, is the property of CognitiFlow and is
                  protected by intellectual property laws. You may not reproduce, distribute, or create
                  derivative works without our express written permission.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Your Property:</strong> You retain all rights to your data and content. By using our
                  services, you grant us a limited license to process your data solely for the purpose of
                  providing the automation services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Confidentiality</h2>
                <p className="text-slate-600 leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or sensitive
                  information shared during the course of using our services. This includes business
                  strategies, technical implementations, and any data processed through our platform.
                  Confidentiality obligations survive termination of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">11. Service Availability</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We strive to maintain high availability of our services. However:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>We do not guarantee 100% uptime</li>
                  <li>Scheduled maintenance will be communicated in advance when possible</li>
                  <li>We are not liable for downtime caused by factors outside our control</li>
                  <li>Pro plan subscribers may be eligible for SLA credits (see your plan agreement)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">12. Limitation of Liability</h2>
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <p className="text-slate-700 font-medium">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, COGNITIFLOW SHALL NOT BE LIABLE FOR ANY
                    INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT
                    NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING
                    FROM YOUR USE OF OUR SERVICES.
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  In no event shall our total liability to you exceed the amount you have paid us in the
                  twelve (12) months preceding the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">13. Disclaimer of Warranties</h2>
                <p className="text-slate-600 leading-relaxed">
                  OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
                  GUARANTEE THAT OUR SERVICES WILL MEET YOUR SPECIFIC REQUIREMENTS, OPERATE WITHOUT
                  INTERRUPTION, OR BE ERROR-FREE.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">14. Indemnification</h2>
                <p className="text-slate-600 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless CognitiFlow, its founders, employees,
                  partners, and agents from any claims, damages, losses, liabilities, costs, or expenses
                  (including reasonable attorneys&apos; fees) arising from: (a) your use of our services;
                  (b) your violation of these Terms; (c) your violation of any rights of a third party;
                  or (d) any content or data you submit through our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">15. Termination</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We may terminate or suspend your account and access to our services:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Immediately if you breach these Terms</li>
                  <li>With 30 days&apos; notice for any reason</li>
                  <li>If required by law</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Upon termination, your right to use our services ceases immediately. You may request
                  export of your data within 30 days of termination.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">16. Dispute Resolution</h2>
                <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 mb-4">
                  <Scale className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Arbitration Agreement:</strong> Any disputes arising from these Terms or your
                    use of our services will be resolved through binding arbitration, except where
                    prohibited by law.
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Before initiating arbitration, you agree to first attempt to resolve the dispute
                  informally by contacting us at legal@cognitiflow.ai. If we cannot resolve the dispute
                  within 30 days, either party may proceed with arbitration. Class action lawsuits and
                  class arbitrations are waived to the extent permitted by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">17. Governing Law</h2>
                <p className="text-slate-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the
                  State of Delaware, United States, without regard to its conflict of law provisions.
                  Any legal action or proceeding not subject to arbitration shall be brought exclusively
                  in the federal or state courts located in Delaware.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">18. Changes to Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. If we make material changes,
                  we will provide at least 30 days&apos; notice via email or through our services before the
                  changes take effect. Your continued use of our services after changes become effective
                  constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">19. Severability</h2>
                <p className="text-slate-600 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision
                  will be limited or eliminated to the minimum extent necessary, and the remaining
                  provisions will remain in full force and effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">20. Entire Agreement</h2>
                <p className="text-slate-600 leading-relaxed">
                  These Terms, together with our Privacy Policy and any other agreements referenced herein,
                  constitute the entire agreement between you and CognitiFlow regarding your use of our
                  services and supersede all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">21. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700">
                    <strong>General Inquiries:</strong> hello@cognitiflow.ai<br />
                    <strong>Legal Matters:</strong> legal@cognitiflow.ai<br />
                    <strong>Billing Questions:</strong> billing@cognitiflow.ai<br />
                    <strong>Address:</strong> CognitiFlow, United States & Israel
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
