import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Wrench, FileText, ArrowRight } from 'lucide-react';

const pilotIncludes = [
  '30-60 day pilot period',
  'Devices for up to 4 classrooms',
  'Full dashboard access',
  'Weekly compliance reports',
  'Success criteria defined upfront',
  'Dedicated onboarding support',
];

const timeline = [
  { icon: Wrench, title: 'Install', description: 'Minutes per device' },
  { icon: Clock, title: 'Go-live', description: 'Same day as install' },
  { icon: FileText, title: 'First report', description: 'Immediate' },
];

interface FormData {
  name: string;
  role: string;
  organization: string;
  classrooms: string;
  sites: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  problem: string;
}

export default function Pilot() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    role: '',
    organization: '',
    classrooms: '',
    sites: '',
    city: '',
    state: '',
    email: '',
    phone: '',
    problem: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

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
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-[#2A6363] text-white text-xs font-medium mb-6 rounded-full">
            Pilot Program
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Try LiveSitter in your center
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Start with a focused pilot to see real results before scaling. No long-term commitment required.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* What's Included */}
              <div className="bg-white rounded-2xl p-6 border border-[#2A6363]/10 shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#2D2D2D]">What's Included</h2>
                <ul className="space-y-3">
                  {pilotIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-2xl p-6 border border-[#2A6363]/10 shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#2D2D2D]">Deployment Timeline</h2>
                <div className="space-y-4">
                  {timeline.map((step) => (
                    <div key={step.title} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#2A6363]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-[#2A6363]" />
                      </div>
                      <div>
                        <span className="font-medium text-[#2D2D2D]">{step.title}</span>
                        <p className="text-sm text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#2A6363]/10 shadow-sm">
                <h2 className="text-xl font-semibold mb-6 text-[#2D2D2D]">Request a Pilot</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-[#2D2D2D]">Request Received!</h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                      Thank you for your interest. Our team will reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#2A6363] focus:ring-1 focus:ring-[#2A6363] outline-none transition-colors"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Role *</label>
                        <select
                          name="role"
                          required
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#2A6363] focus:ring-1 focus:ring-[#2A6363] outline-none transition-colors"
                        >
                          <option value="">Select your role</option>
                          <option value="owner">Owner</option>
                          <option value="director">Director</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Organization Name *</label>
                      <input
                        type="text"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#2A6363] focus:ring-1 focus:ring-[#2A6363] outline-none transition-colors"
                        placeholder="Sunshine Childcare Centers"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Number of Classrooms *</label>
                        <input
                          type="number"
                          name="classrooms"
                          required
                          min="1"
                          value={formData.classrooms}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#2A6363] focus:ring-1 focus:ring-[#2A6363] outline-none transition-colors"
                          placeholder="10"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Number of Sites *</label>
                        <input
                          type="number"
                          name="sites"
                          required
                          min="1"
                          value={formData.sites}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#2A6363] focus:ring-1 focus:ring-[#2A6363] outline-none transition-colors"
                          placeholder="3"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">City *</label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#2A6363] focus:ring-1 focus:ring-[#2A6363] outline-none transition-colors"
                          placeholder="Austin"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">State *</label>
                        <input
                          type="text"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#2A6363] focus:ring-1 focus:ring-[#2A6363] outline-none transition-colors"
                          placeholder="TX"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#2A6363] focus:ring-1 focus:ring-[#2A6363] outline-none transition-colors"
                          placeholder="jane@sunshinechildcare.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#2A6363] focus:ring-1 focus:ring-[#2A6363] outline-none transition-colors"
                          placeholder="(512) 555-0123"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">What problem are you trying to solve? *</label>
                      <textarea
                        name="problem"
                        required
                        rows={3}
                        value={formData.problem}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#2A6363] focus:ring-1 focus:ring-[#2A6363] outline-none transition-colors resize-none"
                        placeholder="Describe your current compliance challenges..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-[#2A6363] text-white text-sm font-semibold rounded-lg hover:bg-[#1D4E4E] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : (
                        <>
                          Request a Pilot
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
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
