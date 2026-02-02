// import { Layout } from "@/components/layout/Layout";
// import { Hero } from "@/components/home/Hero";
// import { ProblemSection } from "@/components/home/ProblemSection";
// import { WhyEdgeAI } from "@/components/home/WhyEdgeAI";
// import { WhoItsFor } from "@/components/home/WhoItsFor";
// import { CTASection } from "@/components/home/CTASection";

// const Index = () => {
//   return (
//     <Layout>
//       <Hero />
//       <ProblemSection />
//       <WhyEdgeAI />
//       <WhoItsFor />
//       <CTASection />
//     </Layout>
//   );
// };

// export default Index;


import React from 'react';
import { Shield, Users, FileCheck, Lock, Zap, Building2, Waves, GraduationCap, Check, ArrowRight, TrendingUp, AlertCircle, Clock, Download, Landmark } from 'lucide-react';

export default function Index() {
  const [selectedModel, setSelectedModel] = React.useState<'wired' | 'wireless'>('wired');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const selectedProduct = React.useMemo(() => {
    const products = {
      wired: {
        label: 'Wired',
        name: 'Livesitter Mini (Wired)',
        image: '/rgbSensor.jpeg',
        description:
          'Permanent installs for classrooms and fixed rooms. Reliable power and set-and-forget deployment.',
        bullets: ['Wall-mounted in minutes', 'Wired power (PoE or USB‑C)', 'Best for always-on spaces'],
        primaryCta: { label: 'Request a Pilot', href: '/pilot' },
        secondaryCta: { label: 'View Product', href: '/product' },
      },
      wireless: {
        label: 'Wireless',
        name: 'Livesitter Mini (Wireless)',
        image: '/lorawan.png',
        description:
          'Flexible placement for temporary setups and evolving layouts. Move it as your spaces change.',
        bullets: ['Fast placement (no cabling)', 'Easy to reposition', 'Great for multi-use areas'],
        primaryCta: { label: 'Request a Pilot', href: '/pilot' },
        secondaryCta: { label: 'Talk to Sales', href: '/contact' },
      },
    };

    return products[selectedModel];
  }, [selectedModel]);

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#2A6363]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2A6363] rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Livesitter Mini</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2D2D2D]/70">
            <a href="/how-it-works" className="hover:text-[#2A6363] transition-colors">How It Works</a>
            <a href="/pricing" className="hover:text-[#2A6363] transition-colors">Pricing</a>
            <a href="/faq" className="hover:text-[#2A6363] transition-colors">FAQ</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="/contact" className="px-5 py-2.5 bg-[#2A6363] text-white text-sm font-medium hover:bg-[#1D4E4E] transition-colors rounded">
              Book Demo
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-[#2D2D2D]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-t border-[#2A6363]/10 px-6 py-4">
            <div className="flex flex-col gap-4">
              <a href="/how-it-works" className="text-sm font-medium text-[#2D2D2D] hover:text-[#2A6363]">How It Works</a>
              <a href="/pricing" className="text-sm font-medium text-[#2D2D2D] hover:text-[#2A6363]">Pricing</a>
              <a href="/faq" className="text-sm font-medium text-[#2D2D2D] hover:text-[#2A6363]">FAQ</a>
              <a href="/contact" className="px-4 py-2.5 bg-[#2A6363] text-white text-sm font-medium rounded text-center">
                Book Demo
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Dashboard Preview */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-[#FAF8F5] to-[#F0EFEB] overflow-hidden">
        {/* Ambient background motion (decorative) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-ambient hero-ambient-1" />
          <div className="hero-ambient hero-ambient-2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-3 py-1 bg-[#2A6363] text-white text-xs font-medium mb-6 rounded-full anim-fade-up delay-1">
                Privacy-First Compliance Monitoring
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight leading-[1.05] anim-fade-up delay-2">
                Continuous classroom visibility.
                <br />
                Clear safety & compliance.
              </h1>

              <p className="text-xl text-slate-600/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 anim-fade-up delay-3">
                Wall-mounted sensor that continuously tracks adult and child counts and turns them into compliance dashboards and audit-ready reports.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 anim-fade-up delay-4">
                <a href="/pilot" className="w-full sm:w-auto px-6 py-3 bg-[#2A6363] text-white text-sm font-semibold hover:bg-[#1D4E4E] transition-all rounded flex items-center justify-center gap-2">
                  Request a Pilot
                  <ArrowRight className="w-4 h-4" />
                </a>
                {/* <button className="w-full sm:w-auto px-6 py-3 border-2 border-[#2A6363]/30 text-[#2A6363] text-sm font-semibold hover:border-[#2A6363] hover:bg-[#2A6363]/5 transition-all rounded">
                  Book a Demo
                </button> */}
              </div>
            </div>

            {/* Dashboard Preview - Large Format */}
            <div className="lg:col-span-1 lg:justify-self-end w-full max-w-xl lg:max-w-none">
              <div className="relative anim-fade-up-float delay-3">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#2A6363]/20 via-[#3D7A7A]/20 to-[#2A6363]/20 blur-3xl opacity-70" />

                <div className="relative bg-white rounded-2xl shadow-2xl border border-[#2A6363]/10 overflow-hidden w-full">
                  {/* Top bar */}
                  <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      </div>
                      <div className="text-sm font-semibold text-[#2D2D2D]">Live Dashboard</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        Live
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        3s ago
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    {/* KPI Cards Row */}
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wide">
                          <Users className="w-3 h-3" />
                          Adults
                        </div>
                        <div className="text-xl font-bold text-[#2D2D2D]">11</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wide">
                          <Users className="w-3 h-3" />
                          Children
                        </div>
                        <div className="text-xl font-bold text-[#2D2D2D]">61</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wide">
                          <Check className="w-3 h-3" />
                          Compliant
                        </div>
                        <div className="text-xl font-bold text-[#2D2D2D]">4/4</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wide">
                          <TrendingUp className="w-3 h-3" />
                          Weekly
                        </div>
                        <div className="text-xl font-bold text-emerald-600">98.5%</div>
                      </div>
                    </div>

                    {/* Live Occupancy Table */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-4">
                      <div className="px-4 py-2 border-b border-slate-100 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs font-semibold text-[#2D2D2D]">Live Occupancy</span>
                      </div>
                      
                      {/* Table Header */}
                      <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-slate-50/80 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                        <div className="col-span-3">Room</div>
                        <div className="col-span-3 text-center">Ratio (Req / Now)</div>
                        <div className="col-span-3 text-center">Unattended</div>
                        <div className="col-span-3 text-right">Status</div>
                      </div>
                      
                      {/* Table Rows */}
                      <div className="divide-y divide-slate-100">
                        {[
                          { name: 'Infant Room A', required: '1:4', current: '1:3', unattended: '–', status: 'Compliant' },
                          { name: 'Toddler Room B', required: '1:5', current: '1:5', unattended: '–', status: 'Compliant' },
                          { name: 'Pre-K Room C', required: '1:10', current: '1:9', unattended: '–', status: 'Watch' },
                        ].map((room) => (
                          <div key={room.name} className="grid grid-cols-12 gap-2 px-4 py-2 items-center hover:bg-slate-50/50 transition-colors">
                            <div className="col-span-3 text-xs font-medium text-[#2D2D2D]">{room.name}</div>
                            <div className="col-span-3 text-center">
                              <span className="text-[10px] text-slate-500">Req: {room.required}</span>
                              <span className="text-[10px] text-slate-400 mx-1">/</span>
                              <span className="text-xs font-semibold text-[#2D2D2D]">{room.current}</span>
                            </div>
                            <div className="col-span-3 text-center">
                              <span className="inline-flex items-center px-2 py-0.5 bg-emerald-50 rounded text-xs text-slate-500 font-medium">{room.unattended}</span>
                            </div>
                            <div className="col-span-3 text-right">
                              <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                                room.status === 'Compliant' 
                                  ? 'bg-emerald-50 text-emerald-700' 
                                  : 'bg-amber-50 text-amber-700'
                              }`}>
                                {room.status === 'Compliant' && <Check className="w-2.5 h-2.5" />}
                                {room.status === 'Watch' && <AlertCircle className="w-2.5 h-2.5" />}
                                {room.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      <div className="px-4 py-2 border-b border-slate-100">
                        <span className="text-xs font-semibold text-[#2D2D2D]">Recent Activity</span>
                      </div>
                      <div className="divide-y divide-slate-100">
                        {[
                          { time: '2:45 PM', event: 'Adult entered Infant Room A', change: '+1 adult' },
                          { time: '2:38 PM', event: 'Child pickup from Toddler Room B', change: '-1 child' },
                        ].map((activity, i) => (
                          <div key={i} className="px-4 py-2 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] text-slate-400 w-12">{activity.time}</span>
                              <span className="text-xs text-slate-600 truncate max-w-[180px]">{activity.event}</span>
                            </div>
                            <span className={`text-[10px] font-medium ${
                              activity.change.includes('+') ? 'text-emerald-600' :
                              activity.change.includes('-') ? 'text-slate-500' :
                              'text-emerald-600'
                            }`}>{activity.change}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-12 px-6 bg-[#FAF8F5] border-y border-[#2A6363]/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-[#2D2D2D] rounded-xl">
            <p className="text-lg md:text-xl font-bold text-white">
              Trusted by 400+ safety and compliance focused facilities nationwide
            </p>
          </div>
        </div>
      </section>

      {/* Product Models - Two Column */}
      <section id="product" className="py-24 px-6 bg-[#FAF8F5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2D2D2D]">
            Choose <span className="text-[#2A6363]">wired or wireless.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Wired Model */}
          <div className="flex flex-col">
            <div className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl h-[300px] md:h-[340px]">
              <div className="absolute inset-0 bg-[#2D2D2D]">
                <img 
                  src="/rgbSensor.jpeg" 
                  alt="Wired Installation" 
                  className="w-full h-full object-cover -translate-y-5 opacity-70 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 inline-flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold text-white">
                WIRED
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/10 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Model S</h3>

                <button className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-white text-[#2D2D2D] text-sm font-semibold rounded-lg hover:bg-[#2A6363] hover:text-white transition-colors">
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Wired Pros & Cons */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-3">Pros</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Always-on power</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Zero battery maintenance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-3">Cons</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Higher install effort - Requires cabling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Less flexible repositioning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wireless Model */}
          <div className="flex flex-col">
            <div className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl h-[300px] md:h-[340px]">
              <div className="absolute inset-0 bg-[#3A3A3A]">
                <img 
                  src="/lorawan.png" 
                  alt="Wireless Installation" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 inline-flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold text-white">
                WIRELESS
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/10 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Model A</h3>

                <button className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-white text-[#2D2D2D] text-sm font-semibold rounded-lg hover:bg-[#2A6363] hover:text-white transition-colors">
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Wireless Pros & Cons */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-3">Pros</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Faster installation - No cabling required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Flexible placement across rooms</span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-3">Cons</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Battery management required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Requires periodic maintenance checks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6 bg-gradient-to-b from-[#F0EFEB] to-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-[#2D2D2D]">
              One device. <span className="text-[#2A6363]">Every space.</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              LiveSitter Mini deploys across classrooms and activity areas to detect unattended children, monitor adult-child ratios, and flag safety risks in real time.
            </p>
          </div>

          {/* Solutions Cards */}
          <div className="relative">
            {/* Ambient glow behind cards - suggests "always monitoring" */}
            <div className="absolute inset-0 -inset-x-8 -inset-y-8 pointer-events-none">
              <div className="ambient-glow absolute top-1/2 left-1/4 w-64 h-64 rounded-full" style={{ animationDelay: '0s' }} />
              <div className="ambient-glow absolute top-1/3 right-1/4 w-48 h-48 rounded-full" style={{ animationDelay: '2s' }} />
              <div className="ambient-glow absolute bottom-1/4 left-1/2 w-56 h-56 rounded-full" style={{ animationDelay: '4s' }} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Center-Based Childcare Card */}
            <div className="solution-card group relative rounded-2xl overflow-hidden h-[320px] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: '0ms' }}>
              <div className="absolute inset-0 bg-[#2D2D2D]">
                <img 
                  src="/solutions-childcare.png" 
                  alt="Center-Based Childcare" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/50 to-transparent" />
              
              {/* Shimmer effect - auto loops */}
              <div className="absolute inset-0 shimmer-auto" style={{ animationDelay: '0s' }} />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Center-Based Childcare</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Monitor unattended children, child-to-caregiver ratios across classrooms.
                </p>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* K-5 Elementary Schools Card */}
            <div className="solution-card group relative rounded-2xl overflow-hidden h-[320px] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: '100ms' }}>
              <div className="absolute inset-0 bg-[#2D2D2D]">
                <img 
                  src="/solutions-school.png" 
                  alt="K-5 Elementary Schools" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/50 to-transparent" />
              
              {/* Shimmer effect - auto loops */}
              <div className="absolute inset-0 shimmer-auto" style={{ animationDelay: '1.5s' }} />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">K-5 Elementary</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Monitor occupancy and adult-to-student ratios across classrooms and shared spaces.
                </p>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Swimming Facilities Card */}
            <div className="solution-card group relative rounded-2xl overflow-hidden h-[320px] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-[#2D2D2D]">
                <img 
                  src="/solutions-pool.png" 
                  alt="Swimming Facilities" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/50 to-transparent" />
              
              {/* Shimmer effect - auto loops */}
              <div className="absolute inset-0 shimmer-auto" style={{ animationDelay: '3s' }} />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <Waves className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Swimming Facilities</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Monitor occupancy and safety ratios across aquatic facilities.
                </p>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Government Card */}
            <div className="solution-card group relative rounded-2xl overflow-hidden h-[320px] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-0 bg-[#2D2D2D]">
                <img 
                  src="/solutions-school.png" 
                  alt="Government Facilities" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/50 to-transparent" />
              
              {/* Shimmer effect - auto loops */}
              <div className="absolute inset-0 shimmer-auto" style={{ animationDelay: '4.5s' }} />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Government</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Occupancy monitoring for public buildings, courthouses, and municipal facilities.
                </p>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6">
              Don't see your industry? Our sensors work in any environment that requires people counting.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A6363] text-white text-sm font-semibold rounded-lg hover:bg-[#1D4E4E] transition-colors">
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Audit Reports Section */}
      <section className="py-24 px-6 bg-[#F0EFEB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold mb-6 tracking-tight">Audit-ready reports in one click</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Generate comprehensive compliance reports with complete timestamps, ratio history, and violation logs for regulatory audits.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <FileCheck className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Complete audit trail</div>
                    <div className="text-sm text-slate-600">Every count, every minute, timestamped and exportable</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Download className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Multiple export formats</div>
                    <div className="text-sm text-slate-600">PDF, CSV, Excel - whatever auditors need</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <TrendingUp className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Compliance trends</div>
                    <div className="text-sm text-slate-600">Weekly and monthly analytics to spot patterns</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#2A6363]/10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2A6363]/10">
                <div className="text-sm font-semibold">Compliance Report</div>
                <button className="text-xs font-medium text-[#2A6363] hover:text-[#1D4E4E] flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  Export PDF
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-[#2A6363]/5 rounded-lg p-4">
                  <div className="text-xs text-[#2A6363] mb-2">January 20-26, 2026</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold text-[#2D2D2D]">100%</div>
                    <div className="text-sm text-emerald-600 font-medium">Compliant</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Total monitoring hours</span>
                    <span className="font-semibold">168</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Spaces monitored</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Compliance checks</span>
                    <span className="font-semibold">10,080</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Violations</span>
                    <span className="font-semibold text-emerald-600">0</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A6363]/10">
                  <div className="text-xs font-medium text-slate-500 mb-2">RECENT ACTIVITY</div>
                  <div className="space-y-2">
                    <div className="text-xs text-slate-600 flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>Jan 26, 2:45 PM - Classroom A: 12 children, 3 adults</span>
                    </div>
                    <div className="text-xs text-slate-600 flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>Jan 26, 2:30 PM - Playground: 20 children, 4 adults</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Privacy-First by Design</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              All processing happens on-device. No video is stored or transmitted outside your facility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-[#2A6363]/10 shadow-sm">
              <div className="w-12 h-12 bg-[#2A6363]/10 rounded-lg flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-[#2A6363]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Zero video streaming</h3>
              <p className="text-slate-600 leading-relaxed">
                Processing runs locally on the device. Only anonymized count data is sent to the cloud.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#2A6363]/10 shadow-sm">
              <div className="w-12 h-12 bg-[#2A6363]/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#2A6363]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold mb-3">FERPA & COPPA compliant</h3>
              <p className="text-slate-600 leading-relaxed">
                No facial recognition, no identity tracking, no stored footage.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-[#2A6363]/10 shadow-sm">
              <div className="w-12 h-12 bg-[#2A6363]/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#2A6363]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Works offline</h3>
              <p className="text-slate-600 leading-relaxed">
                Continues counting even if your internet goes down.
              </p>
            </div>
          </div>
        </div>
      </section>







      {/* ----------------EXTRA---------------- */}
      {/* Quick Setup Highlights */}
      <section className="bg-[#2D2D2D] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Zap className="h-6 w-6" />
              </div>
              <div className="text-lg font-semibold">Instant Set‑Up</div>
              <div className="mt-2 text-sm text-slate-300">Mount, power on, and start counting in minutes.</div>
            </div>
            <div>
              <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <div className="text-lg font-semibold">Privacy‑First By Design</div>
              <div className="mt-2 text-sm text-slate-300">On-device processing with counts only — no video streaming.</div>
            </div>
            <div>
              <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Lock className="h-6 w-6" />
              </div>
              <div className="text-lg font-semibold">Reliable & Low Touch</div>
              <div className="mt-2 text-sm text-slate-300">Runs continuously with minimal maintenance.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Toggle + “Buy Page” Style Card */}
      <section className="py-24 px-6 bg-white hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Pick a model. Deploy fast.</h2>
              <p className="mt-3 text-lg text-slate-600 max-w-2xl">
                Toggle between wired and wireless to match your install.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="inline-flex w-full md:w-auto rounded-lg border border-slate-200 bg-slate-50 p-1">
                <button
                  type="button"
                  onClick={() => setSelectedModel('wired')}
                  className={
                    selectedModel === 'wired'
                      ? 'flex-1 md:flex-none px-4 py-2 rounded-md bg-white shadow-sm text-sm font-semibold text-slate-900'
                      : 'flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-semibold text-slate-600 hover:text-slate-900'
                  }
                  aria-pressed={selectedModel === 'wired'}
                >
                  Wired
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedModel('wireless')}
                  className={
                    selectedModel === 'wireless'
                      ? 'flex-1 md:flex-none px-4 py-2 rounded-md bg-white shadow-sm text-sm font-semibold text-slate-900'
                      : 'flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-semibold text-slate-600 hover:text-slate-900'
                  }
                  aria-pressed={selectedModel === 'wireless'}
                >
                  Wireless
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Image */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>

            {/* Right: Purchase-style card */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-8">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {selectedProduct.label}
              </div>

              <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">{selectedProduct.name}</h3>

              <p className="mt-3 text-slate-600 leading-relaxed">{selectedProduct.description}</p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-600 tracking-wide">INCLUDED</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {selectedProduct.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-emerald-600" strokeWidth={2.5} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={selectedProduct.primaryCta.href}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors rounded"
                >
                  {selectedProduct.primaryCta.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={selectedProduct.secondaryCta.href}
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 border-2 border-slate-200 text-slate-900 text-sm font-semibold hover:border-slate-900 transition-colors rounded"
                >
                  {selectedProduct.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-white">
            Ready to modernize compliance?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join facilities already using Livesitter Mini to automate ratio tracking and ace every audit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-6 py-3.5 bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-all rounded flex items-center gap-2">
              Request a Pilot
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3.5 border-2 border-slate-600 text-white text-sm font-semibold hover:border-slate-400 transition-all rounded">
              Book a Demo
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-[#FAF8F5] border-t border-[#2A6363]/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-[#2A6363] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="font-semibold">Livesitter Mini</span>
              </div>
              <p className="text-sm text-slate-600">
                Privacy-first safety & compliance monitoring for educational and recreational facilities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-[#2A6363] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#2A6363] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#2A6363] transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-[#2A6363] transition-colors">Schools</a></li>
                <li><a href="#" className="hover:text-[#2A6363] transition-colors">Pools</a></li>
                <li><a href="#" className="hover:text-[#2A6363] transition-colors">Childcare</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-[#2A6363] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#2A6363] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#2A6363] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2A6363]/10 pt-8 text-sm text-slate-500 text-center">
            © 2026 Livesitter Mini. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          scroll-behavior: smooth;
        }

        .marquee {
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: marquee 22s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }

        .hero-ambient {
          position: absolute;
          border-radius: 9999px;
          filter: blur(36px);
          opacity: 0.75;
          will-change: transform;
          mix-blend-mode: multiply;
          background: radial-gradient(circle at 30% 30%, rgba(42, 99, 99, 0.35), rgba(248, 250, 252, 0));
        }

        .hero-ambient-1 {
          width: 520px;
          height: 520px;
          left: -120px;
          top: 10px;
          animation: ambientDrift1 18s ease-in-out infinite;
        }

        .hero-ambient-2 {
          width: 620px;
          height: 620px;
          right: -160px;
          top: 90px;
          opacity: 0.6;
          filter: blur(44px);
          background: radial-gradient(circle at 60% 40%, rgba(42, 99, 99, 0.20), rgba(248, 250, 252, 0));
          animation: ambientDrift2 22s ease-in-out infinite;
        }

        @keyframes ambientDrift1 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(70px, -25px, 0);
          }
        }

        @keyframes ambientDrift2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-90px, 30px, 0);
          }
        }

        .anim-fade-up {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 700ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          will-change: transform, opacity;
        }

        .anim-fade-up-float {
          opacity: 0;
          transform: translateY(10px);
          animation:
            fadeUp 700ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards,
            floatY 6s ease-in-out 900ms infinite;
          will-change: transform, opacity;
        }

        .delay-1 { animation-delay: 80ms; }
        .delay-2 { animation-delay: 160ms; }
        .delay-3 { animation-delay: 240ms; }
        .delay-4 { animation-delay: 320ms; }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        /* Solution card animations */
        .solution-card {
          animation: cardFadeIn 0.6s ease-out both;
        }

        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .icon-float {
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .shimmer-auto {
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(255, 255, 255, 0.08) 50%,
            transparent 70%
          );
          background-size: 300% 100%;
          animation: shimmerLoop 4.5s ease-in-out infinite;
        }

        @keyframes shimmerLoop {
          0%, 20% {
            background-position: 200% 0;
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          50% {
            background-position: -200% 0;
            opacity: 1;
          }
          60%, 100% {
            background-position: -200% 0;
            opacity: 0;
          }
        }

        .ambient-glow {
          background: radial-gradient(circle, rgba(42, 99, 99, 0.10) 0%, transparent 70%);
          filter: blur(40px);
          animation: ambientPulse 6s ease-in-out infinite;
        }

        @keyframes ambientPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1) translate(0, 0);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2) translate(10px, -10px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-ambient {
            animation: none !important;
          }

          .anim-fade-up,
          .anim-fade-up-float,
          .solution-card,
          .icon-float,
          .shimmer-overlay {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}