import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Wrench, FileText, ArrowRight, Zap } from 'lucide-react';

const pilotIncludes = [
  '30-60 day pilot period',
  'Devices for up to 4 classrooms',
  'Full dashboard access',
  'Weekly compliance reports',
  'Success criteria defined upfront',
  'Dedicated onboarding support',
];

const timeline = [
  { icon: Wrench, title: 'Install', description: 'Minutes per device', detail: 'Wall-mount and power on—no complex wiring needed' },
  { icon: Clock, title: 'Go-live', description: 'Same day', detail: 'Start monitoring immediately after installation' },
  { icon: FileText, title: 'Reports', description: 'Immediate', detail: 'Compliance data available as soon as you go live' },
];

export default function Pricing() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#2A6363]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2A6363] rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Livesitter Mini</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2D2D2D]/70">
            <Link to="/how-it-works" className="hover:text-[#2A6363] transition-colors">How It Works</Link>
            <Link to="/pricing" className="text-[#2A6363]">Pricing</Link>
            <Link to="/faq" className="hover:text-[#2A6363] transition-colors">FAQ</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/pilot" className="px-5 py-2.5 bg-[#2A6363] text-white text-sm font-medium hover:bg-[#1D4E4E] transition-colors rounded">
              Request a Pilot
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-[#2A6363] text-white text-xs font-medium mb-6 rounded-full">
            Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Start with a pilot
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Validate LiveSitter in your environment before committing. No risk, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pilot Program Card */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#2A6363]/10 shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-[#2A6363] px-8 py-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                {/* <Zap className="w-6 h-6" /> */}
                <h2 className="text-2xl font-semibold text-white">Pilot Program</h2>
              </div>
              <p className="text-white/80">
                The best way to experience LiveSitter before scaling across your facilities.
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* What's Included */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#2D2D2D]">What's Included</h3>
                  <ul className="space-y-3">
                    {pilotIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It Works */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#2D2D2D]">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#2A6363] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <div>
                        <span className="font-medium text-[#2D2D2D]">Request a pilot</span>
                        <p className="text-sm text-slate-600">Fill out the form and we'll contact you within 24 hours.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#2A6363] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <div>
                        <span className="font-medium text-[#2D2D2D]">Define success criteria</span>
                        <p className="text-sm text-slate-600">Together, we set measurable goals for your pilot.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#2A6363] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <div>
                        <span className="font-medium text-[#2D2D2D]">Install and go live</span>
                        <p className="text-sm text-slate-600">We ship devices, you install in minutes, monitoring starts same day.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#2A6363] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <div>
                        <span className="font-medium text-[#2D2D2D]">Review results</span>
                        <p className="text-sm text-slate-600">After 30-60 days, we evaluate together. No obligation to continue.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link
                  to="/pilot"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A6363] text-white text-sm font-semibold rounded-lg hover:bg-[#1D4E4E] transition-colors"
                >
                  Request a Pilot
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Timeline */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F0EFEB] to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-[#2D2D2D]">Deployment Timeline</h2>
            <p className="text-lg text-slate-600">
              From request to live monitoring—faster than you'd expect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((step) => (
              <div key={step.title} className="bg-white rounded-2xl p-6 border border-[#2A6363]/10 shadow-sm text-center">
                <div className="w-14 h-14 bg-[#2A6363]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-[#2A6363]" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-[#2D2D2D]">{step.title}</h3>
                <p className="text-2xl font-bold text-[#2A6363] mb-2">{step.description}</p>
                <p className="text-sm text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Custom */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#2D2D2D]">Need a custom quote?</h2>
          <p className="text-lg text-slate-600 mb-6">
            For larger deployments or enterprise requirements, contact our sales team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#2A6363]/30 text-[#2A6363] text-sm font-semibold rounded-lg hover:border-[#2A6363] transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#FAF8F5] border-t border-[#2A6363]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2A6363] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-sm font-medium text-[#2D2D2D]">Livesitter Mini</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <Link to="/privacy" className="hover:text-[#2A6363]">Privacy</Link>
            <Link to="/terms" className="hover:text-[#2A6363]">Terms</Link>
            <Link to="/contact" className="hover:text-[#2A6363]">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
