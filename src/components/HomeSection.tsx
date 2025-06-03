"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import FloatingIcons from "../components/FloatingIcons";
import ThemeToggle from "../components/ThemeToggle";

const HomeSection: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

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
    { text: "Contact Me", href: "#contact", icon: "📧" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15)_0%,_transparent_70%)]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(236,72,153,0.1)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_70%,_rgba(236,72,153,0.1)_0%,_transparent_60%)]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Theme Toggle (Top-right corner) */}
      <div className="fixed top-1.5 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <FloatingIcons />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center w-full px-4">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Aditya Kumar Tiwari
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl text-gray-700 dark:text-white mb-6 min-h-[40px] font-medium"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <span ref={typingRef}></span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl leading-relaxed"
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
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          {[
            {
              icon: <Github size={22} />,
              href: "https://github.com/adityakmrtiwari",
              label: "GitHub",
            },
            {
              icon: <Linkedin size={22} />,
              href: "https://linkedin.com/in/adityakmrtiwari/",
              label: "LinkedIn",
            },
            {
              icon: <Twitter size={22} />,
              href: "https://twitter.com",
              label: "Twitter",
            },
            {
              icon: <Mail size={22} />,
              href: "mailto:adityakmrtiwari@gmail.com",
              label: "Email",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-black/30 backdrop-blur-sm text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-300 transition-all duration-500"
              whileHover={{
                scale: 1.2,
                rotate: 8,
                boxShadow: "0 0 25px rgba(0, 123, 255, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
              <span className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-gray-800 dark:bg-black/90 text-white text-xs px-3 py-1.5 rounded-full transition-all duration-500">
                {item.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          {quickLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-black/50 backdrop-blur-sm hover:bg-gray-300 dark:hover:bg-black/70 rounded-full text-gray-700 dark:text-gray-300 font-medium transition-all duration-500 border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(0, 123, 255, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-300 transition-all duration-500 select-none"
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
