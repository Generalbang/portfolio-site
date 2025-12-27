"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/animations";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss, SiPostgresql, SiPrisma, SiExpress } from "react-icons/si";
import { TbBrandFramerMotion } from 'react-icons/tb';

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-pink-500" },
  {name: "express.js", icon: SiExpress, color: "text-blue-500"},
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
  { name: "Prisma", icon: SiPrisma, color: "text-white" },
  

];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={slideUp}
            className="text-3xl md:text-4xl font-bold font-display mb-12 text-center text-white"
          >
            My Tech Stack
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={slideUp}
                whileHover={{ 
                  y: -8, 
                  rotate: 2,
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
                className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/5 hover:border-deep-blue/30 transition-colors cursor-pointer group"
              >
                <div className={`text-5xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                  <skill.icon />
                </div>
                <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
