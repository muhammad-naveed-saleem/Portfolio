import React, { useState } from 'react';
import { Cpu, Layers, Bot, Zap, Database, ShieldCheck, Terminal, Workflow } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<string | null>(null);

  const techStack = [
    { name: 'LangGraph', metric: 'Stateful Multi-Agent Graphs', quote: 'Hierarchical agent orchestration with persistent state checkpointing.', icon: Workflow },
    { name: 'AutoGen', metric: 'Multi-Agent Collaboration', quote: 'Conversational agent networks for automated code & task execution.', icon: Bot },
    { name: 'CrewAI', metric: 'Role-Based Agent Teams', quote: 'Autonomous role-driven workflows with delegated task sub-graphs.', icon: Layers },
    { name: 'Gemini Pro 1.5', metric: 'Multimodal & Function Calling', quote: 'High-throughput 2M token context window & native tool execution.', icon: Zap },
    { name: 'LlamaIndex', metric: 'Hybrid RAG Memory', quote: 'Sub-second semantic search & episodic memory grounding.', icon: Database },
    { name: 'Guardrails AI', metric: 'Deterministic Validation', quote: 'Zero-trust PII sanitization & structural JSON validation.', icon: ShieldCheck },
    { name: 'FastMCP', metric: 'Model Context Protocol', quote: 'Standardized server-client protocol for AI tools and context.', icon: Terminal },
    { name: 'vLLM & TensorRT', metric: 'High-Throughput Inference', quote: 'PagedAttention memory management for high concurrency.', icon: Cpu },
  ];

  // Duplicate techStack for seamless infinite scrolling
  const marqueeList = [...techStack, ...techStack];

  return (
    <section className="py-6 px-0 border-t border-b border-[#D9D7D0]/40 dark:border-neutral-800/80 w-full bg-[#FFFFE3] dark:bg-transparent relative z-10 transition-colors duration-300 overflow-hidden">
      <div className="px-4 sm:px-8 max-w-[1728px] mx-auto mb-3 flex items-center justify-between">
        <p className="font-label text-[10px] sm:text-xs text-[#8C8880] dark:text-neutral-400 uppercase tracking-widest font-bold">
          Specialized Agentic AI Frameworks & Platforms
        </p>
        <span className="font-mono text-[9px] sm:text-[10px] bg-[#181818] dark:bg-neutral-800 text-white dark:text-[#1F3B36] px-2 py-0.5 rounded-full font-semibold border border-white/10">
          • Live Stack Marquee
        </span>
      </div>

      {/* Marquee Track without side fade boxes */}
      <div className="w-full overflow-hidden py-1">
        <div className="animate-marquee flex items-center gap-3 sm:gap-4">
          {marqueeList.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={`${tech.name}-${idx}`} className="relative group shrink-0">
                <button
                  onClick={() => setActiveBrand(activeBrand === tech.name ? null : tech.name)}
                  onMouseEnter={() => setActiveBrand(tech.name)}
                  onMouseLeave={() => setActiveBrand(null)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F0EFEB] dark:bg-neutral-900/90 border border-[#D9D7D0]/50 dark:border-neutral-800/80 transition-all duration-200 cursor-pointer shadow-2xs"
                >
                  <Icon size={12} className="text-[#181818] dark:text-[#1F3B36]" />
                  <span className="font-display text-[11px] sm:text-xs font-semibold tracking-tight text-[#1B1B1B] dark:text-[#FAF9F5]">
                    {tech.name}
                  </span>
                </button>

                {/* Hover Tooltip / Popover */}
                {activeBrand === tech.name && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-[#181818] dark:bg-neutral-900 text-[#FAF9F5] p-2.5 rounded-lg shadow-2xl z-30 text-[11px] pointer-events-none border border-white/15 animate-in fade-in zoom-in-95 duration-200">
                    <div className="font-semibold text-white dark:text-[#1F3B36] mb-0.5 flex items-center gap-1">
                      <Icon size={12} />
                      {tech.metric}
                    </div>
                    <div className="text-white/80 dark:text-neutral-300 italic">{tech.quote}</div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#181818] dark:border-t-neutral-900"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


