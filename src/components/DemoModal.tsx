import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Building, Users, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('50-250');
  const [useCase, setUseCase] = useState('Brand Guidelines & AI Guardrails');
  const [selectedDate, setSelectedDate] = useState('2026-08-04');
  const [selectedTime, setSelectedTime] = useState('10:00 AM EST');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3); // Confirmation step
    }, 800);
  };

  const handleReset = () => {
    setStep(1);
    setFullName('');
    setEmail('');
    setCompany('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#FAF9F5] dark:bg-[#151C28] text-[#1B1B1B] dark:text-[#FAF9F5] rounded-2xl sm:rounded-[32px] max-w-xl w-full p-5 sm:p-8 relative border border-[#D9D7D0] dark:border-neutral-700 shadow-2xl animate-in fade-in zoom-in-95 duration-200 my-auto max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#E9E8E4] dark:bg-neutral-800 hover:bg-[#D9D7D0] dark:hover:bg-neutral-700 text-[#1B1B1B] dark:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {step === 1 && (
          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#181818] dark:bg-neutral-800 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-transparent dark:border-neutral-700">
              <span className="text-[#FAF9F5] font-bold text-lg sm:text-xl leading-none pt-[1px] pl-[1px]">MN</span>
            </div>

            <span className="font-label text-xs uppercase tracking-wider text-[#8C8880] dark:text-neutral-400 mb-1 block font-semibold">Step 1 of 2</span>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-2 pr-6">Schedule an Agentic AI Consultation</h3>
            <p className="font-body-md text-xs sm:text-sm text-[#8C8880] dark:text-neutral-300 mb-6">
              Discuss enterprise multi-agent graph architecture, RAG systems, and deterministic guardrails directly with Muhammad Naveed.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
              <div>
                <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-[#F0EFEB] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-xl px-4 py-3 font-body-md text-sm text-[#1B1B1B] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#181818] dark:focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">Work Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full bg-[#F0EFEB] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-xl px-4 py-3 font-body-md text-sm text-[#1B1B1B] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#181818] dark:focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">Company Name</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Northline Inc."
                    className="w-full bg-[#F0EFEB] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-xl px-4 py-3 font-body-md text-sm text-[#1B1B1B] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#181818] dark:focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">Team Size</label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full bg-[#F0EFEB] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-xl px-4 py-3 font-body-md text-sm text-[#1B1B1B] dark:text-white focus:outline-none focus:border-[#181818] dark:focus:border-white transition-colors cursor-pointer"
                  >
                    <option value="10-50">10 - 50 employees</option>
                    <option value="50-250">50 - 250 employees</option>
                    <option value="250-1000">250 - 1,000 employees</option>
                    <option value="1000+">1,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="w-full bg-[#181818] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#181818] font-label text-xs py-4 rounded-full font-semibold hover:bg-black dark:hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Continue to Time Slot</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-label text-[#8C8880] dark:text-neutral-400 hover:text-[#1B1B1B] dark:hover:text-white underline"
              >
                ← Back to info
              </button>
            </div>

            <span className="font-label text-xs uppercase tracking-wider text-[#8C8880] dark:text-neutral-400 mb-1 block">Step 2 of 2</span>
            <h3 className="font-display text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-2">Select Date & Time</h3>
            <p className="font-body-md text-sm text-[#8C8880] dark:text-neutral-300 mb-6">
              Pick a 30-minute window for your technical strategy session with Muhammad Naveed.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">Preferred Date</label>
                <div className="grid grid-cols-3 gap-2">
                  {['2026-08-04', '2026-08-05', '2026-08-06'].map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        selectedDate === d
                          ? 'bg-[#181818] text-[#FAF9F5] border-[#181818] dark:bg-[#FAF9F5] dark:text-[#181818] dark:border-[#FAF9F5]'
                          : 'bg-[#F0EFEB] text-[#1B1B1B] border-[#D9D7D0] dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700 hover:bg-[#E9E8E4] dark:hover:bg-neutral-700'
                      }`}
                    >
                      {new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' })}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">Time Window</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['10:00 AM EST', '01:30 PM EST', '03:00 PM EST', '04:30 PM EST', '06:00 PM EST'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                        selectedTime === t
                          ? 'bg-[#181818] text-[#FAF9F5] border-[#181818] dark:bg-[#FAF9F5] dark:text-[#181818] dark:border-[#FAF9F5]'
                          : 'bg-[#F0EFEB] text-[#1B1B1B] border-[#D9D7D0] dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700 hover:bg-[#E9E8E4] dark:hover:bg-neutral-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-label text-xs uppercase text-[#1B1B1B] dark:text-neutral-200 tracking-wider block mb-1.5 font-bold">Primary Discussion Area</label>
                <select
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="w-full bg-[#F0EFEB] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-xl px-4 py-3 font-body-md text-sm text-[#1B1B1B] dark:text-white focus:outline-none focus:border-[#181818] dark:focus:border-white transition-colors cursor-pointer"
                >
                  <option value="Multi-Agent Systems & LangGraph Architecture">Multi-Agent Systems & LangGraph Architecture</option>
                  <option value="Enterprise Hybrid RAG & Vector Memory">Enterprise Hybrid RAG & Vector Memory</option>
                  <option value="Deterministic Tool-Calling & API Integration">Deterministic Tool-Calling & API Integration</option>
                  <option value="Agentic Safety, Guardrails & Evaluation">Agentic Safety, Guardrails & Evaluation</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#181818] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#181818] font-label text-xs py-4 rounded-full font-semibold hover:bg-black dark:hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming Booking...</span>
                  ) : (
                    <>
                      <span>Confirm Strategy Session</span>
                      <Calendar size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-[#F0EFEB] dark:bg-neutral-800 text-[#181818] dark:text-[#1F3B36] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D9D7D0] dark:border-neutral-700">
              <CheckCircle2 size={36} />
            </div>

            <span className="font-label text-xs uppercase tracking-wider text-[#181818] dark:text-[#FAF9F5] font-bold block mb-1">Demo Reserved</span>
            <h3 className="font-display text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-2">We look forward to meeting you!</h3>
            <p className="font-body-md text-sm text-[#8C8880] dark:text-neutral-300 mb-6 max-w-sm mx-auto">
              A calendar invite and meeting details have been dispatched to <strong className="text-[#1B1B1B] dark:text-white">{email}</strong>.
            </p>

            <div className="bg-[#F0EFEB] dark:bg-neutral-800 p-4 rounded-2xl text-left border border-[#D9D7D0] dark:border-neutral-700 text-xs space-y-2 mb-6">
              <div className="flex justify-between border-b border-[#D9D7D0]/50 dark:border-neutral-700 pb-2">
                <span className="text-[#8C8880] dark:text-neutral-400">Attendee</span>
                <span className="font-semibold text-[#1B1B1B] dark:text-white">{fullName} ({company})</span>
              </div>
              <div className="flex justify-between border-b border-[#D9D7D0]/50 dark:border-neutral-700 pb-2">
                <span className="text-[#8C8880] dark:text-neutral-400">Scheduled Time</span>
                <span className="font-semibold text-[#1B1B1B] dark:text-white">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8880] dark:text-neutral-400">Focus Area</span>
                <span className="font-semibold text-[#1B1B1B] dark:text-white">{useCase}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#181818] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#181818] font-label text-xs px-8 py-3 rounded-full hover:bg-black dark:hover:bg-white transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
