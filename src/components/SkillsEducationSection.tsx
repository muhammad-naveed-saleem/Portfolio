import React, { useState } from 'react';
import { GraduationCap, Award, Cpu, Database, ShieldCheck, Code2, Sparkles, BookOpen, Search, Layers, Flame, Terminal, Container, GitBranch, Smile, Brain, Globe, Bot, FileCode } from 'lucide-react';

interface TechSkill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  tag?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: TechSkill[];
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
  field: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  badge: string;
}

export const SkillsEducationSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Terminal size={20} className="text-[#181818] dark:text-[#FAF9F5]" />,
      description: 'Core languages for core backend, data structures, and agent orchestration.',
      skills: [
        { name: 'Python', percentage: 95, icon: <span className="text-emerald-600 dark:text-[#1F3B36] font-mono font-bold text-xs">🐍</span>, tag: 'AI & Data' },
        { name: 'SQL', percentage: 90, icon: <Database size={16} className="text-blue-600 dark:text-blue-400" />, tag: 'Relational' },
        { name: 'JavaScript', percentage: 85, icon: <Code2 size={16} className="text-amber-500 dark:text-amber-400" />, tag: 'Web & Async' },
      ]
    },
    {
      id: 'aiml',
      title: 'AI/ML Frameworks',
      icon: <Brain size={20} className="text-[#181818] dark:text-[#FAF9F5]" />,
      description: 'Deep learning architectures, neural models, transformers, and ML pipelines.',
      skills: [
        { name: 'TensorFlow', percentage: 90, icon: <span className="text-orange-500 font-bold text-xs">🧠</span>, tag: 'Deep Learning' },
        { name: 'PyTorch', percentage: 85, icon: <Flame size={16} className="text-red-500" />, tag: 'Neural Nets' },
        { name: 'Scikit-learn', percentage: 95, icon: <Cpu size={16} className="text-cyan-600 dark:text-cyan-400" />, tag: 'ML Algorithms' },
        { name: 'HuggingFace', percentage: 88, icon: <Smile size={16} className="text-yellow-500" />, tag: 'Transformers' },
      ]
    },
    {
      id: 'agentic',
      title: 'Agentic Frameworks & Orchestration',
      icon: <Cpu size={20} className="text-[#181818] dark:text-[#FAF9F5]" />,
      description: 'Stateful multi-agent DAG graphs, autonomous supervisor loops, and LLM function calling.',
      skills: [
        { name: 'LangGraph Framework', percentage: 98, icon: <Layers size={16} className="text-teal-600 dark:text-teal-400" />, tag: 'State Graphs' },
        { name: 'Google Gemini 2.5 SDK', percentage: 96, icon: <Sparkles size={16} className="text-sky-500" />, tag: 'Native Tools' },
        { name: 'AutoGen & CrewAI', percentage: 90, icon: <Cpu size={16} className="text-purple-600 dark:text-purple-400" />, tag: 'Multi-Agent' },
        { name: 'LlamaIndex Workflows', percentage: 92, icon: <Database size={16} className="text-[#181818] dark:text-[#FAF9F5]" />, tag: 'Agentic RAG' },
      ]
    },
    {
      id: 'scraping',
      title: 'Data Scraping & Web Automation',
      icon: <Globe size={20} className="text-[#181818] dark:text-[#FAF9F5]" />,
      description: 'Automated web extraction, headless browser orchestration, and structured HTML parsing.',
      skills: [
        { name: 'BeautifulSoup', percentage: 95, icon: <FileCode size={16} className="text-emerald-600 dark:text-[#1F3B36]" />, tag: 'HTML Parsing' },
        { name: 'Selenium', percentage: 90, icon: <Bot size={16} className="text-green-600 dark:text-green-400" />, tag: 'Browser Automation' },
        { name: 'Scrapy', percentage: 88, icon: <Terminal size={16} className="text-amber-500" />, tag: 'Crawling Framework' },
        { name: 'Playwright', percentage: 85, icon: <Globe size={16} className="text-sky-500" />, tag: 'Headless Testing' },
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: <Container size={20} className="text-[#181818] dark:text-[#FAF9F5]" />,
      description: 'Production containerization, version control, and lightweight web microservices.',
      skills: [
        { name: 'Docker', percentage: 80, icon: <Container size={16} className="text-sky-600 dark:text-sky-400" />, tag: 'Containers' },
        { name: 'Git', percentage: 90, icon: <GitBranch size={16} className="text-orange-600 dark:text-orange-400" />, tag: 'Version Control' },
      ]
    },
    {
      id: 'guardrails',
      title: 'Guardrails & Vector Memory',
      icon: <ShieldCheck size={20} className="text-[#181818] dark:text-[#FAF9F5]" />,
      description: 'Type-safe schema constraints, vector databases, and prompt shielding.',
      skills: [
        { name: 'Pinecone Vector DB', percentage: 94, icon: <Database size={16} className="text-emerald-600 dark:text-[#1F3B36]" />, tag: 'Dense Vectors' },
        { name: 'Pydantic & Zod Schemas', percentage: 96, icon: <ShieldCheck size={16} className="text-indigo-600 dark:text-indigo-400" />, tag: 'Schema Lock' },
        { name: 'Adversarial Defense', percentage: 88, icon: <ShieldCheck size={16} className="text-rose-500" />, tag: 'Safety Shield' },
      ]
    }
  ];

  const filteredCategories = skillCategories
    .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (s.tag && s.tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  const educationList: EducationItem[] = [
    {
      degree: 'Bachelor of Science in Computer Science (BS CS)',
      institution: 'Virtual University of Pakistan',
      period: 'May 2026 — Present',
      location: 'Pakistan',
      field: 'Computer Science & Artificial Intelligence',
      details: [
        'Currently pursuing a Bachelor of Science degree in Computer Science at Virtual University of Pakistan (Started May 2026).',
        'Specializing in Artificial Intelligence, Stateful Multi-Agent Systems, and Modern Software Engineering.',
        'Actively building production-grade agentic architectures, hybrid vector retrieval engines, and LLM guardrail pipelines.'
      ]
    }
  ];

  const certificationsList: CertificationItem[] = [
    {
      title: 'Google Cloud Certified — Machine Learning Engineer',
      issuer: 'Google Cloud',
      year: '2024',
      badge: 'GCP Certified',
      credentialId: 'GCP-ML-88492'
    },
    {
      title: 'DataCamp — Associate AI Engineer for Developers',
      issuer: 'DataCamp',
      year: '2025',
      badge: 'Associate AI Engineer',
      credentialId: 'DC-AI-ENG-9421'
    },
    {
      title: 'DeepLearning.AI — Multi-Agent Systems with LangGraph & CrewAI',
      issuer: 'DeepLearning.AI',
      year: '2024',
      badge: 'Agentic Specialist',
      credentialId: 'DLAI-AG-4920'
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 px-margin max-w-[1728px] mx-auto bg-[#FFFFE3] dark:bg-[#121212] border-t border-[#D9D7D0]/40 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Title Block */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-2">
            Tech Stack
          </h2>

          <p className="font-body-md text-xs sm:text-sm text-[#8C8880] dark:text-neutral-400 max-w-xl text-balance">
            Technologies and tools I use to build intelligent systems, multi-agent frameworks, and data platforms.
          </p>
        </div>

        {/* Section 1: Compressed Tech Stack Skills Grid */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-[#D9D7D0]/60 dark:border-neutral-800">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] flex items-center gap-2">
              <Cpu className="text-[#181818] dark:text-[#FAF9F5]" size={20} />
              <span>Skill Proficiency Grid</span>
            </h3>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C8880] dark:text-neutral-400" />
              <input
                type="text"
                placeholder="Search tools (e.g. Python, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F0EFEB] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 rounded-full pl-9 pr-3 py-1.5 text-xs font-body-md text-[#1B1B1B] dark:text-[#FAF9F5] focus:outline-none focus:border-[#181818] dark:focus:border-neutral-400 transition-colors"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {[
              { id: 'all', label: 'All' },
              { id: 'languages', label: 'Languages' },
              { id: 'aiml', label: 'AI/ML' },
              { id: 'agentic', label: 'Agentic' },
              { id: 'scraping', label: 'Scraping' },
              { id: 'tools', label: 'Tools' },
              { id: 'guardrails', label: 'Guardrails' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`font-label text-[11px] font-semibold px-3 py-1 rounded-full transition-all cursor-pointer ${activeCategory === tab.id
                    ? 'bg-[#181818] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#181818] shadow-xs'
                    : 'bg-[#F0EFEB] text-[#1B1B1B] dark:bg-neutral-800 dark:text-neutral-300 hover:bg-[#E9E8E4] dark:hover:bg-neutral-700 border border-[#D9D7D0]/60 dark:border-neutral-700'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Compact 2/3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0EFEB] dark:bg-neutral-900/80 rounded-2xl p-4 border border-[#D9D7D0]/60 dark:border-neutral-800 hover:border-[#181818]/40 dark:hover:border-neutral-600 transition-all duration-300 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-[#D9D7D0]/40 dark:border-neutral-800">
                      <div className="w-8 h-8 rounded-xl bg-[#FAF9F5] dark:bg-neutral-800 border border-[#D9D7D0] dark:border-neutral-700 flex items-center justify-center shrink-0 shadow-2xs">
                        {cat.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-display text-sm font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] truncate">
                          {cat.title}
                        </h4>
                        <p className="font-label text-[10px] text-[#8C8880] dark:text-neutral-400 font-medium truncate">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-[#FAF9F5] dark:bg-neutral-800/80 px-2.5 py-2 rounded-xl border border-[#D9D7D0]/60 dark:border-neutral-700 hover:border-[#181818]/30 dark:hover:border-neutral-500 transition-colors flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-5 h-5 rounded bg-[#F0EFEB] dark:bg-neutral-700 border border-[#D9D7D0]/60 dark:border-neutral-600 flex items-center justify-center shrink-0 text-[10px]">
                              {skill.icon}
                            </div>
                            <span className="font-body-md text-xs font-bold text-[#1B1B1B] dark:text-[#FAF9F5] truncate">
                              {skill.name}
                            </span>
                          </div>

                          {skill.tag && (
                            <span className="font-mono text-[9px] uppercase text-[#8C8880] dark:text-neutral-400 bg-[#F0EFEB] dark:bg-neutral-700 px-2 py-0.5 rounded border border-[#D9D7D0] dark:border-neutral-600 shrink-0">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8 bg-[#F0EFEB] dark:bg-neutral-900 rounded-2xl border border-[#D9D7D0] dark:border-neutral-800">
                <p className="font-body-md text-xs text-[#8C8880] dark:text-neutral-400">No matching technologies found for "{searchQuery}".</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-2 font-label text-xs font-bold text-[#181818] dark:text-[#FAF9F5] underline cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Education & Certifications Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
          {/* Education Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF8] dark:bg-neutral-900 rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 border border-[#D9D7D0] dark:border-neutral-800 shadow-2xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D9D7D0] dark:border-neutral-800">
              <div className="w-10 h-10 rounded-2xl bg-[#181818] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#181818] flex items-center justify-center shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5]">
                  Academic Education
                </h3>
                <p className="font-label text-xs text-[#8C8880] dark:text-neutral-400 font-semibold uppercase tracking-wider">
                  Degree &amp; Foundational Studies
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {educationList.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-[#181818] dark:border-[#FAF9F5]">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#181818] dark:bg-[#FAF9F5] border-2 border-[#FAF9F5] dark:border-[#121212]"></div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-label text-xs uppercase tracking-wider text-[#181818] dark:text-[#FAF9F5] font-bold bg-[#F0EFEB] dark:bg-neutral-800 px-3 py-1 rounded-full border border-[#D9D7D0] dark:border-neutral-700">
                      {edu.period}
                    </span>
                    <span className="font-mono text-xs text-[#8C8880] dark:text-neutral-400 font-medium">
                      {edu.location}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="font-label text-xs font-bold text-[#8C8880] dark:text-neutral-400 mb-4">
                    {edu.institution} • {edu.field}
                  </p>

                  <ul className="space-y-2">
                    {edu.details.map((d, dIdx) => (
                      <li key={dIdx} className="font-body-md text-xs sm:text-sm text-[#1B1B1B]/80 dark:text-neutral-300 flex items-start gap-2">
                        <span className="text-[#181818] dark:text-[#FAF9F5] font-bold mt-0.5">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#F0EFEB] dark:bg-neutral-900/90 rounded-[32px] p-8 md:p-10 border border-[#D9D7D0]/60 dark:border-neutral-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D9D7D0] dark:border-neutral-800">
                <div className="w-10 h-10 rounded-2xl bg-[#181818] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#181818] flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5]">
                    Certifications
                  </h3>
                  <p className="font-label text-xs text-[#8C8880] dark:text-neutral-400 font-semibold uppercase tracking-wider">
                    Industry Verification
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {certificationsList.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FAF9F5] dark:bg-neutral-800 p-4 rounded-2xl border border-[#D9D7D0] dark:border-neutral-700 shadow-2xs hover:border-[#181818]/40 dark:hover:border-neutral-500 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#181818] dark:text-[#1F3B36] bg-[#F0EFEB] dark:bg-neutral-700 px-2.5 py-0.5 rounded border border-[#D9D7D0] dark:border-neutral-600">
                        {cert.badge}
                      </span>
                      <span className="font-mono text-xs text-[#8C8880] dark:text-neutral-400 font-medium">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="font-display text-sm font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-1 leading-snug">
                      {cert.title}
                    </h4>

                    <div className="flex items-center justify-between text-xs text-[#8C8880] dark:text-neutral-400 pt-2 border-t border-[#D9D7D0]/40 dark:border-neutral-700 mt-2">
                      <span>{cert.issuer}</span>
                      {cert.credentialId && (
                        <span className="font-mono text-[10px]">{cert.credentialId}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D9D7D0]/40 dark:border-neutral-800 text-center">
              <span className="font-label text-xs text-[#8C8880] dark:text-neutral-400 font-medium flex items-center justify-center gap-1.5">
                <BookOpen size={14} />
                Continuous Learning &amp; Agentic Research Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

