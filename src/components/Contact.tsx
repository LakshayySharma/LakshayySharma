"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 relative bg-dark-surface/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-neon-cyan font-mono text-sm">&gt;</span>
            <span className="text-gray-500 font-mono text-sm">
              contact --secure
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Initialize Connection
          </h2>
          <p className="text-gray-400 mt-4 font-mono text-sm max-w-md mx-auto">
            Ready to collaborate on your next project? Let&apos;s build
            something exceptional together.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-card border border-dark-border rounded-lg overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-border bg-dark-surface/50">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-4 text-gray-500 text-xs font-mono">
              secure://connect
            </span>
          </div>

          <div className="p-8">
            {/* Contact methods */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {/* Email */}
              <motion.a
                href="mailto:ls199575@gmail.com"
                className="group flex items-center gap-4 p-4 bg-dark-surface rounded-lg border border-dark-border hover:border-neon-cyan/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-dark-card rounded-lg group-hover:bg-neon-cyan/10 transition-colors">
                  <Mail className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono">EMAIL</span>
                  <p className="text-sm text-gray-300 group-hover:text-neon-cyan transition-colors">
                    ls199575@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/lakshay-sharma-76b487131/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-dark-surface rounded-lg border border-dark-border hover:border-neon-cyan/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-dark-card rounded-lg group-hover:bg-neon-cyan/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono">
                    LINKEDIN
                  </span>
                  <p className="text-sm text-gray-300 group-hover:text-neon-cyan transition-colors">
                    Connect →
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+917011615049"
                className="group flex items-center gap-4 p-4 bg-dark-surface rounded-lg border border-dark-border hover:border-neon-cyan/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-dark-card rounded-lg group-hover:bg-neon-cyan/10 transition-colors">
                  <Send className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono">PHONE</span>
                  <p className="text-sm text-gray-300 group-hover:text-neon-cyan transition-colors">
                    +91 7011615049
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Main CTA */}
            <motion.a
              href="mailto:ls199575@gmail.com?subject=Project%20Inquiry"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="block w-full p-6 bg-gradient-to-r from-neon-cyan/10 to-neon-teal/10 rounded-lg border border-neon-cyan/30 text-center group hover:border-neon-cyan/60 transition-all"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-lg font-mono text-white group-hover:text-neon-cyan transition-colors">
                  Send Transmission
                </span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5 text-neon-cyan" />
                </motion.div>
              </div>
              <p className="text-sm text-gray-500 font-mono mt-2">
                Let&apos;s discuss your project
              </p>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/lakshay-sharma-76b487131/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-neon-cyan transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-neon-cyan transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:ls199575@gmail.com"
              className="text-gray-500 hover:text-neon-cyan transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-600 font-mono text-xs">
            © {new Date().getFullYear()} Lakshay Sharma. All systems
            operational.
          </p>
          <p className="text-gray-700 font-mono text-xs mt-2">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
