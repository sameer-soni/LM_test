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
        image: '/cam3.jpg',
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
    <div className="bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Livesitter Mini</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#product" className="hover:text-slate-900 transition-colors">Product</a>
            <a href="#solutions" className="hover:text-slate-900 transition-colors">Solutions</a>
            <a href="#technology" className="hover:text-slate-900 transition-colors">Technology</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors rounded">
              Book Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Dashboard Preview */}
      <section className="relative pt-32 pb-20 pl-6 pr-6 lg:pr-0 bg-gradient-to-b from-white to-slate-50">
        {/* Ambient background motion (decorative) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-ambient hero-ambient-1" />
          <div className="hero-ambient hero-ambient-2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs font-medium mb-6 rounded-full anim-fade-up delay-1">
                Privacy-First Compliance Monitoring
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight leading-[1.05] anim-fade-up delay-2">
                Continuous classroom visibility.
                <br />
                Clear safety & compliance.
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 anim-fade-up delay-3">
                Wall-mounted sensor that continuously tracks adult and child counts and turns them into compliance dashboards and audit-ready reports.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 anim-fade-up delay-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all rounded flex items-center justify-center gap-2">
                  Request a Pilot
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-6 py-3 border-2 border-slate-200 text-slate-900 text-sm font-semibold hover:border-slate-900 transition-all rounded">
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Dashboard Preview - Like Ahrefs/Mixpanel */}
            <div className="lg:justify-self-end lg:mr-0 lg:pr-0">
              <div className="relative lg:-mr-6 anim-fade-up-float delay-3">
                <div className="absolute -inset-6 bg-gradient-to-r from-slate-200/40 via-slate-300/40 to-slate-200/40 blur-2xl opacity-70" />

                <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                  {/* Top bar */}
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      </div>
                      <div className="hidden sm:block text-sm font-semibold text-slate-900">Compliance Overview</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" />
                        Live
                      </div>
                      <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        Updated 3s ago
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    {/* KPI row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                        <div className="text-xs font-medium text-slate-500 mb-2">Spaces Monitored</div>
                        <div className="text-3xl font-bold text-slate-900">8</div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                        <div className="text-xs font-medium text-slate-500 mb-2">Checks Today</div>
                        <div className="text-3xl font-bold text-slate-900">10,080</div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 sm:col-span-1 col-span-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-medium text-slate-500 mb-2">Compliance</div>
                            <div className="text-3xl font-bold text-slate-900">100%</div>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                            <TrendingUp className="w-4 h-4" />
                            Stable
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rooms list */}
                    <div className="mt-5 bg-slate-50 rounded-lg border border-slate-100 overflow-hidden">
                      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <div className="text-xs font-semibold text-slate-600">LIVE SPACES</div>
                        <div className="text-xs text-slate-500">Required ratio vs current</div>
                      </div>
                      <div className="divide-y divide-slate-100">
                        {[
                          { name: 'Classroom A', required: '4:1', current: '4:1' },
                          { name: 'Playground', required: '5:1', current: '5:1' },
                          { name: 'Cafeteria', required: '8:1', current: '7.5:1' },
                        ].map((room) => (
                          <div key={room.name} className="px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                                <Check className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-900">{room.name}</div>
                                <div className="text-xs text-slate-500">Compliant</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-slate-500">Req: {room.required}</div>
                              <div className="text-sm font-semibold text-slate-900">Now: {room.current}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-slate-500">Sample Dashboard • Real-time data from your facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-12 px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-slate-900 rounded-xl">
            <p className="text-lg md:text-xl font-bold text-white">
              Trusted by 400+ safety and compliance focused facilities nationwide
            </p>
          </div>
        </div>
      </section>

      {/* Product Models - Two Column */}
      <section id="product" className="py-24 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Choose <span className="text-slate-400">wired or wireless.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Wired Model */}
          <div className="flex flex-col">
            <div className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl h-[300px] md:h-[340px]">
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src="/rgbSensor.jpeg" 
                  alt="Wired Installation" 
                  className="w-full h-full object-cover -translate-y-5 opacity-70 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 inline-flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold text-white">
                WIRED
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Model S</h3>

                <button className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors">
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
              <div className="absolute inset-0 bg-slate-800">
                <img 
                  src="/cam3.jpg" 
                  alt="Wireless Installation" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 inline-flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold text-white">
                WIRELESS
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Model A</h3>

                <button className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors">
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
      <section id="solutions" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
              One device. <span className="text-slate-400">Every space.</span>
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
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src="/solutions-childcare.png" 
                  alt="Center-Based Childcare" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
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
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src="/solutions-school.png" 
                  alt="K-5 Elementary Schools" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
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
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src="/solutions-pool.png" 
                  alt="Swimming Facilities" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
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
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src="/solutions-school.png" 
                  alt="Government Facilities" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
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
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors">
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Audit Reports Section */}
      <section className="py-24 px-6 bg-slate-50">
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

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="text-sm font-semibold">Compliance Report</div>
                <button className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  Export PDF
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-xs text-slate-500 mb-2">January 20-26, 2026</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold text-slate-900">100%</div>
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

                <div className="pt-4 border-t border-slate-100">
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
      <section id="technology" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium mb-4 rounded">
              Privacy-First Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Why edge sensors matter</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              All processing happens on-device. No video ever leaves your facility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <Lock className="w-6 h-6 text-slate-700" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Zero video streaming</h3>
              <p className="text-slate-600 leading-relaxed">
                Processing runs locally on the device. Only anonymized count data is sent to the cloud.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <Shield className="w-6 h-6 text-slate-700" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold mb-3">FERPA & COPPA compliant</h3>
              <p className="text-slate-600 leading-relaxed">
                No facial recognition, no identity tracking, no stored footage.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <Zap className="w-6 h-6 text-slate-700" strokeWidth={2} />
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
      <section className="bg-slate-900 text-white">
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
      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-slate-900 rounded flex items-center justify-center">
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
                <li><a href="#" className="hover:text-slate-900 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Schools</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Pools</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Childcare</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-sm text-slate-500 text-center">
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
          background: radial-gradient(circle at 30% 30%, rgba(148, 163, 184, 0.65), rgba(248, 250, 252, 0));
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
          background: radial-gradient(circle at 60% 40%, rgba(100, 116, 139, 0.35), rgba(248, 250, 252, 0));
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
          background: radial-gradient(circle, rgba(100, 116, 139, 0.15) 0%, transparent 70%);
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