// components/CertificateSection.tsx
import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    name: 'IBM Machine Learning',
    issuer: 'IBM',
    date: 'June 2025',
    link: 'https://drive.google.com/file/d/12OJ96XaolTe0S8ptYhj5mDXqCyVwfZKE/view?usp=drive_link'
  },
  {
    id: 2,
    name: 'Full Stack Internship',
    issuer: 'Tecosys AI Pvt. Ltd.',
    date: 'Jun 2025',
    link: 'https://drive.google.com/file/d/1swzrxgMi54_brNnEscmkO13VvxsRJP5k/view?usp=sharing'
  },
  {
    id: 3,
    name: 'Fundamentals of Docker & Kubernetes',
    issuer: 'SCALAR Masterclass',
    date: 'May 2025',
    link: 'https://drive.google.com/file/d/1ZBN0jwzXzi0Xhebb9Ro_Kans5nyKykzT/view?usp=sharing'
  },
  {
    id: 4,
    name: 'Software Engineer Intern Role Certificate',
    issuer: 'HackerRank',
    date: 'Mar 2025',
    link: 'https://www.hackerrank.com/certificates/350caa02009f'
  },
  {
    id: 5,
    name: 'AI/ML Virtual Internship',
    issuer: 'AICTE – EduSkills & Google Developers',
    date: 'Mar 2025',
    link: 'https://drive.google.com/file/d/1xf5GCKfaLb3joqqmM3DxvjANbFcKkpE7/view?usp=drive_link'
  },
  {
    id: 6,
    name: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    date: '2025',
    link: 'https://drive.google.com/file/d/13BMKy1N6ovQRCgAWXichxIyZOWRJa2Lc/view?usp=sharing'
  },
  {
    id: 7,
    name: 'IBM DevOps and Software Engineering',
    issuer: 'IBM',
    date: '2025',
    link: 'https://drive.google.com/file/d/1a6cyQiScte2-Ayk8pVB0iG-wr_f_HJvE/view?usp=drive_link'
  },
  {
    id: 8,
    name: 'AWS Academy Graduate - Cloud Architecting',
    issuer: 'AWS Academy',
    date: 'Dec 2024',
    link: 'https://drive.google.com/file/d/1OJWc-8mG0ZdgnMM_K_8fgA3HTQiK1EFJ/view?usp=sharing'
  },
  {
    id: 9,
    name: 'Cloud Virtual Internship',
    issuer: 'AWS Academy – EduSkills',
    date: 'Dec 2024',
    link: 'https://drive.google.com/file/d/1QeH-L0A3dPGLXGqJ5kmIxeWdtUNxDJMn/view?usp=sharing'
  },
  {
    id: 10,
    name: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: 'Oct 2024',
    link: 'https://www.hackerrank.com/certificates/19c085ef4c7d'
  },
  {
    id: 11,
    name: 'Certificate of Excellence– Coincent Partnership Program',
    issuer: 'Robotics Club IIT Guwahati',
    date: 'Mar 2024',
    link: 'https://drive.google.com/file/d/1DGWV8q8I-7jVNHHGLT8R0TWq6v-CAorg/view?usp=sharing'
  },
  {
    id: 12,
    name: 'JavaScript (Basic)',
    issuer: 'HackerRank',
    date: 'May 2023',
    link: 'https://www.hackerrank.com/certificates/efbe629c8882'
  },
  {
    id: 13,
    name: 'Data Processing Specialist',
    issuer: 'AMCAT',
    date: '2023',
    link: 'https://www.myamcat.com/certificate/33489931/data-processing-specialist/211'
  },
  {
    id: 14,
    name: 'DSA in Java',
    issuer: 'Udemy',
    date: '2023',
    link: 'https://www.udemy.com/certificate/UC-515f2781-e092-4a3a-9d54-a546317701ae/'
  },
  {
    id: 15,
    name: 'Frontend Web Development',
    issuer: 'Microsoft Learn Student Ambassador',
    date: '2023',
    link: 'https://drive.google.com/file/d/1L5W4WxNthpocN9UbhVC7P-y6P3DKXBob/view?usp=sharing'
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
