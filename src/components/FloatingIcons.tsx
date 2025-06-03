"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiPython,
} from "react-icons/si";
import { FaAws, FaNodeJs } from "react-icons/fa";

interface FloatingIconProps {
  icon: React.ReactNode;
  x: number;
  y: number;
  delay: number;
  size?: number;
  color: string;
}

const FloatingIcon = ({
  icon,
  x,
  y,
  delay,
  size = 40,
  color,
}: FloatingIconProps) => (
  <motion.div
    className="absolute pointer-events-none z-0"
    initial={{ opacity: 0, scale: 0.7, x, y }}
    animate={{
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.3, 1],
      x: [x - 10, x + 10, x - 10],
      y: [y - 10, y + 10, y - 10],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
      opacity: { duration: 3 },
      scale: { duration: 3 },
    }}
  >
    <div className="relative">
      {icon}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 dark:from-cyan-500/20 to-purple-500/20 blur-xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </motion.div>
);

export default function FloatingIcons() {
  const floatingIcons = [
    { icon: <SiNextdotjs size={45} className="text-gray-500 dark:text-white/60" />, x: -150, y: -120, delay: 1, color: "rgba(255,255,255,0.5)" },
    { icon: <SiTypescript size={45} className="text-blue-500 dark:text-cyan-400/60" />, x: 160, y: -90, delay: 1.5, color: "rgba(59,130,246,0.5)" },
    { icon: <SiJavascript size={45} className="text-yellow-500 dark:text-yellow-400/60" />, x: -130, y: 80, delay: 2, color: "rgba(247,223,30,0.5)" },
    { icon: <SiTailwindcss size={45} className="text-teal-500 dark:text-teal-400/60" />, x: 140, y: 90, delay: 2.5, color: "rgba(6,182,212,0.5)" },
    { icon: <FaNodeJs size={45} className="text-green-500 dark:text-green-400/60" />, x: -180, y: -50, delay: 3, color: "rgba(51,153,51,0.5)" },
    { icon: <SiMongodb size={45} className="text-green-600 dark:text-green-500/60" />, x: 180, y: -30, delay: 3.5, color: "rgba(71,162,72,0.5)" },
    { icon: <SiReact size={45} className="text-blue-400 dark:text-cyan-300/60" />, x: -90, y: 130, delay: 4, color: "rgba(97,218,251,0.5)" },
    { icon: <SiPython size={45} className="text-blue-600 dark:text-blue-400/60" />, x: 90, y: 130, delay: 4.5, color: "rgba(55,118,171,0.5)" },
    { icon: <FaAws size={45} className="text-orange-500 dark:text-orange-400/60" />, x: 0, y: -140, delay: 5, color: "rgba(255,153,0,0.5)" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      <div className="relative w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] md:w-[800px] md:h-[800px]">
        {floatingIcons.map((icon, index) => (
          <FloatingIcon key={index} {...icon} />
        ))}
      </div>
    </div>
  );
}
