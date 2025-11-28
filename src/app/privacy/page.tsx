import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Cognitiflow collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
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
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="text-slate-400 mb-8">Last updated: November 2024</p>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p className="text-slate-300 leading-relaxed">
                  Cognitiflow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                  when you visit our website cognitiflow.ai and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <p className="text-slate-300 leading-relaxed mb-4">We may collect information about you in various ways:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li><strong className="text-white">Personal Data:</strong> Name, email address, company name, and any other information you provide when filling out our contact form or booking a consultation.</li>
                  <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and navigation paths.</li>
                  <li><strong className="text-white">Device Data:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-slate-300 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Schedule and conduct consultations</li>
                  <li>Send you relevant information about our services</li>
                  <li>Improve our website and services</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
                <p className="text-slate-300 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share your information with trusted service providers who assist us in
                  operating our website and conducting our business, provided they agree to keep
                  this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
                <p className="text-slate-300 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect
                  your personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies and Tracking</h2>
                <p className="text-slate-300 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website
                  and hold certain information. You can instruct your browser to refuse all cookies
                  or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Services</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our website may use third-party services such as Google Analytics for analytics,
                  Calendly for scheduling, and Resend for email communications. These services have
                  their own privacy policies governing the use of your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights</h2>
                <p className="text-slate-300 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
                <p className="text-slate-300 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the
                  &quot;Last updated&quot; date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
                <p className="text-slate-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-indigo-400 mt-2">hello@cognitiflow.ai</p>
              </section>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <Link href="/" className="text-indigo-400 hover:text-indigo-300">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
