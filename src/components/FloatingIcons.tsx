import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiExpress, SiMongodb,
  SiTailwindcss, SiGit, SiGithub, SiPostman
} from 'react-icons/si';

const icons = [
  { Icon: SiMongodb, baseColor: '#4DB33D', x: 0, y: -280 },
  { Icon: SiReact, baseColor: '#61DAFB', x: 240, y: -180 },
  { Icon: SiPython, baseColor: '#4584B6', x: 280, y: 0 },
  { Icon: SiTypescript, baseColor: '#2F74C0', x: 240, y: 180 },
  { Icon: SiExpress, baseColor: '#333333', x: 0, y: 280 },
  { Icon: SiJavascript, baseColor: '#F0DB4F', x: -240, y: 180 },
  { Icon: SiTailwindcss, baseColor: '#06B6D4', x: -280, y: 0 },
  { Icon: SiGit, baseColor: '#F1502F', x: -240, y: -180 },
  { Icon: SiGithub, baseColor: '#24292E', x: -140, y: -260 },
  { Icon: SiPostman, baseColor: '#FF6C37', x: 140, y: -260 }
];


const FloatingIcons: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  // Detect system theme using media query
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full z-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,192,203,0.04)_0%,_rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(circle_at_50%_40%,_rgba(30,30,30,0.10)_0%,_rgba(10,10,10,0)_100%)]">
      {icons.map(({ Icon, baseColor, x, y }, index) => {
        const adjustedColor = isDark ? baseColor : `${baseColor}CC`; // 80% opacity in light
        const adjustedOpacity = isDark ? 0.24 : 0.30;
        const hoverShadow = isDark
          ? '0 0 24px 4px rgba(34,211,238,0.35), 0 0 8px 2px rgba(59,130,246,0.25)'
          : '0 0 24px 4px rgba(236,72,153,0.25), 0 0 8px 2px rgba(168,85,247,0.18)';

        return (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [adjustedOpacity, adjustedOpacity + 0.05, adjustedOpacity],
              scale: [1, 1.08, 1],
              x: [x, x * 1.04, x],
              y: [y, y * 1.04, y],
            }}
            transition={{
              duration: 9,
              delay: index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.2,
              opacity: 0.85,
              filter: `drop-shadow(${hoverShadow})`,
              zIndex: 10
            }}
            style={{ zIndex: 1 }}
          >
            <Icon size={54} style={{ color: adjustedColor, opacity: adjustedOpacity, transition: 'all 0.3s' }} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
