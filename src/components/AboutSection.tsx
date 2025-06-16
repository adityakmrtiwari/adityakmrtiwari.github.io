import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="relative py-20 min-h-[80vh] flex items-center justify-center bg-[radial-gradient(circle_at_50%_40%,_rgba(255,192,203,0.10)_0%,_rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_40%,_rgba(30,30,30,0.95)_0%,_rgba(10,10,10,1)_100%)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400 tracking-tight">
              About <span className="text-blue-500 dark:text-blue-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Get to know more about me, my background, and what I do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <motion.div 
                className="aspect-square overflow-hidden rounded-2xl shadow-xl border-2 border-transparent transition-all duration-300 group-hover:border-white dark:group-hover:border-white/30"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98, borderColor: 'white' }}
              >
                <img 
                  src="/Aditya.png"
                  alt="Profile photo of Aditya Kumar Tiwari" 
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </motion.div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400">
                Who am I?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies.
                With a strong foundation in both frontend and backend development, I create
                responsive, user-friendly applications that solve real-world problems.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I specialize in React, Express, Node.js, Next.js, and TypeScript, constantly
                expanding my knowledge to stay at the forefront of web development. I'm dedicated
                to writing clean, maintainable code and creating intuitive user experiences.
              </p>

              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400 mb-4">
                My Coding Profiles
              </h3>

              <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-8">
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
                  <motion.li 
                    key={profile.name}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 transition-all duration-300 focus:outline-none"
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
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="/Aditya_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-black/40 backdrop-blur-md border-2 border-transparent hover:border-white dark:hover:border-white/30 rounded-xl shadow-lg text-black dark:text-white font-semibold transition-all duration-300 focus:outline-none"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
