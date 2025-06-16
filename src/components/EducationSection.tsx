// components/EducationSection.tsx
import React from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const educations = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Kalinga Institute of Industrial Technology",
    location: "Bhubaneswar, Odisha",
    period: "Sep 2022 – Present",
    description:
      "Current undergraduate student with a GPA of 8.67. Focused on software development, data structures, algorithms, and project-based learning.",
    achievements: [
      "Developed full-stack and ML projects, including a traffic predictor and real-time chat app.",
      "Worked part-time as a developer in tech organizations and college societies.",
      "Organized technical events and participated in GSSoC.",
    ],
  },
  {
    id: 2,
    degree: "12th Higher Secondary (Science Stream)",
    institution: "St. John Secondary School",
    location: "Buxar, Bihar",
    period: "Jun 2020 – Feb 2022",
    description:
      "Completed higher secondary education with 78.6%, focusing on Physics, Chemistry, and Mathematics.",
    achievements: [
      "Secured distinction in Mathematics and Chemistry.",
      "Participated in state-level science quiz competitions.",
      "Recognized for academic improvement and leadership in class activities.",
    ],
  },
  {
    id: 3,
    degree: "Matriculation (10th Standard)",
    institution: "DAV Public School",
    location: "Buxar, Bihar",
    period: "Apr 2009 – Feb 2020",
    description:
      "Completed schooling with 92.2%, establishing a strong academic foundation.",
    achievements: [
      "School topper in Mathematics, Science, and English.",
      "Participated in various cultural and sports events, winning accolades.",
      "Awarded “Best Student” for consistent academic excellence.",
    ],
  },
];

const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
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
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="space-y-10">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="group bg-white/80 dark:bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] focus:outline-none"
              initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 50 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              tabIndex={0}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-5">
                <h3 className="text-2xl font-bold text-black dark:text-white">
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
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.description}
              </p>
              {edu.achievements && (
                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-gray-200 mb-2">
                    Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
