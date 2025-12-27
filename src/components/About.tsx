"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={slideUp}
            className="text-3xl md:text-4xl font-bold font-display mb-8 text-white"
          >
            About Me
          </motion.h2>

          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <motion.p variants={slideUp}>
              I'm <span className="text-white font-medium">Ojo Dare</span> (aka <span className="text-white font-medium">Codrex</span>), a passionate developer who doesn't just write code, I solve real-world problems. 
              My journey started with a curiosity of how things work, and now I'm building tools that help people get things done, 
              like my latest side project: job trackers, which help keep track or record of jobs instead of using messy spreadsheets and other relevant experiences.
            </motion.p>

            <motion.p variants={slideUp}>
              I thrive in the <span className="text-deep-blue font-medium">JavaScript ecosystem</span> for its ability to create fast, scalable frontends, 
              paired with <span className="text-white font-medium">Node.js</span> for a solid backend foundation. 
              Efficiency and performance are my top priorities. Also, i have the ability to quickly pick up new technologies and apply them to solve real-world problems. 
              I'm also a quick learner and have a strong sense of curiosity, which allows me to stay up-to-date with the latest trends and technologies. 
            </motion.p>

            <motion.p variants={slideUp}>
              Based in Nigeria, I'm constantly pushing my boundaries. I'm currently open to remote roles 
              worldwide where I can contribute to ambitious projects and grow alongside a talented team.
              <span className="block mt-4 text-white font-medium">Let's build something epic together.</span>
            </motion.p>
            <motion.div variants={slideUp} className="pt-6">
              <a 
                href="/resume.pdf" 
                download="OJO DARE_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white font-medium group"
              >
                <span>Download Resume</span>
                <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
