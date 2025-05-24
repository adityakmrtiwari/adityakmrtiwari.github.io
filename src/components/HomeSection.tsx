'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react';
import FloatingIcons from '../components/FloatingIcons'; // ✅ updated import path

const HomeSection: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typingRef.current) return;

    const words = ["Software Developer"];
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

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
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
    { text: "About Me", href: "#about", icon: "👨‍💻" },
    { text: "My Skills", href: "#skills", icon: "⚡" },
    { text: "Projects", href: "#projects", icon: "🚀" },
    { text: "Contact", href: "#contact", icon: "📧" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-black px-4"
    >
      {/* Floating animated icons */}
      <FloatingIcons />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 select-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Aditya Kumar Tiwari
          </span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 min-h-[40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span ref={typingRef}></span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I build exceptional digital experiences with clean, efficient code and a focus on
          performance and user experience. Specializing in modern web technologies and creating
          scalable solutions.
        </motion.p>

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
              className="px-6 py-3 bg-gray-900/10 dark:bg-white/10 backdrop-blur-sm rounded-full text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-900/20 dark:hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                {item.icon} {item.text}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="https://github.com/adityakmrtiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/adityakmrtiwari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter size={24} />
          </motion.a>
          <motion.a
            href="mailto:adityakmrtiwari@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center select-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <span className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-gray-600 dark:text-gray-400" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
