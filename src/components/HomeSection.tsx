"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronsDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import FloatingIcons from "../components/FloatingIcons";

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
      const nextText = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

      typingRef.current!.textContent = nextText;
      charIndex += isDeleting ? -1 : 1;

      let typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 1200);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 400);
        return;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 600);
  }, []);

  const quickLinks = [
    { text: "Education", href: "#education", icon: "🎓" },
    { text: "Experience", href: "#experience", icon: "💼" },
    { text: "Projects", href: "#projects", icon: "📁" },
    { text: "Skills", href: "#skills", icon: "⚙" },
    { text: "Certificates", href: "#certificates", icon: "📜" },
    { text: "Contact Me", href: "#contact", icon: "✉️" },
  ];

  useEffect(() => {
    const section = document.getElementById("home");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowInlineQuickLinks(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen py-10 overflow-hidden bg-[radial-gradient(circle_at_50%_40%,_rgba(255,192,203,0.10)_0%,_rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_40%,_rgba(30,30,30,0.95)_0%,_rgba(10,10,10,1)_100%)]"
    >
       {/* Floating Icons */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <FloatingIcons />
      </div>
      {/* <div className="container mx-auto px-4  md:px-6"> */}
        <div className="max-w-6xl mx-auto relative z-10 text-center flex flex-col items-center justify-center min-h-screen px-2 sm:px-4 py-8 sm:py-12">

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400 tracking-tight"
            style={{ WebkitTextFillColor: "transparent" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Hello, I'm Aditya Kumar Tiwari
          </motion.h1>

          <motion.div
            className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 min-h-[40px] font-medium text-black dark:text-white flex flex-wrap items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <span>I'm&nbsp;</span>
            <span className="relative inline-flex items-center min-h-[1.5em]">
              <span ref={typingRef} className="whitespace-nowrap"></span>
              <span className="absolute left-full top-1/2 -translate-y-1/2 animate-blink text-blue-600 dark:text-blue-400">
                !
              </span>
            </span>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-md mb-10 max-w-3xl leading-relaxed text-black dark:text-gray-400 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            I develop scalable, high-performance software solutions that transform complex challenges into elegant, user-centric applications. Committed to clean code and thoughtful design, I deliver impactful results that align seamlessly with business objectives.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            {[
              { icon: <Github size={20} />, href: "https://github.com/adityakmrtiwari", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/adityakmrtiwari/", label: "LinkedIn" },
              { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
              { icon: <Mail size={20} />, href: "mailto:adityakmrtiwari@gmail.com", label: "Email" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md text-black dark:text-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white dark:hover:border-white/30"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.icon}
                <span className="absolute -top-10 opacity-0 group-hover:opacity-100 text-white dark:text-gray-200 text-xs px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {showInlineQuickLinks && (
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-10 px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              {quickLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="w-auto px-4 py-2 flex items-center justify-center gap-2 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md text-black dark:text-gray-400 font-medium shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-white dark:hover:border-white/30"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </motion.div>
          )}

          <motion.a
            href="#about"
            className="group mt-2 mb-2 w-10 h-10 rounded-full flex items-center justify-center bg-white/80 dark:bg-black/40 backdrop-blur-md border-2 border-transparent hover:border-black dark:hover:border-white text-black dark:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-black dark:text-white transition-all duration-300 whitespace-nowrap">
              Scroll to About
            </span>
            <motion.div
              className="flex  flex-col items-center"
              animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronsDown size={20} />
            </motion.div>
          </motion.a>
        </div>
      {/* </div> */}
    </section>
  );
};

export default HomeSection;
