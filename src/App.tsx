import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import CertificateSection from './components/CertificateSection';
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import QuickLinksBar from './components/QuickLinksBar';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

function App() {
  const [showStickyQuickLinks, setShowStickyQuickLinks] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });
  const homeRef = useRef(null);

  useEffect(() => {
    document.title = "Aditya Kumar Tiwari | Portfolio";
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setShowStickyQuickLinks(!entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative">
        <motion.section
          id="home"
          ref={homeRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-screen"
        >
          <HomeSection />
        </motion.section>

        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-screen"
        >
          <AboutSection />
        </motion.section>

        <motion.section
          id="education"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-screen"
        >
          <EducationSection />
        </motion.section>

        <motion.section
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-screen"
        >
          <ProjectsSection />
        </motion.section>

        <motion.section
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-screen"
        >
          <SkillsSection />
        </motion.section>

        <motion.section
          id="certificates"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-screen"
        >
          <CertificateSection />
        </motion.section>

        <motion.section
          id="experience"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-screen"
        >
          <ExperienceSection />
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-screen"
        >
          <ContactSection />
        </motion.section>
      </main>
      <Footer />
      <QuickLinksBar visible={showStickyQuickLinks} />
    </div>
  );
}

export default App;
