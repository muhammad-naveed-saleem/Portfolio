import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { MarqueeBanner } from './components/MarqueeBanner';
import { SkillsEducationSection } from './components/SkillsEducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialSection } from './components/TestimonialSection';
import { UpdatesSection } from './components/UpdatesSection';
import { ContactSection } from './components/ContactSection';
import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';
import { AnimatedSection } from './components/AnimatedSection';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('theme_preference');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return true;
  });

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Sync with OS theme preference when system setting changes (unless overridden)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const userPreference = localStorage.getItem('theme_preference');
      // If user has not set a manual override, follow the OS setting dynamically
      if (!userPreference) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('theme_preference', next ? 'dark' : 'light');
      return next;
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      const yOffset = -80; // Account for fixed top navigation bar
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sectionIds = ['hero', 'skills', 'projects', 'updates', 'contact'];

    const handleScroll = () => {
      // If at bottom of page, highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 180; // header offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0B0F17] text-[#F5F7FA] dark:bg-[linear-gradient(45deg,#131c26_0%,#1a2634_100%)] dark:text-[#F5F7FA] font-sans antialiased selection:bg-[#181818] selection:text-[#FAF9F5] transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* 1. Header TopAppBar */}
      <Header
        onOpenDemo={() => setDemoModalOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main>
        {/* 2. Hero Section */}
        <AnimatedSection>
          <HeroSection
            onOpenDemo={() => setDemoModalOpen(true)}
            onExploreStudio={() => scrollToSection('projects')}
          />
        </AnimatedSection>

        {/* 3. Trust Strip */}
        <AnimatedSection delay={0.1}>
          <TrustStrip />
        </AnimatedSection>

        {/* 4. Skills & Education Section */}
        <AnimatedSection>
          <SkillsEducationSection />
        </AnimatedSection>

        {/* 5. Featured AI Projects Section */}
        <AnimatedSection>
          <ProjectsSection />
        </AnimatedSection>

        {/* Marquee Banner Highlight */}
        <AnimatedSection>
          <MarqueeBanner />
        </AnimatedSection>

        {/* 7. Engineering Philosophy / Testimonials */}
        <AnimatedSection>
          <TestimonialSection />
        </AnimatedSection>

        {/* 8. Technical Insights & Articles */}
        <AnimatedSection>
          <UpdatesSection />
        </AnimatedSection>

        {/* 9. Contact Hub Section */}
        <AnimatedSection>
          <ContactSection onOpenDemo={() => setDemoModalOpen(true)} />
        </AnimatedSection>
      </main>

      {/* 10. Dark Modern Footer */}
      <Footer
        onOpenDemo={() => setDemoModalOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Demo Booking Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
