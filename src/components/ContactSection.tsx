import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, Calendar, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/mockData';

interface ContactSectionProps {
  onOpenDemo: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDemo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Multi-Agent System Build',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = DEVELOPER_INFO.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-[100px] md:py-[160px] px-margin max-w-[1728px] mx-auto bg-[#FFFFE3] dark:bg-[#0B0F17] border-t border-[#D9D7D0]/40 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-[1340px] mx-auto">
        {/* Header Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-h2 font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-4">
            Connect with Muhammad Naveed
          </h2>

          <p className="font-body-lg text-[#8C8880] dark:text-neutral-300 max-w-2xl text-balance">
            Looking to architect production multi-agent systems, integrate Gemini Pro models, or build deterministic guardrails? Send a message directly or book a session.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Profile & Contact Info (5 cols) */}
          <div className="lg:col-span-5 bg-[#F0EFEB] dark:bg-neutral-900/90 rounded-[32px] p-8 md:p-10 border border-[#D9D7D0]/60 dark:border-neutral-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#D9D7D0] dark:border-neutral-800">
                <div className="w-16 h-16 rounded-full bg-[#181818] dark:bg-neutral-800 text-[#FAF9F5] font-bold text-xl flex items-center justify-center shrink-0 border-2 border-[#181818] dark:border-neutral-700 shadow-md">
                  MN
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5]">
                    Muhammad Naveed
                  </h3>
                  <p className="font-label text-xs text-[#8C8880] dark:text-neutral-400 uppercase tracking-wider font-bold">
                    AI Engineer • Agentic AI Specialist
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[#181818] dark:text-[#1F3B36] font-semibold mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#181818] dark:bg-[#1F3B36] animate-pulse"></span>
                    <span>Available for Projects & Advisory</span>
                  </div>
                </div>
              </div>

              {/* Direct Info Items */}
              <div className="space-y-4 mb-8">
                {/* Email Box */}
                <div className="bg-[#FAF9F5] dark:bg-neutral-800 p-4 rounded-2xl border border-[#D9D7D0] dark:border-neutral-700 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-[#181818] dark:bg-neutral-700 text-[#FAF9F5] flex items-center justify-center shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="truncate">
                      <span className="font-label text-[10px] uppercase text-[#8C8880] dark:text-neutral-400 font-bold block">Direct Email</span>
                      <span className="font-mono text-xs text-[#1B1B1B] dark:text-white font-medium truncate block">{email}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-[#F0EFEB] dark:hover:bg-neutral-700 text-[#181818] dark:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-[#181818] dark:text-[#1F3B36]" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="bg-[#FAF9F5] dark:bg-neutral-800 p-4 rounded-2xl border border-[#D9D7D0] dark:border-neutral-700 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#181818] dark:bg-neutral-700 text-[#FAF9F5] flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-label text-[10px] uppercase text-[#8C8880] dark:text-neutral-400 font-bold block">Location & Consultation</span>
                    <span className="font-body-md text-xs text-[#1B1B1B] dark:text-white font-medium block">Global Remote / On-Site AI Engineering</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <span className="font-label text-xs uppercase text-[#8C8880] dark:text-neutral-400 font-bold tracking-wider block mb-3">
                  Professional Profiles
                </span>
                <div className="flex gap-3">
                  <a
                    href={DEVELOPER_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#FAF9F5] dark:bg-neutral-800 hover:bg-[#181818] dark:hover:bg-neutral-700 hover:text-[#FAF9F5] text-[#1B1B1B] dark:text-white p-3 rounded-xl border border-[#D9D7D0] dark:border-neutral-700 flex items-center justify-center gap-2 text-xs font-label font-bold transition-all cursor-pointer group"
                  >
                    <Linkedin size={16} className="text-[#0077B5] dark:text-sky-400 group-hover:text-[#FAF9F5]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={DEVELOPER_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#FAF9F5] dark:bg-neutral-800 hover:bg-[#181818] dark:hover:bg-neutral-700 hover:text-[#FAF9F5] text-[#1B1B1B] dark:text-white p-3 rounded-xl border border-[#D9D7D0] dark:border-neutral-700 flex items-center justify-center gap-2 text-xs font-label font-bold transition-all cursor-pointer"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Book a Demo CTA Box */}
            <div className="bg-[#181818] dark:bg-neutral-800 text-[#FAF9F5] p-6 rounded-2xl border border-white/10 dark:border-neutral-700 mt-6 text-left">
              <span className="font-label text-xs uppercase tracking-wider text-white font-bold block mb-1">
                Direct Strategy Session
              </span>
              <p className="font-body-md text-xs text-[#8C8880] dark:text-neutral-300 mb-4">
                Schedule a 30-minute virtual consultation with Muhammad Naveed to discuss AI system design.
              </p>
              <button
                onClick={onOpenDemo}
                className="w-full bg-[#FAF9F5] text-[#1B1B1B] py-3 px-4 rounded-xl font-label text-xs font-bold hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar size={14} />
                <span>Schedule Consultation Call</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF8] dark:bg-neutral-900 rounded-[32px] p-8 md:p-12 border border-[#D9D7D0] dark:border-neutral-800 shadow-sm">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#F0EFEB] dark:bg-neutral-800 text-[#181818] dark:text-[#1F3B36] rounded-full flex items-center justify-center mb-6 border border-[#D9D7D0] dark:border-neutral-700">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-2">
                  Message Sent Successfully
                </h3>
                <p className="font-body-md text-sm text-[#8C8880] dark:text-neutral-300 max-w-md mb-8">
                  Thank you for reaching out! Muhammad Naveed has received your inquiry regarding <strong>{formData.topic}</strong> and will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', topic: 'Multi-Agent System Build', message: '' });
                  }}
                  className="bg-[#181818] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#181818] font-label text-xs font-bold px-6 py-3 rounded-full hover:bg-black dark:hover:bg-white transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-1">
                    Send a Message
                  </h3>
                  <p className="font-body-md text-xs text-[#8C8880] dark:text-neutral-300">
                    Fill out the form below to inquire about custom AI engineering, consulting, or project collaborations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF9F5] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-xl px-4 py-3 font-body-md text-sm text-[#1B1B1B] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#181818] dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF9F5] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-xl px-4 py-3 font-body-md text-sm text-[#1B1B1B] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#181818] dark:focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Arcform AI"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#FAF9F5] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-xl px-4 py-3 font-body-md text-sm text-[#1B1B1B] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#181818] dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">
                      Discussion Topic *
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-[#FAF9F5] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-xl px-4 py-3 font-body-md text-sm text-[#1B1B1B] dark:text-white focus:outline-none focus:border-[#181818] dark:focus:border-white transition-colors cursor-pointer"
                    >
                      <option value="Multi-Agent System Build">Multi-Agent System Build</option>
                      <option value="Enterprise RAG & Hybrid Memory">Enterprise RAG & Hybrid Memory</option>
                      <option value="Deterministic Guardrails & Safety">Deterministic Guardrails & Safety</option>
                      <option value="AI Architecture Advisory / Consulting">AI Architecture Advisory / Consulting</option>
                      <option value="Full-Time AI Engineering Role">Full-Time AI Engineering Role</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">
                    Project Details / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your objectives, system requirements, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF9F5] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-xl px-4 py-3 font-body-md text-sm text-[#1B1B1B] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#181818] dark:focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#181818] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#181818] py-3 sm:py-3.5 md:py-4 px-4 sm:px-6 rounded-xl font-label text-xs sm:text-sm font-bold hover:bg-black dark:hover:bg-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message to Muhammad Naveed</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
