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
                  src="/Aditya.png"  // update this path to your actual image file
                  alt="Profile photo of Aditya Kumar Tiwari" 
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              
              {/* <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-500 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg select-none">
                1+ Years
              </div> */}
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
              
              <dl className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <dt className="font-bold text-gray-900 dark:text-white mb-2">Name:</dt>
                  <dd className="text-gray-600 dark:text-gray-400">Aditya Kumar Tiwari</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-900 dark:text-white mb-2">Email:</dt>
                  <dd className="text-gray-600 dark:text-gray-400">adityakmrtiwari@gmail.com</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-900 dark:text-white mb-2">Location:</dt>
                  <dd className="text-gray-600 dark:text-gray-400">India</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-900 dark:text-white mb-2">Availability:</dt>
                  <dd className="text-gray-600 dark:text-gray-400">Available for hire</dd>
                </div>
              </dl>
              
              <a
                href="/ADITYA_CV R4.pdf"  // update this path to your actual resume file
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
