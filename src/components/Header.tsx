import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onOpenDemo: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenDemo, 
  activeSection,
  onNavigate,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About Me', id: 'about-me' },
    { label: 'Skills & Edu', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Insights', id: 'updates' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar at very top of viewport */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-[#D9D7D0]/30 dark:bg-neutral-800/50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#181818] via-[#1F3B36] to-[#2F4F4C] dark:from-[#1F3B36] dark:via-[#2F4F4C] dark:to-[#FAF9F5] transition-all duration-150 ease-out shadow-xs"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 1. Floating Nav (TopAppBar) */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex items-center justify-center px-3 sm:px-6 w-full pointer-events-none antialiased">
        <div className={`pointer-events-auto w-[76.5%] max-w-[980px] h-12 sm:h-[62px] flex items-center justify-between rounded-full px-2.5 py-1 sm:py-1.5 transition-all duration-300 backdrop-blur-xl ${
          isScrolled
            ? 'bg-[#1F3B36]'
            : 'bg-[#1F3B36]'
        }`}>
          {/* Brand Logo (Left) */}
          <div className="flex items-center pl-0.5 sm:pl-1.5 shrink-0">
            <button 
              onClick={() => handleNavClick('hero')} 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF9F5] flex items-center justify-center shrink-0 overflow-hidden relative cursor-pointer hover:scale-105 transition-transform shadow-sm"
              title="Muhammad Naveed Home"
            >
              <span className="text-[#111827] font-black text-xs sm:text-sm tracking-tight leading-none">MN</span>
            </button>
          </div>

          {/* Centered Nav Links */}
          <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-1.5 mx-auto bg-[#1F3B36] px-1.5 py-1 rounded-full">
            {navItems.map((item) => {
              const isActive = item.id === activeSection;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative font-label text-[10px] sm:text-xs px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer tracking-[0.02em] ${
                    isActive
                      ? 'bg-[#1F3B36] text-white font-bold'
                      : 'bg-[#1F3B36] text-slate-200 hover:text-white font-semibold'
                  }`}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 inline-block">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Actions (Right) */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#274D48] hover:bg-[#2F5E59] text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-0.5 active:scale-95"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} className="text-amber-300" /> : <Moon size={18} className="text-slate-100" />}
            </button>

            <button
              onClick={onOpenDemo}
              className="hidden sm:flex bg-[#274D48] text-white font-label text-[10px] sm:text-xs h-8 sm:h-9 px-2.5 sm:px-3 rounded-full hover:bg-[#2F5E59] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shrink-0 items-center justify-center cursor-pointer font-bold tracking-tight active:scale-95"
            >
              Book a demo
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/15 active:scale-95 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-24 px-6 pb-8 flex flex-col justify-between text-[#FAF9F5] md:hidden overflow-y-auto">
          <div className="flex flex-col gap-6">
            <nav className="flex flex-col gap-2 text-lg font-medium pb-6">
              {navItems.map((item) => {
                const isActive = item.id === activeSection;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-white/20 text-white font-bold'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-white/40 font-mono">→</span>
                  </button>
                );
              })}
            </nav>
            <div className="flex items-center justify-between py-3 text-sm">
              <span className="font-label text-xs uppercase tracking-wider text-white/60">Appearance</span>
              <button
                onClick={onToggleDarkMode}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF9F5] flex items-center gap-2 text-xs font-semibold cursor-pointer"
              >
                {isDarkMode ? (
                  <>
                    <Sun size={16} className="text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={16} className="text-slate-400" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="w-full bg-[#FAF9F5] text-black py-4 rounded-full font-semibold text-center mt-6 text-sm cursor-pointer active:scale-98 transition-transform"
          >
            Contact
          </button>
        </div>
      )}
    </>
  );
};
