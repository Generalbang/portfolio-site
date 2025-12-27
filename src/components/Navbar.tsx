"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Assuming you have Lucide icons, otherwise use alternates
import { cn } from "@/lib/utils";
import { fadeIn, hoverScale, menuVariants } from "@/lib/animations";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
          scrolled ? "glass-nav py-3" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold font-display tracking-tight text-white">
            Codrex<span className="text-deep-blue">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                whileHover="hover"
                variants={hoverScale}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="https://drive.google.com" // Update with your actual Google Drive link
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-deep-blue text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My CV
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50 relative"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={28} className="transition-transform duration-200 rotate-90" />
            ) : (
              <Menu size={28} className="transition-transform duration-200" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-2xl font-medium text-white hover:text-deep-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
