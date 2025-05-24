import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Laptop,
  FileCode,
  Cloud,
  GitBranch,
  Terminal,
  GitCommit,
  Server,
  Cpu,
  Box,
  Zap,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.FC<{ size?: number | string; className?: string }>;
  skills: { name: string; icon?: React.FC<{ size?: number | string; className?: string }> }[];
}

const fadeSlideVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillItemVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'C', icon: Cpu },
        { name: 'C++', icon: Cpu },
        { name: 'Java', icon: Cpu },
        { name: 'Python', icon: Zap },
        { name: 'Bash Scripting', icon: Terminal },
        { name: 'HTML/CSS', icon: FileCode },
        { name: 'JavaScript', icon: Code2 },
        { name: 'TypeScript', icon: Code2 },
      ],
    },
    {
      title: 'CS Fundamentals',
      icon: Laptop,
      skills: [
        { name: 'Data Structures & Algorithms', icon: GitBranch },
        { name: 'Automata Theory & Formal Language', icon: Box },
        { name: 'Object Oriented Programming', icon: GitCommit },
        { name: 'Operating System', icon: Server },
        { name: 'Database Management System', icon: Database },
        { name: 'Computer Networks', icon: Cloud },
        { name: 'Machine Learning', icon: Zap },
        { name: 'Artificial Intelligence', icon: Zap },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: FileCode,
      skills: [
        { name: 'React.js', icon: Code2 },
        { name: 'Next.js', icon: Code2 },
        { name: 'Node.js', icon: Server },
        { name: 'NumPy', icon: Zap },
        { name: 'Pandas', icon: Box },
        { name: 'scikit-learn', icon: Zap },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS', icon: Cloud },
        { name: 'Azure', icon: Cloud },
        { name: 'Google Cloud', icon: Cloud },
        { name: 'Docker', icon: Box },
        { name: 'Kubernetes', icon: Box },
        { name: 'GitHub', icon: GitBranch },
      ],
    },
    {
      title: 'Databases & Systems',
      icon: Database,
      skills: [
        { name: 'MySQL', icon: Database },
        { name: 'MongoDB', icon: Database },
        { name: 'Linux', icon: Terminal },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Box,
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'VSCode', icon: Code2 },
        { name: 'Jupyter Notebook', icon: Terminal },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          variants={fadeSlideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & <span className="text-blue-500 dark:text-blue-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I've worked with a variety of technologies and tools throughout my journey as a developer. Here's a breakdown of my technical expertise:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="bg-white dark:bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-[1.03] cursor-default"
                variants={fadeSlideVariant}
              >
                <div className="flex items-center gap-3 mb-6">
                  <CategoryIcon className="text-blue-500 dark:text-blue-400" size={26} />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 select-none transition duration-300 hover:scale-105 hover:text-blue-500 dark:hover:text-blue-400"
                        variants={skillItemVariant}
                      >
                        {SkillIcon && <SkillIcon size={18} className="text-blue-500 dark:text-blue-400" />}
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mt-16 flex-wrap"
          variants={fadeSlideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { text: 'Education', href: '#education' },
            { text: 'Experience', href: '#experience' },
            { text: 'View Projects', href: '#projects' },
            { text: 'Skills', href: '#skills' },
            { text: 'Certificates', href: '#certificates' },
            { text: 'Contact Me', href: '#contact' },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="px-6 py-2 bg-gray-900/10 dark:bg-white/10 backdrop-blur-sm rounded-full text-gray-800 dark:text-gray-200 font-medium transition-colors duration-300 hover:bg-gray-900/20 dark:hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.text}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
