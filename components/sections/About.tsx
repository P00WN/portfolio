"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Briefcase, User } from "lucide-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const infoItems = [
    { icon: <Mail size={16} />, label: "E-Mail", value: "vorbeck@malthe.info" },
    { icon: <MapPin size={16} />, label: "Standort", value: "Lüneburg, Deutschland" },
    { icon: <Briefcase size={16} />, label: "Position", value: "Junior DC Ops Engineer" },
    { icon: <User size={16} />, label: "Rolle", value: "Fachinformatiker SI" },
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl" />
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
            <User size={14} />
            <span>UBER MICH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold glow-text">
            Über Mich
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 cyan-gradient rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative">
                <Image
                  src="/me.jpg"
                  alt="Malthe Vorbeck"
                  width={350}
                  height={420}
                  className="rounded-xl glass"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="glass rounded-xl p-6 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Willkommen auf meiner Portfolio-Website! Als Junior Datacenter
                Operations Engineer bei HBSN GmbH in Lüneburg bin ich
                spezialisiert auf die Bereitstellung und Wartung von
                IT-Infrastruktur.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Mit Erfahrung in Firewall-Lösungen, System Monitoring und Mobile
                Device Management strebe ich danach, robuste und sichere
                IT-Umgebungen zu schaffen. Mein Hintergrund als Fachinformatiker
                für Systemintegration gibt mir ein solides Fundament für die
                Bewältigung komplexer IT-Herausforderungen.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Neben meiner beruflichen Tätigkeit engagiere ich mich seit April
                2020 als Feuerwehrmann bei der Freiwilligen Feuerwehr Artlenburg.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {infoItems.map((item, i) => (
            <div
              key={item.label}
              className="glass rounded-xl p-4 text-center hover:border-accent-cyan/30 transition-all group"
            >
              <div className="flex items-center justify-center gap-2 text-accent-cyan mb-2">
                {item.icon}
                <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan/70">
                  {item.label}
                </span>
              </div>
              <p className="text-sm text-foreground font-mono group-hover:text-accent-cyan transition-colors">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
