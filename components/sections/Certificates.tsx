"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Calendar, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const certificates = [
  {
    title: "Fortinet Certified Associate Cybersecurity",
    date: "August 2024 - August 2026",
    issuer: "Fortinet",
    description:
      "Fundiertes Wissen in Cybersecurity-Konzepten, Bedrohungslandschaften, Netzwerksicherheit und Fortinet-Produkten. Umfasst Firewalls, VPN, IDS/IPS, Zero Trust und mehr.",
  },
  {
    title: "Fortinet FortiGate 7.4 Operator",
    date: "August 2024",
    issuer: "Fortinet",
    description:
      "Praktische Kenntnisse der FortiGate 7.4 Firewall-Administration. Konfiguration von Security Profiles, Routing, HA und Troubleshooting.",
  },
  {
    title: "Google Cybersecurity Certificate",
    date: "August 2024",
    issuer: "Google",
    description:
      "Umfassende Grundlagen der Cybersicherheit: SIEM-Tools, Linux-Befehle, Python-Skripte, Netzwerk-Sicherheit, SQL und Incident Response.",
  },
  {
    title: "CCNA Routing and Switching: Grundlagenwissen",
    date: "Mai 2023",
    issuer: "Cisco",
    description:
      "Grundlagen der Netzwerktechnik: IP-Adressierung, Subnetting, Routing-Protokolle, Switch-Konfiguration und VLAN-Konzepte nach Cisco-Standard.",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-20 relative" ref={ref}>
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-sm text-accent-cyan mb-3 px-4 py-1.5 rounded-full glass">
            <Award size={14} />
            <span>ZERTIFIZIERUNGEN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 glow-text">
            Meine Zertifikate
          </h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Kontinuierliche Weiterbildung im Bereich Cybersecurity und
            Netzwerktechnik
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer hover:border-accent-cyan/30 transition-all duration-300"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-foreground/40 font-mono text-xs">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                  <motion.span
                    animate={
                      expandedIndex === index
                        ? { rotate: 180 }
                        : { rotate: 0 }
                    }
                    transition={{ duration: 0.2 }}
                  >
                    {expandedIndex === index ? (
                      <ChevronUp size={16} className="text-accent-cyan" />
                    ) : (
                      <ChevronDown size={16} className="text-foreground/40" />
                    )}
                  </motion.span>
                </div>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-cyan transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-accent-teal mb-4">{cert.issuer}</p>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    expandedIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {cert.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
