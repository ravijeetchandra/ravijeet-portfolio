"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Sparkles size={20} className="text-primary" />
            <span className="text-lg font-bold gradient-text">Ravijeet Chandra</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} Ravijeet Chandra. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-6"
          >
            <span className="text-gray-500 text-sm">Lead Data Scientist</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">AI Engineer</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">Enterprise Architect</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}