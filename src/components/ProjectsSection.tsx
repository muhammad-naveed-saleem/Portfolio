import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowUpRight, Github, Code2, Layers, ShieldCheck, Database, CheckCircle2, X } from 'lucide-react';
import { PROJECTS_DATA, Project, DEVELOPER_INFO } from '../data/mockData';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let rafId = 0;

    const updateCards = () => {
      const viewportHeight = window.innerHeight;

      cardRefs.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const centerDistance = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const offsetY = Math.max(-8, Math.min(8, centerDistance * 12));

        card.style.transform = `translate3d(0, ${offsetY}px, 0)`;
      });

      rafId = window.requestAnimationFrame(updateCards);
    };

    rafId = window.requestAnimationFrame(updateCards);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  const categories = ['All', 'Multi-Agent Systems', 'RAG & Memory', 'Guardrails & Tooling'];

  const filteredProjects = activeTab === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-[100px] md:py-[160px] px-margin max-w-[1728px] mx-auto bg-[#FFFFE3] dark:bg-[#0B0F17] dark:border-neutral-800 transition-colors duration-300">
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-h2 font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-4">
          Agentic AI Engineering Projects
        </h2>

        <p className="font-body-lg text-[#8C8880] dark:text-neutral-300 max-w-2xl text-balance">
          Production-ready multi-agent architectures, stateful orchestration graphs, deterministic guardrails, and hybrid RAG memory Projects built by Muhammad Naveed.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`font-label text-[11px] sm:text-xs md:text-sm font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full transition-all cursor-pointer ${activeTab === cat
                  ? 'bg-[#181818] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#181818] shadow-md'
                  : 'bg-[#F0EFEB] text-[#1B1B1B] dark:bg-neutral-800 dark:text-neutral-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[1400px] mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="bg-[#F0EFEB] dark:bg-neutral-900/90 rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group relative overflow-hidden will-change-transform"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            <div>
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="font-label text-xs uppercase tracking-wider text-[#181818] dark:text-[#FAF9F5] font-bold bg-[#FAF9F5] dark:bg-neutral-800 px-3.5 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="font-label text-xs font-semibold text-[#181818] dark:text-[#FAF9F5] bg-[#FAF9F5] dark:bg-neutral-800 px-3 py-1 rounded-full flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#181818] dark:bg-[#1F3B36] animate-pulse"></span>
                  {project.status}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-1 group-hover:text-black dark:group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="font-label text-xs text-[#8C8880] dark:text-neutral-400 uppercase tracking-wider font-semibold mb-4">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="font-body-md text-xs sm:text-sm text-[#1B1B1B]/80 dark:text-neutral-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights Bullet List */}
              <div className="space-y-2 mb-6   pt-4">
                {project.highlights.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#1B1B1B] dark:text-neutral-200 font-medium">
                    <CheckCircle2 size={14} className="text-[#181818] dark:text-[#1F3B36] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6 sm:mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] sm:text-[11px] bg-[#FAF9F5] dark:bg-neutral-800 text-[#1B1B1B] dark:text-neutral-200 px-2.5 py-1 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 mt-auto">
              <button
                onClick={() => setSelectedProject(project)}
                className="font-label text-xs font-bold text-[#181818] dark:text-[#FAF9F5] hover:text-[#8C8880] dark:hover:text-neutral-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View Architecture Specs</span>
                <ArrowUpRight size={14} />
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-label text-[#8C8880] dark:text-neutral-400 hover:text-[#181818] dark:hover:text-white transition-colors"
              >
                <Github size={14} />
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Project Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#FAF9F5] dark:bg-[#151C28] text-[#1B1B1B] dark:text-[#FAF9F5] w-full max-w-3xl rounded-2xl sm:rounded-[32px] p-5 sm:p-10 shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#F0EFEB] dark:bg-neutral-800 hover:bg-[#181818] hover:text-white transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-3 pr-8">
              <div className="w-10 h-10 rounded-full bg-[#181818] dark:bg-neutral-800 text-[#FAF9F5] font-bold text-xs flex items-center justify-center shrink-0">
                MN
              </div>
              <div>
                <p className="font-label text-xs font-bold text-[#1B1B1B] dark:text-[#FAF9F5]">Muhammad Naveed • AI System Specialist</p>
                <p className="font-mono text-[10px] text-[#8C8880] dark:text-neutral-400">{selectedProject.status}</p>
              </div>
            </div>

            <h3 className="font-display text-xl sm:text-3xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-1">
              {selectedProject.title}
            </h3>
            <p className="font-label text-xs uppercase tracking-wider text-[#8C8880] dark:text-neutral-400 font-bold mb-6">
              {selectedProject.subtitle}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#F0EFEB] dark:bg-neutral-900 p-4 rounded-2xl mb-6">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="text-center py-1 sm:py-0 border-b sm:border-b-0 sm:border-r last:border-0 border-[#D9D7D0]/60 dark:border-neutral-800">
                  <span className="font-display text-lg sm:text-2xl font-bold text-[#1B1B1B] dark:text-[#FAF9F5] block">{m.value}</span>
                  <span className="font-label text-[10px] uppercase text-[#8C8880] dark:text-neutral-400 font-semibold">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Architecture Overview */}
            <div className="mb-6">
              <h4 className="font-label text-xs uppercase text-[#1B1B1B] dark:text-[#FAF9F5] tracking-wider font-bold mb-2 flex items-center gap-2">
                <Layers size={14} />
                <span>Architecture Overview</span>
              </h4>
              <p className="font-body-md text-sm text-[#1B1B1B]/90 dark:text-neutral-200 leading-relaxed bg-[#F0EFEB] dark:bg-neutral-900 p-4 rounded-2xl">
                {selectedProject.architectureOverview}
              </p>
            </div>

            {/* Graph Topology */}
            <div className="mb-6">
              <h4 className="font-label text-xs uppercase text-[#1B1B1B] dark:text-[#FAF9F5] tracking-wider font-bold mb-2 flex items-center gap-2">
                <Code2 size={14} />
                <span>Execution Graph Topology</span>
              </h4>
              <div className="bg-[#181818] dark:bg-neutral-900 text-[#FAF9F5] p-4 rounded-2xl font-mono text-xs space-y-2">
                {selectedProject.sampleTopology.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-white dark:text-[#1F3B36] font-bold">0{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            <div className="mb-8">
              <h4 className="font-label text-xs uppercase text-[#1B1B1B] dark:text-[#FAF9F5] tracking-wider font-bold mb-3 flex items-center gap-2">
                <ShieldCheck size={14} />
                <span>Core Engineering Highlights</span>
              </h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#1B1B1B] dark:text-neutral-200 font-medium">
                    <CheckCircle2 size={14} className="text-[#181818] dark:text-[#1F3B36] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-between pt-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#181818] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#181818] px-6 py-3 rounded-full text-xs font-label font-semibold hover:bg-black dark:hover:bg-white transition-all"
              >
                <Github size={16} />
                <span>Explore Code on GitHub</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-label font-bold text-[#8C8880] dark:text-neutral-400 hover:text-[#181818] dark:hover:text-white transition-colors cursor-pointer"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
