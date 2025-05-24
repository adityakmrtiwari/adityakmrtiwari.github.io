'use client';

import { motion } from 'framer-motion';
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiReact, SiPython
} from 'react-icons/si';
import { FaAws, FaNodeJs } from 'react-icons/fa';

interface FloatingIconProps {
  icon: React.ReactNode;
  x: number;
  y: number;
  delay: number;
  size?: number;
}

const FloatingIcon = ({
  icon,
  x,
  y,
  delay,
  size = 48,
}: FloatingIconProps) => (
  <motion.div
    className="absolute pointer-events-none"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: 1,
      x: [x - 15, x + 15, x - 15],
      y: [y - 15, y + 15, y - 15],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      opacity: { duration: 1 },
      scale: { duration: 1 },
    }}
  >
    {icon}
  </motion.div>
);

export default function FloatingIcons() {
  const floatingIcons = [
    { icon: <SiNextdotjs size={48} className="text-black/40 dark:text-white/40" />, x: 60, y: 60, delay: 1 },
    { icon: <SiTypescript size={48} className="text-[#3178C6]/40" />, x: -60, y: 60, delay: 2 },
    { icon: <SiJavascript size={48} className="text-[#F7DF1E]/40" />, x: 0, y: 60, delay: 3 },
    { icon: <SiTailwindcss size={48} className="text-[#06B6D4]/40" />, x: 90, y: -90, delay: 3.5 },
    { icon: <FaNodeJs size={48} className="text-[#339933]/40" />, x: -90, y: -90, delay: 4 },
    { icon: <SiMongodb size={48} className="text-[#47A248]/40" />, x: 40, y: -120, delay: 4.5 },
    { icon: <SiReact size={48} className="text-[#61DAFB]/40" />, x: -40, y: -120, delay: 5 },
    { icon: <SiPython size={48} className="text-[#3776AB]/40" />, x: 120, y: 0, delay: 5.5 },
    { icon: <FaAws size={48} className="text-[#232F3E]/40" />, x: 0, y: -150, delay: 6.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {floatingIcons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}
    </div>
  );
}
