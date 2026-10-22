"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Network, Server, Code } from "lucide-react";

const categories = [
  {
    title: "Firewall & Security",
    icon: Shield,
    skills: [
      "Fortinet FortiGate (UTM)",
      "VPN-Konfiguration (IPsec/SSL)",
      "Network Security Policies",
      "IPS/IDS Management",
      "Securepoint UTM",
    ],
    tags: ["NGFW", "FortiOS", "WAF"],
    level: 85,
  },
  {
    title: "Netzwerk",
    icon: Network,
    skills: [
      "Switch-Konfiguration",
      "VLAN Management",
      "Routing (statisch/dynamisch)",
      "Netzwerk-Monitoring",
      "Troubleshooting",
    ],
    tags: ["TCP/IP", "OSPF", "Subnetting"],
    level: 90,
  },
  {
    title: "Systemadministration",
    icon: Server,
    skills: [
      "Linux Server (Debian/Ubuntu)",
      "Windows Server",
      "Virtualisierung (VMware)",
      "PowerShell Scripting",
      "Backup & Disaster Recovery",
    ],
    tags: ["Active Directory", "Shell", "Proxmox"],
    level: 80,
  },
  {
    title: "Programmierung",
    icon: Code,
    skills: [
      "Python (Grundkenntnisse)",
      "SQL-Datenbanken",
      "HTML/CSS",
      "Bash/PowerShell Scripting",
    ],
    tags: ["Automatisierung", "Scripts", "MySQL"],
    level: 60,
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-sm text-accent-cyan mb-3 px-4 py-1.5 rounded-full glass">
            <Code size={14} />
            <span>FÄHIGKEITEN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold glow-text">
            Meine Fähigkeiten
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-xl p-6 group hover:border-accent-cyan/30 transition-all"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg cyan-gradient flex items-center justify-center text-black">
                  <cat.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-cyan transition-colors">
                  {cat.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-2 mb-5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <span className="text-accent-cyan mt-0.5 shrink-0">›</span>
                    <span className="font-mono text-xs">{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full h-1.5 rounded-full bg-surface/80 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${cat.level}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="h-full cyan-gradient rounded-full"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan/80 border border-accent-cyan/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
