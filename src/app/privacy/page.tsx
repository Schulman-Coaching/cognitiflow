import Link from 'next/link'
import { Bot, Shield, Lock, Eye, Trash2, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how CognitiFlow collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
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
              <Shield className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
            </div>
            <p className="text-slate-600">Last updated: December 2024</p>
          </div>

          {/* Key Points Summary */}
          <div className="bg-indigo-50 rounded-xl p-6 mb-8 border border-indigo-100">
            <h2 className="font-semibold text-indigo-900 mb-4">Key Points Summary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-indigo-800">
                  <strong>We never store your passwords</strong> - Zero-knowledge credential handling
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-indigo-800">
                  <strong>No AI training on your data</strong> - Your business data stays private
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Trash2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-indigo-800">
                  <strong>30-day data retention</strong> - Automation logs auto-delete
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-indigo-800">
                  <strong>Easy data deletion</strong> - Request removal anytime
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
                <p className="text-slate-600 leading-relaxed">
                  CognitiFlow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                  when you visit our website cognitiflow.ai and use our AI automation services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
                <p className="text-slate-600 leading-relaxed mb-4">We collect information in the following ways:</p>

                <h3 className="text-lg font-medium text-slate-800 mb-2">2.1 Information You Provide</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li><strong>Account Information:</strong> Name, email address, company name, phone number when you sign up or contact us.</li>
                  <li><strong>Automation Configuration:</strong> Details about the tasks you want to automate and the applications you use.</li>
                  <li><strong>Payment Information:</strong> Billing details processed securely through Stripe (we do not store full card numbers).</li>
                  <li><strong>Communications:</strong> Information you provide when you contact our support team.</li>
                </ul>

                <h3 className="text-lg font-medium text-slate-800 mb-2">2.2 Information Collected Automatically</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                  <li><strong>Usage Data:</strong> How you interact with our website and services.</li>
                  <li><strong>Device Data:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                  <li><strong>Automation Logs:</strong> Records of automated tasks performed (retained for 30 days).</li>
                </ul>

                <h3 className="text-lg font-medium text-slate-800 mb-2">2.3 Information We Do NOT Collect</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>Passwords:</strong> We never store or have access to your passwords for connected applications.</li>
                  <li><strong>Sensitive Business Data:</strong> Content processed by automations is not stored beyond temporary processing.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-slate-600 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Provide, maintain, and improve our automation services</li>
                  <li>Process your transactions and send related information</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices, updates, and administrative messages</li>
                  <li>Communicate with you about products, services, and promotions (with your consent)</li>
                  <li>Monitor and analyze usage patterns to improve user experience</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Data Retention</h2>
                <p className="text-slate-600 leading-relaxed mb-4">We retain different types of data for different periods:</p>
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <ul className="space-y-3 text-slate-600">
                    <li><strong>Account Information:</strong> Retained while your account is active and for 90 days after closure.</li>
                    <li><strong>Automation Logs:</strong> Retained for 30 days, then automatically deleted.</li>
                    <li><strong>Billing Records:</strong> Retained for 7 years for tax and legal compliance.</li>
                    <li><strong>Support Communications:</strong> Retained for 2 years to improve service.</li>
                  </ul>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  You can request deletion of your data at any time by contacting us at privacy@cognitiflow.ai.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">5. AI and Machine Learning</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Important:</strong> Your business data is never used to train our AI models or any third-party AI systems.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our AI processes your data solely to perform the automations you configure. This processing is temporary
                  and data is not retained beyond what is necessary to complete the task and maintain logs for the
                  retention period specified above.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Data Security</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>Encryption:</strong> 256-bit AES encryption for data at rest and TLS 1.3 for data in transit</li>
                  <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication for our team</li>
                  <li><strong>Infrastructure:</strong> Hosted on SOC 2 Type II certified cloud providers</li>
                  <li><strong>Monitoring:</strong> 24/7 security monitoring and intrusion detection</li>
                  <li><strong>Audits:</strong> Regular security assessments and penetration testing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Information Sharing</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information. We may share information with:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>Service Providers:</strong> Companies that help us provide our services (hosting, email, analytics)</li>
                  <li><strong>Payment Processors:</strong> Stripe for secure payment processing</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  All service providers are contractually obligated to protect your data and use it only
                  for the purposes we specify.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Cookies and Tracking</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We use cookies and similar technologies for:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  You can control cookies through your browser settings. Note that disabling certain
                  cookies may affect website functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Your Rights</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  To exercise these rights, contact us at privacy@cognitiflow.ai. We will respond within 30 days.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">10. International Data Transfers</h2>
                <p className="text-slate-600 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own.
                  We ensure appropriate safeguards are in place to protect your information, including
                  Standard Contractual Clauses approved by relevant authorities.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">11. Children&apos;s Privacy</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly
                  collect personal information from children. If you believe we have collected information
                  from a child, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">12. Changes to This Policy</h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material
                  changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot;
                  date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">13. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700">
                    <strong>Email:</strong> privacy@cognitiflow.ai<br />
                    <strong>General Inquiries:</strong> hello@cognitiflow.ai<br />
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
