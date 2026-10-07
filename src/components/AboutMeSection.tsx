import React from 'react';
import { ArrowRight, BrainCircuit, Code2, Sparkles } from 'lucide-react';
import naveedImage from '../assets/images/muhammad-naveed-cybersecurity-specialist-portrait.jpeg';

interface AboutMeSectionProps {
  isDedicatedPage?: boolean;
  onBackToHome?: () => void;
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({ isDedicatedPage = false, onBackToHome }) => {
  return (
    <section
      id="about-me"
      className="px-4 sm:px-margin py-[100px] md:py-[140px] max-w-[1728px] mx-auto bg-[#FFFFE3] dark:bg-[#0B0F17] text-[#1B1B1B] dark:text-[#FAF9F5] border-t border-[#D9D7D0]/40 dark:border-neutral-800 transition-colors duration-300"
      aria-labelledby="about-me-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 font-label text-[11px] font-bold uppercase tracking-[0.22em] text-[#8C8880] dark:text-neutral-400">
            About Me
          </p>
          <h2
            id="about-me-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5]"
          >
            Muhammad Naveed builds AI products that turn complex systems into calm, reliable experiences.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[38px] border border-[#D9D7D0] bg-[#F0EFEB] p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/90">
              <img
                src={naveedImage}
                alt="Muhammad Naveed, cybersecurity specialist and AI engineer portrait"
                title="Muhammad Naveed — Cybersecurity Specialist and AI Engineer"
                className="h-[360px] w-full rounded-[20px] object-cover object-center sm:h-[440px]"
              />
            </div>

            <p className="font-body-lg text-base sm:text-lg leading-relaxed text-[#1B1B1B]/80 dark:text-neutral-200">
              I’m Muhammad Naveed, an AI engineer focused on building agentic systems, orchestration layers,
              and production-grade automation experiences. My work sits at the intersection of product thinking,
              software engineering, and applied AI research.
            </p>

            <p className="font-body-lg text-base sm:text-lg leading-relaxed text-[#1B1B1B]/75 dark:text-neutral-300">
              I specialize in designing stateful multi-agent architectures, hybrid retrieval systems, deterministic
              guardrails, and high-leverage developer tools that help teams move from prototype to production with
              confidence.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['AI Systems', 'Agentic Workflows', 'RAG & Memory', 'Product Architecture'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D9D7D0] bg-[#F0EFEB] px-3 py-1.5 font-label text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B1B1B] dark:border-neutral-700 dark:bg-neutral-900 dark:text-[#FAF9F5]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-[#D9D7D0] bg-[#F0EFEB] p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/90">
              <BrainCircuit className="mb-3 h-5 w-5 text-[#181818] dark:text-[#FBBF24]" />
              <p className="font-display text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5]">4+</p>
              <p className="mt-1 font-label text-[10px] uppercase tracking-[0.18em] text-[#8C8880] dark:text-neutral-400">
                Years building AI systems
              </p>
            </div>

            <div className="rounded-2xl border border-[#D9D7D0] bg-[#F0EFEB] p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/90">
              <Code2 className="mb-3 h-5 w-5 text-[#181818] dark:text-[#1F3B36]" />
              <p className="font-display text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5]">20+</p>
              <p className="mt-1 font-label text-[10px] uppercase tracking-[0.18em] text-[#8C8880] dark:text-neutral-400">
                Product + platform builds
              </p>
            </div>

            <div className="rounded-2xl border border-[#D9D7D0] bg-[#F0EFEB] p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/90">
              <Sparkles className="mb-3 h-5 w-5 text-[#181818] dark:text-[#FBBF24]" />
              <p className="font-display text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5]">AI</p>
              <p className="mt-1 font-label text-[10px] uppercase tracking-[0.18em] text-[#8C8880] dark:text-neutral-400">
                Product-first engineering
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[32px] border border-[#D9D7D0] bg-[#F0EFEB] p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/95">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.22em] text-[#8C8880] dark:text-neutral-400">
                {isDedicatedPage ? 'Overview' : 'How I work'}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5]">
                {isDedicatedPage
                  ? 'I turn ambitious AI ideas into dependable systems.'
                  : 'I turn ambitious AI ideas into dependable systems.'}
              </h3>
            </div>

            <button
              onClick={isDedicatedPage ? onBackToHome : undefined}
              className="inline-flex items-center gap-2 rounded-full bg-[#181818] px-5 py-3 font-label text-[10px] font-bold uppercase tracking-[0.18em] text-[#FAF9F5] transition-colors hover:bg-black dark:bg-[#FAF9F5] dark:text-[#181818] dark:hover:bg-white"
            >
              {isDedicatedPage ? 'Back to Home' : 'View Projects'}
              {!isDedicatedPage && <ArrowRight size={14} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
