"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Enterprise Retail Recommendation Engine",
    description:
      "Built large-scale enterprise recommendation and optimization system covering hundreds of thousands of retail stores across international markets.",
    tech: ["Python", "PySpark", "Databricks", "ML"],
    impact:
      "Scaled to 400,000+ stores across Vietnam & Philippines markets",
    metrics: "400K+ Stores",
  },
  {
    title: "GenAI Enterprise Insights Platform",
    description:
      "Developed enterprise GenAI pipeline for automated business insights generation and intelligent summarization using LLMs.",
    tech: ["LLMs", "LangChain", "OpenAI APIs", "RAG"],
    impact: "Automated insights generation for enterprise decision-making",
    metrics: "Enterprise Scale",
  },
  {
    title: "Autonomous Structured Data AI Agent",
    description:
      "Designed autonomous AI workflows capable of analyzing structured banking datasets and answering business queries intelligently.",
    tech: ["LangGraph", "AutoGen", "LangChain"],
    impact: "Intelligent data analysis and query response system",
    metrics: "Autonomous",
  },
  {
    title: "VPE Optimization Engine",
    description:
      "Built upgrade prioritization engine using eligibility logic, business constraints, and optimization frameworks.",
    tech: ["PySpark", "Databricks", "Optimization Systems"],
    impact: "Data-driven upgrade prioritization for retail operations",
    metrics: "Optimization",
  },
  {
    title: "Customer Intelligence & CLTV Modeling",
    description:
      "Developed customer lifetime value prediction systems and customer intelligence frameworks for strategic retail decision-making.",
    tech: ["Machine Learning", "SQL", "Python"],
    impact: "Strategic customer insights for retail analytics",
    metrics: "CLTV Prediction",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Projects & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Enterprise-grade AI systems solving complex business challenges at
            scale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="gradient-border h-full p-6 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                      index % 5 === 0
                        ? "from-blue-500/20 to-cyan-500/20"
                        : index % 5 === 1
                        ? "from-purple-500/20 to-pink-500/20"
                        : index % 5 === 2
                        ? "from-orange-500/20 to-red-500/20"
                        : index % 5 === 3
                        ? "from-green-500/20 to-emerald-500/20"
                        : "from-indigo-500/20 to-violet-500/20"
                    } text-gray-600 dark:text-gray-300 border border-black/5 dark:border-white/10`}
                  >
                    {project.metrics}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-gray-100/50 dark:bg-white/5 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-colors">
                      <Github size={18} className="text-gray-500 dark:text-gray-400" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100/50 dark:bg-white/5 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-colors">
                      <ExternalLink size={18} className="text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-gray-100/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-black/5 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight size={16} className="text-accent-purple" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{project.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}