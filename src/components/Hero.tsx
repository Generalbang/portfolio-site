"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";
import { LogoTilt } from './CursorTilt';

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const name = "OJO DARE J.";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-deep-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6 flex justify-center md:justify-start">
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="inline-block hover:text-deep-blue transition-colors cursor-default"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2 
            variants={slideUp}
            className="text-xl md:text-2xl text-gray-300 font-medium mb-4"
          >
            Full-Stack Dev | Turning Ideas into Scalable Web Apps
          </motion.h2>

          <motion.p 
            variants={slideUp}
            className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            Hey, I'm <span className="text-white font-medium">Codrex</span>—hustling from Nigeria, ready for remote gigs that challenge me. 
            Specializing in Next.js, MERN stack, and crafting buttery smooth user experiences.
          </motion.p>

          <motion.div variants={slideUp}>
            <a 
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-200"
            >
              See My Work
            </a>
          </motion.div>
        </motion.div>

        {/* Avatar Image */}
        <LogoTilt>
        <motion.div 
          className="flex-1 relative rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-deep-blue to-transparent rounded-full opacity-20 animate-pulse" />
            <Image
              src="/avatar-placeholder.png"
              alt="Codrex Avatar"
              fill
              className="object-cover rounded-full border-2 border-white/10 shadow-2xl"
              priority
            />
          </div>
        </motion.div>
        </LogoTilt>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="hidden md:block md:absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
