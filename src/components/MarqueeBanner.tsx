import React, { useEffect, useRef } from 'react';

type TechItem = {
  label: string;
};

const techRows: TechItem[][] = [
  [
    { label: 'PyTorch' },
    { label: 'Python' },
    { label: 'React' },
    { label: 'TypeScript' },
    { label: 'Node.js' },
    { label: 'PostgreSQL' },
    { label: 'LangChain' },
    { label: 'LLM Ops' },
    { label: 'RAG' },
    { label: 'MCP' },
    { label: 'AI Agents' },
    { label: 'Prompt Design' },
  ],
  [
    { label: 'FastAPI' },
    { label: 'Next.js' },
    { label: 'Tailwind' },
    { label: 'Redis' },
    { label: 'TensorFlow' },
    { label: 'Pandas' },
    { label: 'Vector Search' },
    { label: 'Data Pipelines' },
    { label: 'DevOps' },
    { label: 'APIs' },
    { label: 'Automation' },
    { label: 'Product Thinking' },
  ],
];

export const MarqueeBanner: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let rafId = 0;

    const updateTracks = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const centerOffset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;

      trackRefs.current.forEach((track, index) => {
        if (!track) return;

        const direction = index % 2 === 0 ? -1 : 1;
        const offset = centerOffset * (index === 0 ? 14 : 10);
        const clampedOffset = Math.max(-10, Math.min(10, direction * offset));
        track.style.transform = `translate3d(${clampedOffset}px, 0, 0)`;
      });

      rafId = window.requestAnimationFrame(updateTracks);
    };

    rafId = window.requestAnimationFrame(updateTracks);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative my-4 w-full overflow-hidden border-y border-white/10 bg-[#181818] py-4 text-[#FAF9F5] shadow-xl dark:border-neutral-800 dark:bg-neutral-900/90 sm:py-5"
      aria-label="Technology marquee"
    >
      {techRows.map((row, rowIndex) => {
        const duplicatedRow = [...row, ...row];
        const isReverse = rowIndex % 2 === 1;

        return (
          <div
            key={rowIndex}
            className="overflow-hidden whitespace-nowrap"
          >
            <div
              ref={(el) => {
                trackRefs.current[rowIndex] = el;
              }}
              className="flex w-max min-w-full items-center gap-3 whitespace-nowrap px-1 py-2 will-change-transform"
              style={{
                transform: 'translate3d(0,0,0)',
              }}
            >
              {duplicatedRow.map((item, index) => (
                <div
                  key={`${rowIndex}-${item.label}-${index}`}
                  className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-label text-[10px] font-bold uppercase tracking-[0.22em] text-[#FAF9F5]/85 shadow-sm sm:text-xs"
                >
                  <span className={isReverse ? 'text-cyan-400' : 'text-[#FBBF24]'}>◆</span>
                  <span>{item.label}</span>
                  <span className={isReverse ? 'text-cyan-400/60' : 'text-[#FBBF24]/60'}>•</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

