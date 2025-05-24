import React, { useState } from 'react';
import { Calendar, Award, Book } from 'lucide-react';
import { motion } from 'framer-motion';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

const EducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certificates'>('education');
  
  const educations: Education[] = [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      location: 'Cambridge, MA',
      period: '2015 - 2017',
      description: 'Specialized in software engineering and web technologies. Thesis on optimizing web application performance.'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Information Technology',
      institution: 'State University',
      location: 'New York, NY',
      period: '2011 - 2015',
      description: 'Focused on programming, database management, and system analysis. Graduated with honors.'
    }
  ];
  
  const certificates: Certificate[] = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Oct 2022',
      link: 'https://example.com/cert'
    },
    {
      id: 2,
      name: 'Professional Full-Stack Engineer',
      issuer: 'Meta',
      date: 'Aug 2022',
      link: 'https://example.com/cert'
    },
    {
      id: 3,
      name: 'React Nanodegree',
      issuer: 'Udacity',
      date: 'Mar 2022',
      link: 'https://example.com/cert'
    },
    {
      id: 4,
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'Dec 2021',
      link: 'https://example.com/cert'
    },
    {
      id: 5,
      name: 'TypeScript Certification',
      issuer: 'Microsoft',
      date: 'Sep 2021',
      link: 'https://example.com/cert'
    },
    {
      id: 6,
      name: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: 'Jul 2021',
      link: 'https://example.com/cert'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">
              Education & <span className="text-blue-500 dark:text-blue-400">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic background and professional certifications.
            </p>
          </motion.div>
          
          {/* Tabs */}
          <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex p-1 bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-inner">
              <motion.button
                onClick={() => setActiveTab('education')}
                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all text-sm md:text-base
                  ${
                    activeTab === 'education'
                      ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md shadow-blue-300/30'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-pressed={activeTab === 'education'}
              >
                <Book size={18} />
                <span>Education</span>
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('certificates')}
                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all text-sm md:text-base
                  ${
                    activeTab === 'certificates'
                      ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md shadow-blue-300/30'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-pressed={activeTab === 'certificates'}
              >
                <Award size={18} />
                <span>Certificates</span>
              </motion.button>
            </div>
          </motion.div>
          
          {/* Education List */}
          {activeTab === 'education' && (
            <div className="space-y-10">
              {educations.map((edu, index) => (
                <motion.div 
                  key={edu.id} 
                  className="bg-white dark:bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border-l-6 border-blue-500 cursor-default transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: 'spring', stiffness: 50 }}
                  whileHover={{ y: -8, boxShadow: '0 25px 35px rgba(59,130,246,0.25)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-5">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-0">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                      <Calendar size={18} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <div className="font-medium text-gray-800 dark:text-gray-300 text-lg">
                      {edu.institution}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {edu.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-base">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
          
          {/* Certificates Grid */}
          {activeTab === 'certificates' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <motion.div 
                  key={cert.id} 
                  className="bg-white dark:bg-gray-900/60 backdrop-blur-sm p-7 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 60 }}
                  whileHover={{ y: -6, boxShadow: '0 20px 30px rgba(59,130,246,0.3)' }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {cert.name}
                      </h3>
                      <div className="text-gray-700 dark:text-gray-400 mb-1 font-medium">
                        {cert.issuer}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 font-light italic">
                        <Calendar size={16} className="mr-1" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-blue-600 dark:text-blue-400"
                    >
                      <Award size={42} />
                    </motion.div>
                  </div>
                  
                  {cert.link && (
                    <motion.div 
                      className="mt-5"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 }}
                    >
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                        whileHover={{ x: 6 }}
                      >
                        View Certificate →
                      </motion.a>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
