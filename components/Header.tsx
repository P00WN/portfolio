"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const navItems = [
  { href: "#home", label: "~ Start" },
  { href: "#about", label: "~ About" },
  { href: "#skills", label: "~ Skills" },
  { href: "#timeline", label: "~ Werdegang" },
  { href: "#certificates", label: "~ Zertifikate" },
  { href: "#contact", label: "~ Kontakt" },
];

export default function Header({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollProgress = typeof window !== "undefined" ? window.scrollY / (document.body.scrollHeight - window.innerHeight) : 0;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 glass glow-border" : "py-4 bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-border overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-primary font-mono text-lg font-bold cursor-pointer hover:text-gradient-cyan transition-all" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Terminal size={20} />
          <span className="hidden sm:inline">malthe@portfolio</span>
          <span className="sm:hidden">mv</span>
          <span className="text-highlight">~</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => handleNavClick(item.href)} className="font-mono text-sm text-foreground/70 hover:text-primary px-3 py-2 rounded transition-colors">
              {item.label}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 text-foreground/70 hover:text-primary rounded transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-foreground/70 hover:text-primary"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground/70 hover:text-primary" aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
            className="lg:hidden glass mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <button key={item.href} onClick={() => handleNavClick(item.href)} className="font-mono text-sm text-foreground/70 hover:text-primary px-3 py-2.5 rounded text-left transition-colors">
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}