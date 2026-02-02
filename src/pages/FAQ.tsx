import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'Does LiveSitter store or transmit images?',
    answer: 'No. Images are captured and processed entirely on the device. Only numerical counts are transmitted. Images are immediately discarded after processing and never leave the classroom.',
  },
  {
    question: 'How accurate are the counts?',
    answer: 'LiveSitter achieves high accuracy in typical classroom environments. During your pilot, we calibrate for your specific room layouts. Most customers see 95%+ accuracy after initial calibration.',
  },
  {
    question: 'How is location handled without GPS?',
    answer: 'Each device is assigned to a specific room during installation. Location is determined by device ID, not GPS. This approach is simpler, more reliable indoors, and more privacy-friendly.',
  },
  {
    question: 'What happens if LoRaWAN coverage is weak?',
    answer: 'LoRaWAN is designed for excellent indoor penetration. In rare cases where coverage is insufficient, we can add a small, inexpensive gateway. We assess coverage during the pilot.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Each device takes just a few minutes to mount and configure. A typical classroom installation is under 10 minutes. Full site deployment for 4-6 rooms can be done in a single morning.',
  },
  {
    question: 'Is this FERPA / privacy friendly?',
    answer: 'Yes. No images are stored or transmitted, no facial recognition is used, and no video is recorded. Only aggregate counts leave the device, which do not contain personally identifiable information.',
  },
  {
    question: 'Can capture rate be adjusted?',
    answer: 'Yes. Capture rate is configurable from 1 second to 60 seconds. Most customers use 5-15 second intervals for good visibility while minimizing power use.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#2A6363]/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-base font-semibold text-[#2D2D2D] pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#2A6363] flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
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
            <Link to="/faq" className="text-[#2A6363]">FAQ</Link>
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
            FAQ
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Clear answers to common questions about LiveSitter, privacy, and deployment.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#2A6363]/10 shadow-sm px-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F0EFEB] to-[#FAF8F5]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#2D2D2D]">
            Still have questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We're happy to help. Request a pilot and we'll walk you through everything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/pilot"
              className="px-6 py-3 bg-[#2A6363] text-white text-sm font-semibold rounded hover:bg-[#1D4E4E] transition-colors flex items-center gap-2"
            >
              Request a Pilot
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-[#2A6363]/30 text-[#2A6363] text-sm font-semibold rounded hover:border-[#2A6363] transition-colors"
            >
              Contact Us
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
