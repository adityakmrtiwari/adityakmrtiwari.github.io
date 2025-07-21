import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificateSection from './components/CertificateSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickLinksBar from './components/QuickLinksBar';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function App() {
  const [showStickyQuickLinks, setShowStickyQuickLinks] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    document.title = 'Aditya Kumar Tiwari';
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyQuickLinks(!entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-x-hidden">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="relative">
        {[
          { id: 'home', Component: HomeSection },
          { id: 'about', Component: AboutSection },
          { id: 'education', Component: EducationSection },
          { id: 'projects', Component: ProjectsSection },
          { id: 'skills', Component: SkillsSection },
          { id: 'certificates', Component: CertificateSection },
          { id: 'experience', Component: ExperienceSection },
          { id: 'contact', Component: ContactSection },
        ].map(({ id, Component }) => (
          <motion.section
            key={id}
            id={id}
            variants={sectionVariants}
            
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            
          >
            <Component />
          </motion.section>
        ))}
      </main>

      <Footer />
      <QuickLinksBar visible={showStickyQuickLinks} />
    </div>
  );
}

export default App;
