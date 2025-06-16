import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="p-1.5 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white dark:hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-lg md:text-xl text-gray-800 dark:text-gray-200"
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
