import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaStripe, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiAew,
  SiRedux,
  SiExpress,
  SiSwagger,
  SiChartdotjs,
} from "react-icons/si";

// Tech icon mapping
const techIconMap: Record<string, JSX.Element> = {
  React: <FaReact className="inline-block mr-1" />,
  "Node.js": <FaNodeJs className="inline-block mr-1" />,
  Stripe: <FaStripe className="inline-block mr-1" />,
  TypeScript: <SiTypescript className="inline-block mr-1" />,
  MongoDB: <SiMongodb className="inline-block mr-1" />,
  Firebase: <SiFirebase className="inline-block mr-1" />,
  "Material UI": <SiMui className="inline-block mr-1" />,
  "Next.js": <SiNextdotjs className="inline-block mr-1" />,
  PostgreSQL: <SiPostgresql className="inline-block mr-1" />,
  AWS: <SiAew className="inline-block mr-1" />,
  Redux: <SiRedux className="inline-block mr-1" />,
  Express: <SiExpress className="inline-block mr-1" />,
  Swagger: <SiSwagger className="inline-block mr-1" />,
  "Chart.js": <SiChartdotjs className="inline-block mr-1" />,
  JavaScript: <FaGithub className="inline-block mr-1" />, // Placeholder
  CSS: <FaGithub className="inline-block mr-1" />, // Placeholder
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  category: string;
}

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    // {
    //   id: 1,
    //   title: 'Premium Notes App',
    //   description: 'A secure premium notes-taking app with Google and OTP login, plus payment integration using Stripe.',
    //   image: '/images/notes-app.png',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Firebase'],
    //   liveUrl: 'https://your-notes-app.live',
    //   repoUrl: 'https://github.com/adityakmrtiwari/premium-notes-app',
    //   category: 'Full Stack',
    // },
    // {
    //   id: 2,
    //   title: 'Social Media Analytics',
    //   description: 'Dashboard showing trending posts, top users, and real-time updates from social media APIs.',
    //   image: '/images/social-analytics.png',
    //   technologies: ['React', 'Node.js', 'Chart.js', 'Express', 'TypeScript'],
    //   repoUrl: 'https://github.com/adityakmrtiwari/social-media-analytics',
    //   category: 'Analytics',
    // },
    {
      id: 1,
      title: "Real-Time Chat App",
      description:
        "A real-time chat application using Socket.IO with multiple rooms and user presence tracking.",
      image: "/images/chat-app.png",
      technologies: ["Node.js", "Socket.IO", "Express", "HTML/CSS"],
      repoUrl: "https://github.com/adityakmrtiwari/iChatApp",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Traffic Prediction Model",
      description:
        "A machine learning-based model that predicts traffic volume based on time, weather, and previous traffic data.",
      image: "/images/traffic-predictor.png",
      technologies: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
      repoUrl: "https://github.com/adityakmrtiwari/traffic-prediction-model",
      category: "Machine Learning",
    },
    {
      id: 3,
      title: "Bookstore App",
      description:
        "A CRUD-based bookstore app with JWT login authentication and MongoDB integration.",
      image: "/images/bookstore-app.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://bookstore-psi-lime.vercel.app/",
      repoUrl: "https://github.com/adityakmrtiwari/Bookstore",
      category: "Full Stack",
    },
    {
      id: 4,
      title: "Weather Tracker",
      description:
        "Real-time weather dashboard with API integration and responsive charts.",
      image: "/images/weather-app.png",
      technologies: ["React", "API", "Material UI"],
      liveUrl: "https://whether-app-h44e.vercel.app/",
      repoUrl: "https://github.com/adityakmrtiwari/WhetherApp",
      category: "Frontend",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Personal developer portfolio to showcase projects and resume with responsive design.",
      image: "/images/portfolio.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://adityakmrtiwari-github-io.vercel.app/",
      repoUrl: "https://github.com/adityakmrtiwari/adityakmrtiwari.github.io",
      category: "Frontend",
    },
    {
      id: 6,
      title: "Rock Paper Scissors Game",
      description:
        "A fun interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript.",
      image: "/images/game.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      liveUrl: "https://rock-paper-scissors-eta-swart.vercel.app/",
      repoUrl: "https://github.com/adityakmrtiwari/Rock-Paper-Scissors",
      category: "Frontend",
    },
    {
      id: 7,
      title: "Task Manager API",
      description:
        "A RESTful API for managing tasks with features like user authentication, CRUD operations, and JWT-based security.",
      image: "/images/task-api.png",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      repoUrl: "https://github.com/adityakmrtiwari/task-manager-api", // replace with your actual repo link
      category: "Backend",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const skillVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
    hover: { scale: 1.1, color: "#3b82f6" },
  };

  return (
    <section
      id="projects"
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
              My{" "}
              <span className="text-blue-500 dark:text-blue-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Check out some of my recent work and personal projects.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold border-2 border-transparent hover:border-white dark:hover:border-white/30 ${
                  activeFilter === category
                    ? "bg-blue-500 text-white"
                    : "bg-white/80 dark:bg-black/40 backdrop-blur-md text-gray-700 dark:text-gray-300"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="h-56 overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-300 transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                      {project.repoUrl && (
                        <motion.a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-300 transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={`${project.id}-${tech}`}
                        className="text-xs flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full cursor-default select-none"
                        custom={idx}
                        variants={skillVariant}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      >
                        {techIconMap[tech] ?? null}
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/adityakmrtiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-black/40 backdrop-blur-md border-2 border-transparent hover:border-white dark:hover:border-white/30 rounded-lg shadow-lg text-gray-800 dark:text-white font-medium transition-all duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub size={18} />
              <span>View More on GitHub</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
// Note: Ensure to replace the image paths and URLs with actual paths and links to your projects.
