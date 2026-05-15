"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Future of Enterprise Generative AI",
    excerpt:
      "Exploring how GenAI is transforming enterprise operations and what it means for AI architects.",
    category: "AI Strategy",
    readTime: "8 min read",
    url: "https://www.linkedin.com/in/ravijeetchandra/recent-activity/articles/",
  },
  {
    title: "Designing Production-Ready RAG Systems",
    excerpt:
      "A comprehensive guide to building robust RAG systems that scale for enterprise workloads.",
    category: "Technical",
    readTime: "12 min read",
    url: "https://www.linkedin.com/in/ravijeetchandra/recent-activity/articles/",
  },
  {
    title: "AI Agents and Autonomous Workflows",
    excerpt:
      "Understanding the shift from deterministic to autonomous AI systems in enterprise settings.",
    category: "AI Research",
    readTime: "10 min read",
    url: "https://www.linkedin.com/in/ravijeetchandra/recent-activity/articles/",
  },
  {
    title: "Building Scalable Recommendation Engines",
    excerpt:
      "Lessons learned from building recommendation systems that handle millions of users.",
    category: "ML Engineering",
    readTime: "15 min read",
    url: "https://www.linkedin.com/in/ravijeetchandra/recent-activity/articles/",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Thought Leadership
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Insights & <span className="gradient-text">Perspectives</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Sharing knowledge on AI architecture, enterprise solutions, and the
            future of intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="gradient-border h-full p-6 hover:bg-white/5 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/20">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-400 mb-4">{article.excerpt}</p>

                <div className="flex items-center gap-2 text-primary">
                  <span className="text-sm font-medium">Read Article</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/ravijeetchandra/recent-activity/articles/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
          >
            <BookOpen size={18} />
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
}
