import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaGraduationCap, FaCode, FaTools, FaAward, FaBriefcase, FaEnvelope } from 'react-icons/fa';

interface QuickLinksBarProps {
  visible: boolean;
}

const quickLinks = [
  { href: '#home', icon: <FaHome />, label: 'Home' },
  { href: '#about', icon: <FaUser />, label: 'About' },
  { href: '#education', icon: <FaGraduationCap />, label: 'Education' },
  { href: '#projects', icon: <FaCode />, label: 'Projects' },
  { href: '#skills', icon: <FaTools />, label: 'Skills' },
  { href: '#certificates', icon: <FaAward />, label: 'Certificates' },
  { href: '#experience', icon: <FaBriefcase />, label: 'Experience' },
  { href: '#contact', icon: <FaEnvelope />, label: 'Contact' },
];

const QuickLinksBar: React.FC<QuickLinksBarProps> = ({ visible }) => {
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      { 
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`fixed bottom-2 left-0 right-0 z-50 transition-all duration-500 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} w-full`}
        >
          <div className="flex justify-center gap-4 md:gap-6 bg-gradient-to-r from-blue-500/90 to-indigo-500/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-md py-1.5 px-4 md:px-6 border-t border-white/10 dark:border-white/5 shadow-lg">
            {quickLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`group relative flex flex-col items-center gap-0.5 px-1.5 md:px-2 py-1 transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-white dark:text-cyan-400'
                    : 'text-white/70 dark:text-gray-400 hover:text-white dark:hover:text-cyan-300'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(item.href.substring(1));
                  }
                }}
              >
                <span className="text-lg md:text-xl">{item.icon}</span>
                <span className="hidden md:inline text-[10px] font-medium">{item.label}</span>
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white dark:bg-cyan-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickLinksBar; 