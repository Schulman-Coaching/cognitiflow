import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using Cognitiflow services.',
}

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <p className="text-slate-400 mb-8">Last updated: November 2024</p>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                <p className="text-slate-300 leading-relaxed">
                  By accessing or using Cognitiflow&apos;s website and services, you agree to be bound by these
                  Terms of Service and all applicable laws and regulations. If you do not agree with any
                  of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
                <p className="text-slate-300 leading-relaxed">
                  Cognitiflow provides AI consulting, workflow automation, and custom AI solution services.
                  The specific scope of services will be defined in individual service agreements or
                  statements of work between Cognitiflow and the client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Consultations</h2>
                <p className="text-slate-300 leading-relaxed">
                  Free strategy consultations are offered to prospective clients. These consultations are
                  informational in nature and do not create a binding agreement for services. Scheduling
                  a consultation does not guarantee the availability of any specific services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                <p className="text-slate-300 leading-relaxed">
                  All content on this website, including but not limited to text, graphics, logos, and
                  software, is the property of Cognitiflow and is protected by intellectual property laws.
                  You may not reproduce, distribute, or create derivative works without our express
                  written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Client Responsibilities</h2>
                <p className="text-slate-300 leading-relaxed mb-4">When engaging our services, you agree to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to communications in a timely manner</li>
                  <li>Provide necessary access to systems and data as required</li>
                  <li>Maintain confidentiality of shared credentials and access</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Confidentiality</h2>
                <p className="text-slate-300 leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or sensitive
                  information shared during the course of our engagement. This includes business
                  strategies, technical implementations, and client data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
                <p className="text-slate-300 leading-relaxed">
                  To the maximum extent permitted by law, Cognitiflow shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages, including loss
                  of profits, data, or other intangible losses, resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
                  either express or implied. We do not guarantee that our services will meet your
                  specific requirements or that results will be achieved within a particular timeframe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Indemnification</h2>
                <p className="text-slate-300 leading-relaxed">
                  You agree to indemnify and hold harmless Cognitiflow, its founders, employees, and
                  partners from any claims, damages, losses, or expenses arising from your use of
                  our services or violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
                <p className="text-slate-300 leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior
                  notice, for any breach of these Terms of Service. Upon termination, your right to
                  use our services will cease immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law</h2>
                <p className="text-slate-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the
                  State of New York, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to Terms</h2>
                <p className="text-slate-300 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If a revision
                  is material, we will provide at least 30 days&apos; notice prior to any new terms
                  taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Us</h2>
                <p className="text-slate-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
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
