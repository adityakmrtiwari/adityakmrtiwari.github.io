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
    <section id="certificates" className="py-20 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My verified certificates and accomplishments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div key={cert.id}
              className="bg-white dark:bg-gray-900/60 backdrop-blur-sm p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 60 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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
                  className="text-blue-600 dark:text-blue-400"
                >
                  <Award size={42} />
                </motion.div>
              </div>

              {cert.link && (
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-5 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
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
