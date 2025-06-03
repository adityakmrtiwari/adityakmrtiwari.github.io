// components/EducationSection.tsx
import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const educations = [
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

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="space-y-10">
          {educations.map((edu, index) => (
            <motion.div key={edu.id}
              className="bg-white dark:bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border-l-6 border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 50 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-5">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                  <Calendar size={18} className="mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
              <div className="mb-5">
                <div className="font-medium text-gray-800 dark:text-gray-300 text-lg">{edu.institution}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 italic">{edu.location}</div>
              </div>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
