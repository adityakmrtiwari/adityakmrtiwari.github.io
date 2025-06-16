import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50 dark:bg-black"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              About <span className="text-blue-500 dark:text-blue-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know more about me, my background, and what I do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/Aditya.png"
                  alt="Profile photo of Aditya Kumar Tiwari" 
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Who am I?
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies.
                With a strong foundation in both frontend and backend development, I create
                responsive, user-friendly applications that solve real-world problems.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I specialize in React, Express, Node.js, Next.js, and TypeScript, constantly
                expanding my knowledge to stay at the forefront of web development. I'm dedicated
                to writing clean, maintainable code and creating intuitive user experiences.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                My Coding Profiles
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    name: 'LeetCode',
                    url: 'https://leetcode.com/adityakmrtiwari/',
                    icon: '/icons/leetcode.png',
                  },
                  {
                    name: 'CodeChef',
                    url: 'https://www.codechef.com/users/adityakmrtiwar',
                    icon: '/icons/codechef.png',
                  },
                  {
                    name: 'Codeforces',
                    url: 'https://codeforces.com/profile/aaditya_',
                    icon: '/icons/codeforces.png',
                  },
                  {
                    name: 'HackerRank',
                    url: 'https://www.hackerrank.com/adityakmrtiwari',
                    icon: '/icons/hackerrank.png',
                  },
                ].map((profile) => (
                  <li key={profile.name}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <img
                        src={profile.icon}
                        alt={profile.name}
                        className="w-6 h-6 transition-transform duration-300"
                      />
                      <span className="font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
                        {profile.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="/ADITYA_CV R4.pdf"
                download
                className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto select-none"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
