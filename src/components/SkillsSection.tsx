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
        { name: 'High Performance Computing', icon: Zap },
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
    <section
      id="skills"
      className="relative py-20 min-h-[80vh] bg-[radial-gradient(circle_at_50%_40%,_rgba(255,192,203,0.10)_0%,_rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_40%,_rgba(30,30,30,0.95)_0%,_rgba(10,10,10,1)_100%)]"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400 tracking-tight">
            Skills
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My technical skills and tools.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="group bg-white/80 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <CategoryIcon className="text-blue-500 dark:text-blue-400" size={26} />
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 select-none transition duration-300 hover:scale-105 hover:text-blue-500 dark:hover:text-blue-400"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default SkillsSection;