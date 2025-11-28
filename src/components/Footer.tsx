import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-cyan-500 to-violet-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Cognitiflow</span>
            </Link>
            <p className="text-slate-400 max-w-sm">
              Transforming businesses with intelligent AI solutions. Custom consulting,
              workflow automation, and smart tools for growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-consulting" className="text-slate-400 hover:text-white transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/workflow-automation" className="text-slate-400 hover:text-white transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services/custom-ai" className="text-slate-400 hover:text-white transition-colors">
                  Custom AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/book" className="text-slate-400 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-slate-400 hover:text-white transition-colors">
                  Try Demo
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Cognitiflow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@cognitiflow.ai"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              hello@cognitiflow.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
