"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Download } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ravijeetchandra/" },
  { icon: Github, label: "GitHub", href: "https://github.com/ravijeetchandra" },
  { icon: Mail, label: "Email", href: "mailto:ravijeet.chandra@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Interested in discussing AI projects, collaboration opportunities, or
            just want to chat about the future of AI? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gradient-border p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="gradient-border p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <link.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{link.label}</p>
                      <p className="text-sm text-gray-500">Click to connect</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="gradient-border p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Download Resume
              </h3>
              <p className="text-gray-400 mb-4">
                Get a detailed overview of my experience and projects.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent-purple text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Download size={18} />
                Download PDF
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}