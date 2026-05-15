"use client";

import { motion } from "framer-motion";
import { Brain, Box, Database, Cloud, Code } from "lucide-react";

const skillCategories = [
  {
    title: "Artificial Intelligence & ML",
    icon: Brain,
    darkBorder: "dark:border-blue-500/20",
    lightBorder: "border-blue-200",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLM Applications",
      "RAG Systems",
      "NLP",
      "Recommendation Systems",
      "Predictive Modeling",
      "Optimization Systems",
      "Forecasting",
      "Statistical Modeling",
    ],
  },
  {
    title: "AI Frameworks & Libraries",
    icon: Box,
    darkBorder: "dark:border-purple-500/20",
    lightBorder: "border-purple-200",
    skills: [
      "LangChain",
      "LangGraph",
      "AutoGen",
      "OpenAI APIs",
      "LlamaIndex",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "Data Engineering & Big Data",
    icon: Database,
    darkBorder: "dark:border-orange-500/20",
    lightBorder: "border-orange-200",
    skills: [
      "PySpark",
      "Spark",
      "Databricks",
      "SQL",
      "ETL Pipelines",
      "Feature Engineering",
      "Big Data Processing",
    ],
  },
  {
    title: "MLOps & Deployment",
    icon: Cloud,
    darkBorder: "dark:border-green-500/20",
    lightBorder: "border-green-200",
    skills: [
      "MLflow",
      "Model Deployment",
      "AI System Scaling",
      "Production AI Systems",
      "API Development",
      "Monitoring & Optimization",
    ],
  },
  {
    title: "Programming & Cloud",
    icon: Code,
    darkBorder: "dark:border-indigo-500/20",
    lightBorder: "border-indigo-200",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Azure",
      "Git",
      "Docker",
      "Vector Databases",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
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
            Technical Arsenal
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit built over 8+ years of solving complex AI
            challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="group"
            >
              <div className="gradient-border h-full p-6 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 text-sm rounded-lg bg-gray-100/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border ${category.lightBorder} ${category.darkBorder} cursor-default hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}