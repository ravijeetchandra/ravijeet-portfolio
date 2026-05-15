"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-white/5 dark:border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold tracking-tight gradient-text"
          >
            RC
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? "0%" : "100%",
        }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                y: mobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-gray-300 hover:text-foreground flex items-center gap-2"
            >
              <ChevronRight size={20} className="text-primary" />
              {item.label}
            </motion.a>
          ))}
          <div className="mt-8">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </>
  );
}