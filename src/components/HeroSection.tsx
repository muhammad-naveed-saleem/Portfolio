import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, ExternalLink, Sparkles, Mail, ArrowUpRight } from 'lucide-react';
import { Typewriter } from './Typewriter';
import { DEVELOPER_INFO } from '../data/mockData';
import naveedImage from '../../naveed.jpeg';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onExploreStudio: () => void;
}

const ROTATING_ROLES = [
  "Agentic AI Engineer",
  'AI ENGINEER',
  'STATEFUL LANGGRAPH ARCHITECT',
  'HYBRID RAG & VECTOR MEMORY SPECIALIST',
  'DETERMINISTIC AGENT SYSTEMS ENGINEER',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo, onExploreStudio }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-labelledby="hero-heading"
      className="pt-[90px] sm:pt-[120px] pb-16 sm:pb-24 px-4 sm:px-margin max-w-[1728px] mx-auto relative overflow-hidden bg-[#FAF9F5] dark:bg-[#121212] text-[#1B1B1B] dark:text-[#FAF9F5] transition-colors duration-300 border-b border-[#D9D7D0]/40 dark:border-neutral-800 snap-start scroll-mt-20"
    >
      <motion.div style={{ filter }} className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-6 sm:py-10">

        {/* Left Column: Signature Circle Backdrop with Placeholder */}
        <div className="lg:col-span-6 flex justify-center items-end relative order-2 lg:order-1 pt-2 sm:pt-4">
          <div className="relative w-[280px] h-[320px] sm:w-[380px] sm:h-[420px] md:w-[440px] md:h-[480px] flex justify-center items-end">
            {/* Developer Portrait */}
            <div className="relative z-10 w-[240px] sm:w-[320px] md:w-[320px] h-[90%] sm:h-[95%] flex items-end justify-center bg-[#181818] dark:bg-neutral-900 rounded-b-full sm:rounded-b-[180px] shadow-2xl overflow-hidden group translate-y-4 sm:translate-y-6">
              <img
                src={naveedImage}
                alt="Muhammad Naveed, AI Engineer and Agentic AI specialist portrait"
                className="h-full w-full object-cover object-center scale-[1.08] group-hover:scale-[1.12] transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0F17]/80 via-[#0B0F17]/20 to-transparent" />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] sm:text-xs text-[#FAF9F5] uppercase tracking-widest font-semibold bg-[#0B0F17]/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                AI SYSTEM ENGINEER
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Impact Typography & CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start text-left order-1 lg:order-2">

          {/* Main Title Name */}
          <h1 id="hero-heading" className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold leading-[0.95] tracking-tight text-[#1B1B1B] dark:text-[#FAF9F5] mb-4">
            Muhammad<br />
            <span>Naveed</span>
            <span className="text-[#181818] dark:text-[#3BB0C8]">.</span>
          </h1>

          {/* Dynamic Typewriter Subtitle Tagline */}
          <div className="font-label text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#181818] dark:text-[#3BB0C8] mb-6 flex items-center gap-2 min-h-[28px]">
            <Typewriter speed={40} deleteSpeed={18}>
              {ROTATING_ROLES[roleIndex]}
            </Typewriter>
          </div>

          {/* Description Paragraph */}
          <p className="font-body-lg text-sm sm:text-base text-[#8C8880] dark:text-neutral-300 max-w-xl leading-relaxed mb-8 font-normal">
            Muhammad Naveed is an AI Engineer building agentic AI systems, LangGraph orchestration, hybrid RAG pipelines, and deterministic multi-agent architectures for production-grade automation.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
            <button
              onClick={onOpenDemo}
              className="px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-[#181818] text-[#FAF9F5] hover:bg-black dark:bg-[#FAF9F5] dark:text-[#181818] dark:hover:bg-white font-label text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 rounded-lg cursor-pointer flex items-center justify-center gap-2 sm:gap-2.5 shadow-md group w-full sm:w-auto"
            >
              <Mail size={16} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
              <span>GET IN TOUCH</span>
            </button>

            <button
              onClick={onExploreStudio}
              className="px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-[#F0EFEB] dark:bg-neutral-800 text-[#1B1B1B] dark:text-[#FAF9F5] hover:bg-[#E9E8E4] dark:hover:bg-neutral-700 border border-[#D9D7D0] dark:border-neutral-700 font-label text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 rounded-lg cursor-pointer flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <Sparkles size={16} className="text-[#181818] dark:text-[#3BB0C8] shrink-0" />
              <span>VIEW SYSTEMS</span>
              <ArrowUpRight size={14} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </button>

            <a
              href={DEVELOPER_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 sm:px-5 sm:py-3.5 bg-transparent border border-[#D9D7D0] dark:border-neutral-700 hover:border-[#181818] dark:hover:border-neutral-500 text-[#1B1B1B] dark:text-neutral-300 font-label text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-lg cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
              title="GitHub Profile"
            >
              <Github size={18} className="shrink-0" />
              <span>GITHUB</span>
              <ExternalLink size={12} className="opacity-60 shrink-0" />
            </a>
          </div>

        </div>

      </motion.div>
    </section>
  );
};



