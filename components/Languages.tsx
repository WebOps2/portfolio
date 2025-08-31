// src/components/sections/LanguagesMonoGrid.tsx
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
    SiC,
    SiDocker,
    SiGo,
    SiHtml5,
    SiJavascript,
    SiOpenjdk,
    SiPython,
    SiTypescript
} from "react-icons/si";

type Lang = { name: string; Icon: React.ComponentType<{ size?: number; className?: string }> };

const LANGS: Lang[] = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python",     Icon: SiPython },
  { name: "Go",         Icon: SiGo },
  { name: "Java",       Icon: SiOpenjdk },
  { name: "HTML",       Icon: SiHtml5 },
  { name: "C",          Icon: SiC },
  { name: "Docker",    Icon: SiDocker }
];

export default function LanguagesMonoGrid() {
    const reduce = useReducedMotion();
    const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const container: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: EASE,
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14, scale: reduce ? 1 : 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: EASE },
    },
  };
  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 pb-16">
        {/* Flexbox container with wrap */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center items-start gap-x-16 gap-y-14"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {LANGS.map(({ name, Icon }) => (
            <motion.div key={name} 
            className="flex flex-col items-center justify-center text-center"
            variants={item}
            >
              {/* Icon container with better centering */}
              <div
                className="flex h-24 w-24 items-center justify-center
                           text-slate-700 hover:text-slate-900 transition-colors"
                aria-hidden
              >
                <Icon size={72} className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)]" />
              </div>

              {/* Label with consistent centering */}
              <span className="mt-3 font-display text-[#4B4B4B] text-2xl md:text-[28px] leading-none text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}