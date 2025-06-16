import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-10 mb-10">
          <div className="mb-8 md:mb-0 max-w-md">
            <a
              href="#home"
              className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
            >
              Portfolio
            </a>
            <p className="mt-3 text-gray-400 dark:text-gray-300 leading-relaxed">
              Specializing in creating beautiful, functional websites and applications
              using modern web technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-gray-300 dark:text-gray-400">Links</h4>
              <ul className="space-y-3">
                {['about', 'projects', 'contact'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-white transition-colors duration-300"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-gray-300 dark:text-gray-400">Connect</h4>
              <ul className="space-y-3">
                {[
                  { name: 'GitHub', url: 'https://www.linkedin.com/in/adityakmrtiwari/ ' },
                  { name: 'LinkedIn', url: 'https://github.com/adityakmrtiwari' },
                  // { name: 'Twitter', url: 'https://twitter.com' },
                  // { name: 'Medium', url: 'https://medium.com' },
                ].map(({ name, url }) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-white transition-colors duration-300"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Aditya. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center justify-center p-3 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//           </motion.a>