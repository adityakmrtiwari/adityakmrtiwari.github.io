'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        w-10 h-10 flex items-center justify-center rounded-full
        bg-white/80 dark:bg-black/40 backdrop-blur-md
        shadow-lg hover:shadow-xl border-2
        ${isDark ? 'hover:border-white border-transparent' : 'hover:border-black border-transparent'}
        transition-all duration-300
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle Theme"
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`text-gray-800 dark:text-gray-100 transition-colors duration-300`}
      >
        {isDark ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
