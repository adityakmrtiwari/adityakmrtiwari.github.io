import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import debounce from 'lodash.debounce';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const homeSection = document.getElementById('home');
    const homeBottom = homeSection?.getBoundingClientRect().bottom ?? 0;
    setIsHomeVisible(homeBottom > 0);
    setIsScrolled(window.scrollY > 10);

    const scrollY = window.scrollY;
    document.querySelectorAll('section[id]').forEach((section) => {
      const el = section as HTMLElement;
      const sectionTop = el.offsetTop - 100;
      const sectionHeight = el.offsetHeight;
      const id = el.getAttribute('id') || '';
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActiveSection(id);
      }
    });
  }, []);

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 50;
      const elementPos = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPos, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomeVisible ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      } ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-3'
      }`}
    >
      {/* ThemeToggle absolutely positioned */}
      <div className="absolute top-0.5 right-4 z-[60]">
        <div className="p-1 border border-gray-600 rounded-md bg-gray-900/80 backdrop-blur-md">
          <ThemeToggle />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex items-center justify-between">
          {/* Left Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.a>

          {/* Centered Navigation */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href.substring(1))}
                className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-md absolute w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href.substring(1))}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    whileHover={{ x: 10 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
