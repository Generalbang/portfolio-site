"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/animations";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
        }
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
          setTimeout(() => setStatus("idle"), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-deep-blue/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={slideUp}
            className="text-3xl md:text-4xl font-bold font-display text-white mb-4"
          >
            Let's Build Something Epic
          </motion.h2>
          <motion.p 
            variants={slideUp}
            className="text-gray-400 max-w-lg mx-auto"
          >
            Have a project in mind or just want to chat tech? Drop me a message. 
            I'm always open to discussing new ideas and opportunities.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={slideUp}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-deep-blue">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">Email Me</h3>
                <p className="text-gray-400">js.dev.ojodare@gmail.com</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-medium">Connect with me</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/generalbang", platform: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/codrex", platform: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com/0x_codrex?s=09", platform: "Twitter" }
                ].map((Social, i) => (
                  <a 
                    key={i}
                    href={Social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${Social.platform} profile`}
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-deep-blue hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <Social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form 
            ref={form}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={slideUp}
            className="space-y-4"
            onSubmit={sendEmail}
          >
            <div>
              <input 
                type="text" 
                name="user_name"
                required
                placeholder="What's your name?" 
                className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-deep-blue focus:ring-1 focus:ring-deep-blue transition-all"
              />
            </div>
            <div>
              <input 
                type="email" 
                name="user_email"
                required
                placeholder="Your email address" 
                className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-deep-blue focus:ring-1 focus:ring-deep-blue transition-all"
              />
            </div>
            <div>
              <textarea 
                rows={4}
                name="message"
                required
                placeholder="Tell me about your project..." 
                className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-deep-blue focus:ring-1 focus:ring-deep-blue transition-all resize-none"
              />
            </div>
            <button 
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-deep-blue text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Failed, Try Again" : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
