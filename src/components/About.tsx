"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Award, Globe } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "8+ Years Experience", value: "Enterprise AI" },
  { icon: Award, label: "Current Role", value: "Lead Data Scientist" },
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Globe, label: "Global Impact", value: "International Teams" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Architecting{" "}
            <span className="gradient-text">Intelligent Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Bridging the gap between cutting-edge AI research and real-world
            business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="gradient-border p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Based in India, I currently serve as{" "}
                <span className="text-white font-medium">
                  Lead Data Scientist at Dr. Martens
                </span>
                , where I lead enterprise AI and advanced analytics initiatives
                focused on scalable business impact, intelligent automation, and
                next-generation AI systems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Previously at{" "}
                <span className="text-white font-medium">
                  Fractal Analytics
                </span>
                , I worked on large-scale AI implementations across international
                markets including Vietnam and Philippines, building solutions
                that scaled to hundreds of thousands of retail stores.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <item.icon size={20} className="text-primary mb-2" />
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white">
              Core Expertise
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Generative AI & LLM Applications",
                  desc: "Building enterprise-grade GenAI solutions, RAG systems, and autonomous AI workflows",
                },
                {
                  title: "Recommendation & Optimization Systems",
                  desc: "Designing scalable recommendation engines and optimization frameworks",
                },
                {
                  title: "Enterprise Analytics Platforms",
                  desc: "Creating end-to-end data pipelines and analytics solutions",
                },
                {
                  title: "MLOps & Production AI",
                  desc: "Deploying and scaling AI systems with robust MLOps practices",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-white/5">
              <p className="text-gray-300 mb-4">
                I bring a strong mix of technical expertise and business impact
                orientation, passionate about intelligent systems and continuous
                learning.
              </p>
              <p className="text-gray-400 text-sm">
                Interested in the future of AI agents, autonomous systems, and
                enterprise GenAI.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}