import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Cpu, Radio, BarChart3, DollarSign, Building2, Shield, Zap, ArrowRight, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Capture',
    description: 'Camera captures image at set interval (1-60 seconds)',
    icon: Camera,
  },
  {
    number: 2,
    title: 'Infer',
    description: 'On-device AI counts adults and children. Image is immediately discarded.',
    icon: Cpu,
  },
  {
    number: 3,
    title: 'Transmit',
    description: 'Small payload (just counts) sent via LoRaWAN—no images transmitted.',
    icon: Radio,
  },
  {
    number: 4,
    title: 'Analyze',
    description: 'Dashboard displays real-time counts, alerts, and audit-ready reports.',
    icon: BarChart3,
  },
];

const loraWanBenefits = [
  {
    icon: DollarSign,
    title: 'Low Cost',
    description: 'Minimal infrastructure. No complex networking.',
  },
  {
    icon: Building2,
    title: 'Reliable Indoors',
    description: 'Sub-GHz frequencies penetrate walls better than WiFi.',
  },
  {
    icon: Shield,
    title: 'Privacy Preserved',
    description: 'Payload is counts only—no images ever leave the device.',
  },
];

export default function HowItWorks() {
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
            <Link to="/how-it-works" className="text-[#2A6363]">How It Works</Link>
            <Link to="/pricing" className="hover:text-[#2A6363] transition-colors">Pricing</Link>
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
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-[#2A6363] text-white text-xs font-medium mb-6 rounded-full">
            How It Works
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
            Simple. Private.<br />Continuous.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From image capture to compliance dashboard in four simple steps.
            All processing happens on-device—your images never leave the classroom.
          </p>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 z-10">
                    <ChevronRight className="w-6 h-6 text-[#2A6363]/40" />
                  </div>
                )}
                <div className="bg-white rounded-2xl p-6 border border-[#2A6363]/10 shadow-sm h-full">
                  <div className="w-12 h-12 bg-[#2A6363]/10 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-[#2A6363]" />
                  </div>
                  <div className="text-xs font-bold text-[#2A6363] mb-2">STEP {step.number}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2D2D2D]">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LoRaWAN */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F0EFEB] to-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-[#2D2D2D]">
              Why <span className="text-[#2A6363]">LoRaWAN?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Low-power, long-range wireless designed for IoT applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {loraWanBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-6 border border-[#2A6363]/10 shadow-sm text-center">
                <div className="w-12 h-12 bg-[#2A6363]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-[#2A6363]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#2D2D2D]">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#2A6363] rounded-2xl p-8 text-center text-white">
            {/* <Zap className="w-10 h-10 mx-auto mb-4 opacity-80" /> */}
            <h3 className="text-2xl font-semibold mb-3 text-white">Key Insight</h3>
            <p className="text-lg opacity-90 max-w-xl mx-auto">
              Images are processed and discarded on-device. Only numerical counts are transmitted—never images.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white tracking-tight">
            See it work in your center
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Request a pilot and experience the simplicity of automated compliance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/pilot"
              className="px-6 py-3 bg-white text-[#2D2D2D] text-sm font-semibold rounded hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              Request a Pilot
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/faq"
              className="px-6 py-3 border-2 border-white/30 text-white text-sm font-semibold rounded hover:border-white/60 transition-colors"
            >
              View FAQ
            </Link>
          </div>
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
