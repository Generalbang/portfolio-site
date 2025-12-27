"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideUp, staggerContainer } from "@/lib/animations";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Job Tracker",
    description: "A sleek tool I built to track job appllications. It handles auth, CRUD, and search like a boss. Never lose track of an application again.",
    tech: ["Next.js", "TypeScript","PostgreSQL","neondb", "Prisma", "Tailwind"],
    image: "/job-tracker.png",
    link: "https://job-tracker-v-one.vercel.app",
    github: "https://github.com/Generalbang/job-tracker"
  },
  {
    title: "Patient medical Dashboard",
    description: "A medical dashboard for doctors to manage their patients and appointments.",
    tech: ["React", "Tailwind", "Netlify", "React icons"],
    image: "/patient-dashboard.png",
    link: "#",
    github: "https://github.com/Generalbang/FED-Patient-board"
  },
  {
    title: "Portfolio v1",
    description: "My previous portfolio site built with React. Simple, clean, but ready for this upgrade to Next.js 14.",
    tech: ["React", "CSS3", "Vercel"],
    image: "/portfolio-v1.png",
    link: "#",
    github: "https://github.com/Generalbang/Portfolio-v1"
  },
  {
    title: "",
    description: "",
    tech: ["", "", "", ""],
    image: "",
    link: "#",
    github: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={slideUp}
            className="text-3xl md:text-4xl font-bold font-display mb-12 flex items-center gap-4 text-white"
          >
            Featured Projects <span className="h-px flex-1 bg-white/10"></span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={slideUp}
                className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-deep-blue/50 transition-colors"
                whileHover={{ y: -10 }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-deep-blue/10 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-deep-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium px-2 py-1 bg-white/5 text-gray-300 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-deep-blue transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
