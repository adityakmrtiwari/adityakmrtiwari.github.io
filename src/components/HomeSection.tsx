"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import FloatingIcons from "../components/FloatingIcons";
// import QuickLinksBar from './QuickLinksBar';

const HomeSection: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const [showInlineQuickLinks, setShowInlineQuickLinks] = React.useState(true);

  useEffect(() => {
    if (!typingRef.current) return;

    const words = [
      "Software Architect",
      "Tech Innovator",
      "Full Stack Developer",
      "Creative Coder",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typingRef.current!.textContent = currentWord.substring(
          0,
          charIndex - 1
        );
        charIndex--;
      } else {
        typingRef.current!.textContent = currentWord.substring(
          0,
          charIndex + 1
        );
        charIndex++;
      }

      let typeSpeed = isDeleting ? 60 : 120;

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    type();
  }, []);

  const quickLinks = [
    { text: "Education", href: "#education", icon: "🎓" },
    { text: "Experience", href: "#experience", icon: "💼" },
    { text: "Projects", href: "#projects", icon: "📁" },
    { text: "Skills", href: "#skills", icon: "⚙" },
    { text: "Certificates", href: "#certificates", icon: "📜" },
    { text: "Contact Me", href: "#contact", icon: "��" },
  ];

  React.useEffect(() => {
    const section = document.getElementById('home');
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setShowInlineQuickLinks(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen py-20 overflow-hidden bg-[radial-gradient(circle_at_50%_40%,_rgba(255,192,203,0.10)_0%,_rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_40%,_rgba(30,30,30,0.95)_0%,_rgba(10,10,10,1)_100%)]"
    >
      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <FloatingIcons />
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto relative z-10 text-center flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400 tracking-tight"
            style={{ WebkitTextFillColor: 'transparent' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Aditya Kumar Tiwari
          </motion.h1>
          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl mb-8 min-h-[40px] font-medium text-black dark:text-white"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <span ref={typingRef}></span>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl leading-relaxed text-black dark:text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            I develop scalable, high-performance software solutions that transform
            complex challenges into elegant, user-centric applications. Committed
            to clean code and thoughtful design, I deliver impactful results that
            align seamlessly with business objectives.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
          >
            {[
              {
                icon: <Github size={24} />,
                href: 'https://github.com/adityakmrtiwari',
                label: 'GitHub',
              },
              {
                icon: <Linkedin size={24} />,
                href: 'https://linkedin.com/in/adityakmrtiwari/',
                label: 'LinkedIn',
              },
              {
                icon: <Twitter size={24} />,
                href: 'https://twitter.com',
                label: 'Twitter',
              },
              {
                icon: <Mail size={24} />,
                href: 'mailto:adityakmrtiwari@gmail.com',
                label: 'Email',
              },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-14 h-14 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md text-black dark:text-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white dark:hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.icon}
                <span className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-gray-800/90 dark:bg-black/90 text-white text-xs px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap backdrop-blur-md">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          {showInlineQuickLinks && (
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            >
              {quickLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="group flex items-center justify-center gap-2 px-4 py-2 bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-full text-black dark:text-gray-400 font-medium transition-all duration-500 border border-white/10 dark:border-white/5 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400 group-hover:border-white dark:group-hover:border-white/30"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 8px 25px rgba(0, 123, 255, 0.15)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-cyan-300 transition-all duration-500 select-none"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-base mb-2">Scroll Down</span>
          <ArrowDown size={26} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HomeSection;
