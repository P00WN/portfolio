"use client"

import React from "react"
import { motion } from "framer-motion"
import { Server, Shield } from "lucide-react"

interface TimelineEntry {
  title: string
  date: string
  company: string
  description: string
  tags: string[]
  icon: React.ReactNode
  align: "left" | "right"
}

const timelineData: TimelineEntry[] = [
  {
    title: "Junior Datacenter Operations Engineer",
    date: "Seit Dez. 2024",
    company: "HBSN GmbH",
    description: "Verantwortlich für die Bereitstellung und Wartung von Servern und Netzwerkinfrastruktur.",
    tags: ["Server", "Networking", "Datacenter", "Virtualisierung"],
    icon: <Server className="w-6 h-6" />,
    align: "right",
  },
  {
    title: "Fachinformatiker für Systemintegration",
    date: "Aug. 2021 - Jun. 2024",
    company: "Securepoint GmbH",
    description: "Implementierung und Betreuung von IT-Infrastruktur und Sicherheitslösungen.",
    tags: ["IT-Security", "Systemadministration", "Firewalls"],
    icon: <Shield className="w-6 h-6" />,
    align: "left",
  },
]

const TimelineCard: React.FC<{ entry: TimelineEntry; index: number }> = ({ entry, index }) => {
  const isLeft = entry.align === "left"

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex ${isLeft ? "justify-start" : "justify-end"} mb-16 last:mb-0`}
    >
      {/* Content Card */}
      <div
        className={`w-full md:w-[calc(50%-2rem)] backdrop-blur-md bg-[#0a1525]/80 border border-[#00d4ff]/30 rounded-lg p-6 shadow-lg shadow-[#00d4ff]/10 hover:border-[#00d4ff]/60 transition-all duration-300`}
      >
        {/* Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#00d4ff]/20 rounded-lg text-[#00d4ff]">
            {entry.icon}
          </div>
          <span className="text-[#00d4ff] font-mono text-sm tracking-wider">
            {entry.date}
          </span>
        </div>

        {/* Job Title & Company */}
        <h3 className="text-lg font-bold text-white mb-1">
          {entry.company}
        </h3>
        {entry.title && (
          <p className="text-[#00d4ff] font-mono text-sm mb-2">{entry.title}</p>
        )}
        <p className="text-gray-300 leading-relaxed mb-4">
          {entry.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-mono bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Dot on timeline - positioned absolutely on the timeline center */}
      <div className="absolute left-1/2 md:left-[calc(50%-0.375rem)] transform -translate-x-1/2 top-8 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
          className="w-4 h-4 bg-[#00d4ff] rounded-full border-2 border-[#0a0e17] shadow-[0_0_10px_rgba(0,212,255,0.5)]"
        />
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative min-h-screen bg-[#0a0e17] py-24 px-4 md:px-10 overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4 tracking-wide">
            Mein Werdegang
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent mx-auto" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff]/50 via-[#00d4ff]/30 to-[#00d4ff]/50 transform -translate-x-1/2" />

          {/* Timeline Entries */}
          <div className="relative">
            {timelineData.map((entry, index) => (
              <TimelineCard key={index} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
