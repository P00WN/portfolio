"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Briefcase, User } from "lucide-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const infoItems = [
    { icon: <Mail size={16} />, label: "E-Mail", value: "vorbeck@malthe.info" },
    { icon: <MapPin size={16} />, label: "Standort", value: "Lüneburg, Deutschland" },
    { icon: <Briefcase size={16} />, label: "Position", value: "Junior DC Ops Engineer" },
    { icon: <User size={16} />, label: "Rolle", value: "Fachinformatiker SI" },
  ];

  const [counts, setCounts] = useState({ years: 0, certs: 0, projects: 0 });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCounts({
        years: Math.round(progress * 3),
        certs: Math.round(progress * 4),
        projects: Math.round(progress * 12),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      {/* Calm aurora background */}
      <div className="absolute inset-0 aurora" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-12 w-72 h-72 bg-gradient-to-br from-primary/4 via-highlight/2 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-4 w-56 h-56 bg-gradient-to-tr from-secondary/5 via-transparent to-highlight/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-sm text-primary mb-3 px-4 py-1.5 rounded-full glass">
            <User size={14} />
            <span>ÜBER MICH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Über <span className="bg-gradient-to-r from-primary via-highlight to-primary bg-clip-text text-transparent bg-[size:200%_auto] animate-text-gradient">Mich</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground-muted">
            Willkommen auf meiner Portfolio-Website! Als Junior Datacenter
            Operations Engineer bei HBSN GmbH in Lüneburg bin ich spezialisiert auf
            die Bereitstellung und Wartung von IT-Infrastruktur.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-primary via-highlight to-primary rounded-[24px] blur opacity-15 group-hover:opacity-25 transition duration-500"
              />
              <Image
                src="/me.jpg"
                alt="Malthe Vorbeck"
                width={350}
                height={420}
                className="relative rounded-[24px] glass object-cover p-0.5"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="card min-h-[160px]">
              <p className="text-foreground/80 leading-relaxed">
                Mit Erfahrung in Firewall-Lösungen, System Monitoring und Mobile
                Device Management strebe ich danach, robuste und sichere IT-Umgebungen
                zu schaffen. Mein Hintergrund als Fachinformatiker für
                Systemintegration gibt mir ein solides Fundament für die
                Bewältigung komplexer IT-Herausforderungen.
              </p>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Neben meiner beruflichen Tätigkeit engagiere ich mich seit April
                2020 als Feuerwehrmann bei der Freiwilligen Feuerwehr Artlenburg.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="card p-5 text-center">
            <div className="text-3xl font-bold text-primary font-mono">{counts.years}+</div>
            <p className="text-xs font-mono text-foreground-muted mt-1">Jahre Erfahrung</p>
          </div>
          <div className="card p-5 text-center">
            <div className="text-3xl font-bold text-primary font-mono">{counts.certs}+</div>
            <p className="text-xs font-mono text-foreground-muted mt-1">Zertifizierungen</p>
          </div>
          <div className="card p-5 text-center">
            <div className="text-3xl font-bold text-primary font-mono">{counts.projects}+</div>
            <p className="text-xs font-mono text-foreground-muted mt-1">Projekte</p>
          </div>
          <div className="card p-5 text-center">
            <div className="text-3xl font-bold text-primary font-mono">HBSN</div>
            <p className="text-xs font-mono text-foreground-muted mt-1">Aktueller Arbeitgeber</p>
          </div>
        </motion.div>

        {/* Info Items */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (shouldReduceMotion ? 0 : 0.1) + i * 0.08 }}
              className="card p-4 text-center group"
            >
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                {item.icon}
                <span className="text-xs font-mono uppercase tracking-wider text-foreground-muted">
                  {item.label}
                </span>
              </div>
              <p className="text-sm text-foreground font-mono group-hover:text-primary transition-colors">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}