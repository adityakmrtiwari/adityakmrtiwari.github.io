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
      "Software Developer",
      "Tech Enthusiast",
      "Full Stack Engineer",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typingRef.current!.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingRef.current!.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 40 : 90;

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 600;
      }

      setTimeout(type, typeSpeed);
    };

    type();
  }, []);

  const quickLinks = [
    { text: "About Me", href: "#about", icon: "👨‍💻" },
    { text: "My Skills", href: "#skills", icon: "⚡" },
    { text: "Projects", href: "#projects", icon: "🚀" },
    { text: "Contact", href: "#contact", icon: "📧" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-[#0f0f0f] dark:to-black px-4"
    >
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 pointer-events-none">
        <div className="absolute w-96 h-96 bg-teal-400 rounded-full top-10 left-1/3 mix-blend-multiply filter blur-3xl animate-pulse opacity-30" />
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full top-32 left-2/3 mix-blend-multiply filter blur-3xl animate-pulse opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center justify-center w-full">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 bg-clip-text text-transparent">
            Aditya Kumar Tiwari
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-6 min-h-[40px] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span ref={typingRef}></span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I transform ideas into immersive web experiences—crafted with clean
          code, performance-driven design, and a modern tech stack.
        </motion.p>

        {/* Quick Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {quickLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-full text-gray-900 dark:text-white font-medium hover:bg-white/50 hover:dark:bg-white/20 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              <span className="flex items-center gap-2">
                {item.icon} {item.text}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[
            {
              icon: <Github size={20} />,
              href: "https://github.com/adityakmrtiwari",
            },
            {
              icon: <Linkedin size={20} />,
              href: "https://linkedin.com/in/adityakmrtiwari/",
            },
            { icon: <Twitter size={20} />, href: "https://twitter.com" },
            {
              icon: <Mail size={20} />,
              href: "mailto:adityakmrtiwari@gmail.com",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:dark:text-blue-400 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 select-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-base md:text-lg mb-1">Scroll Down</span>
          <ArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HomeSection;
