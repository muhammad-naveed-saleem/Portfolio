import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Architecting autonomous multi-agent systems requires strict context isolation, deterministic guardrails, and rapid tool execution.",
      name: "Muhammad Naveed",
      role: "AI Engineer • Agentic AI Specialist"
    },
    {
      quote: "Designing agentic workflows that break down complex enterprise challenges into resilient, self-healing multi-agent sub-tasks.",
      name: "Muhammad Naveed",
      role: "AI Engineer • System Architect"
    },
    {
      quote: "Bridging large language models with real-world tool use, custom RAG pipelines, and autonomous execution environments.",
      name: "Muhammad Naveed",
      role: "AI Engineer • Agentic AI Specialist"
    }
  ];

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-[100px] md:py-[160px] px-margin max-w-[1200px] mx-auto flex flex-col items-center text-center bg-[#FFFFE3] dark:bg-[#0B0F17] border-t border-[#D9D7D0]/30 dark:border-neutral-800 transition-colors duration-300">
      <div className="inline-flex items-center gap-2.5 bg-[#F0EFEB] dark:bg-neutral-800 px-5 py-2.5 rounded-full mb-8 shadow-2xs border border-transparent dark:border-neutral-700">
        <span className="w-2.5 h-2.5 rounded-full bg-[#181818] dark:bg-[#1F3B36] animate-pulse"></span>
        <span className="font-label text-sm uppercase tracking-wider text-[#1B1B1B] dark:text-[#FAF9F5] font-extrabold">
          Engineering Perspective & Philosophy
        </span>
      </div>

      <div className="mb-6 text-[#8C8880]/30 dark:text-neutral-600">
        <Quote size={52} className="rotate-180" />
      </div>

      <h2 className="font-display text-[26px] sm:text-[36px] md:text-[48px] leading-[1.2] font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-10 text-balance max-w-4xl transition-all duration-300">
        "{current.quote}"
      </h2>

      <div className="flex items-center gap-4 mb-8 bg-[#F0EFEB] dark:bg-neutral-900 px-6 py-3 rounded-full border border-[#D9D7D0]/50 dark:border-neutral-800 shadow-2xs">
        <div className="w-12 h-12 rounded-full bg-[#181818] dark:bg-neutral-800 text-[#FAF9F5] font-bold text-sm flex items-center justify-center shrink-0 border-2 border-[#181818] dark:border-neutral-700">
          MN
        </div>
        <div className="text-left">
          <p className="font-label text-sm font-bold text-[#1B1B1B] dark:text-[#FAF9F5]">{current.name}</p>
          <p className="font-label text-xs text-[#8C8880] dark:text-neutral-400 font-medium">{current.role}</p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-full bg-[#F0EFEB] dark:bg-neutral-800 hover:bg-[#E9E8E4] dark:hover:bg-neutral-700 text-[#1B1B1B] dark:text-white border border-[#D9D7D0] dark:border-neutral-700 transition-all hover:scale-105 cursor-pointer shadow-2xs"
          aria-label="Previous quote"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="font-mono text-xs text-[#8C8880] dark:text-neutral-300 font-semibold bg-[#F0EFEB] dark:bg-neutral-800 px-3 py-1.5 rounded-full border border-[#D9D7D0]/40 dark:border-neutral-700">
          0{currentIndex + 1} / 0{testimonials.length}
        </span>
        <button
          onClick={handleNext}
          className="p-2.5 rounded-full bg-[#F0EFEB] dark:bg-neutral-800 hover:bg-[#E9E8E4] dark:hover:bg-neutral-700 text-[#1B1B1B] dark:text-white border border-[#D9D7D0] dark:border-neutral-700 transition-all hover:scale-105 cursor-pointer shadow-2xs"
          aria-label="Next quote"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};
