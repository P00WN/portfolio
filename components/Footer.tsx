"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { href: "#home", label: "Start" },
    { href: "#about", label: "Über Mich" },
    { href: "#skills", label: "Fähigkeiten" },
    { href: "#timeline", label: "Werdegang" },
    { href: "#certificates", label: "Zertifikate" },
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/malthe-vorbeck",
      label: "LinkedIn",
      icon: <Linkedin size={18} />,
    },
    {
      href: "https://xing.com/profile/malthe_vorbeck",
      label: "Xing",
      icon: <span className="text-sm font-bold font-mono">X</span>,
    },
    {
      href: "https://github.com/P0WN",
      label: "GitHub",
      icon: <Github size={18} />,
    },
    {
      href: "mailto:vorbeck@malthe.info",
      label: "E-Mail",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <footer className="relative border-t border-border">
      {/* Top wave */}
      <svg
        className="w-full h-16 text-surface"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,48C672,53,768,75,864,74.7C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
        />
      </svg>

      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: About */}
            <div>
              <h3 className="font-mono text-lg font-bold text-accent-cyan mb-4">
                {"<"}MaltheVorbek{"/>"}
              </h3>
              <p className="text-sm text-foreground/60 mb-4">
                Junior Datacenter Operations Engineer mit Leidenschaft für
                IT-Infrastruktur und Cybersecurity.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-foreground/60 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h3 className="font-mono text-sm font-bold text-accent-cyan mb-4 uppercase tracking-wider">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-accent-cyan transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Legal */}
            <div>
              <h3 className="font-mono text-sm font-bold text-accent-cyan mb-4 uppercase tracking-wider">
                Rechtliches
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/impressum"
                    className="text-sm text-foreground/60 hover:text-accent-cyan transition-colors"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="/impressum#datenschutz"
                    className="text-sm text-foreground/60 hover:text-accent-cyan transition-colors"
                  >
                    Datenschutzerklärung
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h3 className="font-mono text-sm font-bold text-accent-cyan mb-4 uppercase tracking-wider">
                Kontakt
              </h3>
              <div className="space-y-3 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-accent-cyan shrink-0" />
                  <a
                    href="mailto:vorbeck@malthe.info"
                    className="hover:text-accent-cyan transition-colors"
                  >
                    vorbeck@malthe.info
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent-cyan shrink-0" />
                  <span>Lüneburg, Deutschland</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 pt-6 border-border text-center">
            <p className="text-sm text-foreground/40 font-mono">
              &copy; {new Date().getFullYear()} Malthe Vorbeck. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
