"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Brain } from "lucide-react";

const rotatingSubtitles = [
  "Building AI Systems at Enterprise Scale",
  "Generative AI • Recommendation Systems • Intelligent Automation",
  "LLM Applications • AI Products • Scalable Machine Learning",
  "Turning Complex Business Problems into AI Solutions",
  "Enterprise AI, Retail Intelligence & Autonomous Systems",
];

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const subtitle = rotatingSubtitles[currentSubtitle];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index <= subtitle.length) {
        setDisplayText(subtitle.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentSubtitle((prev) => (prev + 1) % rotatingSubtitles.length);
            setIsTyping(true);
            setDisplayText("");
          }, 2000);
        }, 500);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [currentSubtitle]);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-gray-300">Available for AI Projects</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-gray-400">Hi, I'm</span>
            <br />
            <span className="gradient-text">Ravijeet Chandra</span>
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-gray-300 mb-6">
            Lead Data Scientist{" "}
            <span className="text-gray-500">|</span> Generative AI Engineer{" "}
            <span className="text-gray-500">|</span> Enterprise AI Architect
          </h2>

          <div className="h-8 mb-8">
            <p className="text-lg text-gray-400 flex items-center gap-2">
              <Brain size={18} className="text-accent-purple" />
              <span className="min-h-[24px]">
                {displayText}
                <span
                  className={`inline-block w-0.5 h-5 bg-primary ml-0.5 ${
                    isTyping ? "animate-pulse" : "opacity-0"
                  }`}
                />
              </span>
            </p>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
            Lead Data Scientist with 8+ years of experience designing scalable AI
            systems, recommendation engines, enterprise analytics platforms, and
            Generative AI solutions across global organizations.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-colors"
            >
              <Download size={18} />
              Download Resume
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/profile.jpeg"
                alt="Ravijeet Chandra"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)] rounded-full" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-charcoal dark:bg-white/10 rounded-xl border border-white/10 dark:border-white/5 flex items-center justify-center"
            >
              <Brain className="text-accent-purple" size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-charcoal dark:bg-white/10 rounded-xl border border-white/10 dark:border-white/5 flex items-center justify-center"
            >
              <Sparkles className="text-primary" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}