import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/10 dark:bg-black/30 backdrop-blur-md border-b-2 border-transparent hover:border-white dark:hover:border-white/30 transition-all duration-300"

    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="pl-2 md:pl-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-cyan-400 transition-colors duration-300"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Aditya<span className='text-black/50 dark:text-white/50  '>.dev</span>
        </motion.a>
        <div className="pr-2  flex items-center">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
