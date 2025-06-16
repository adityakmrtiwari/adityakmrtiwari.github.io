import React from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  certificateUrl?: string; // Optional certificate link
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Full Stack Developer (Part-Time)",
      company: "Tecosys AI Private Limited",
      location: "Remote",
      period: "Jan 2025 – Jun 2025",
      description: [
        "Contributed to scalable web applications across multiple internal projects.",
        "Collaborated closely with the core team on backend APIs and dynamic frontend features.",
        "Followed best practices for code quality, debugging, and performance optimization.",
      ],
      skills: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "TypeScript",
        "Next.js",
        "Git",
        "REST APIs",
      ],
      certificateUrl: "https://drive.google.com/file/d/1o0EPrVoTjX9izuQwSf3uW3YWClA0Uo8N/view?usp=sharing",
    },
    {
      id: 2,
      title: "AI/ML Virtual Internship",
      company: "AICTE – Eduskills (Google for Developers)",
      location: "Remote",
      period: "Jan 2025 – Mar 2025",
      description: [
        "Completed a 10-week intensive internship focusing on machine learning and AI.",
        "Built projects leveraging Google tools and cloud-based ML infrastructure.",
        "Explored supervised learning, model evaluation, and practical applications.",
      ],
      skills: [
        "Python",
        "Scikit-learn",
        "Google Colab",
        "Machine Learning",
        "Data Analysis",
      ],
      certificateUrl: "https://drive.google.com/file/d/1xf5GCKfaLb3joqqmM3DxvjANbFcKkpE7/view?usp=sharing",
    },
    {
      id: 3,
      title: "Cloud Virtual Internship",
      company: "AICTE – Eduskills (AWS Academy)",
      location: "Remote",
      period: "Oct 2024 – Dec 2024",
      description: [
        "Engaged in AWS-focused cloud training with hands-on labs and certification-oriented modules.",
        "Explored core AWS services including EC2, S3, IAM, and Lambda.",
        "Completed capstone projects and weekly assessments aligned with cloud computing best practices.",
      ],
      skills: ["AWS", "Cloud Computing", "IAM", "EC2", "S3", "AWS Lambda"],
      certificateUrl: "https://drive.google.com/file/d/1QeH-L0A3dPGLXGqJ5kmIxeWdtUNxDJMn/view?usp=sharing",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 min-h-[80vh] bg-[radial-gradient(circle_at_50%_40%,_rgba(255,192,203,0.10)_0%,_rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_40%,_rgba(30,30,30,0.95)_0%,_rgba(10,10,10,1)_100%)]"
    >
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
                <div
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  />

                  <div
                    className={`w-full md:w-[calc(50%-40px)] ${
                      index % 2 === 0 ? "md:pr-0 md:pl-8" : "md:pl-0 md:pr-8"
                    }`}
                  >
                    <motion.div
                      className="group bg-white/80 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
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

                      {/* View Certificate Button */}
                      {exp.certificateUrl && (
                        <motion.a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-300 hover:underline font-medium"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                        >
                          🎓 View Certificate
                        </motion.a>
                      )}
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
