// components/CertificateSection.tsx
import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const certificates = [
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

const CertificateSection: React.FC = () => {
  return (
    <section
      id="certificates"
      className="relative py-20 min-h-[80vh] bg-[radial-gradient(circle_at_50%_40%,_rgba(255,192,203,0.10)_0%,_rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_40%,_rgba(30,30,30,0.95)_0%,_rgba(10,10,10,1)_100%)]"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400 tracking-tight">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My verified certificates and accomplishments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group bg-white/80 dark:bg-black/40 backdrop-blur-md p-7 rounded-2xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 60 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <div className="text-gray-700 dark:text-gray-400 mb-1 font-medium">{cert.issuer}</div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 italic">
                    <Calendar size={16} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-pink-400 dark:text-cyan-300"
                >
                  <Award size={42} />
                </motion.div>
              </div>

              {cert.link && (
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-5 text-black dark:text-white hover:underline text-sm font-medium transition-colors duration-300"
                  whileHover={{ x: 6 }}
                >
                  View Certificate →
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
