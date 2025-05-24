import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: [
        'Led the development of the company\'s flagship SaaS product using React and TypeScript.',
        'Architected and implemented a component library that increased development velocity by 35%.',
        'Mentored junior developers and conducted code reviews to maintain code quality.',
        'Collaborated with design and product teams to create intuitive user experiences.'
      ],
      skills: ['React', 'TypeScript', 'Redux', 'SASS', 'Jest', 'CI/CD']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'Remote',
      period: 'Mar 2019 - Dec 2021',
      description: [
        'Developed and maintained multiple client projects using the MERN stack.',
        'Implemented RESTful APIs and optimized database queries for improved performance.',
        'Built responsive web applications with cross-browser compatibility.',
        'Integrated third-party services and payment gateways for e-commerce platforms.'
      ],
      skills: ['MongoDB', 'Express', 'React', 'Node.js', 'AWS', 'Git']
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'Creative Web Agency',
      location: 'Boston, MA',
      period: 'Jun 2017 - Feb 2019',
      description: [
        'Created responsive websites for clients across various industries.',
        'Maintained and updated existing client websites and applications.',
        'Collaborated with designers to implement pixel-perfect UI/UX designs.',
        'Optimized web performance and SEO for improved search rankings.'
      ],
      skills: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'WordPress', 'PHP']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Work <span className="text-blue-500 dark:text-blue-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and career highlights.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/30"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className="relative z-10 mb-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline circle */}
                  <motion.div 
                    className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  />
                  
                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? 'md:pr-0 md:pl-8' : 'md:pl-0 md:pr-8'
                  }`}>
                    <motion.div 
                      className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-0">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-500 dark:text-blue-400">
                          <Calendar size={16} className="mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="font-medium text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.location}
                        </div>
                      </div>
                      
                      <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-400 space-y-1">
                        {exp.description.map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.span 
                            key={skill} 
                            className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
