"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const fullText = "Moin, ich bin Malthe"
  const preText = "Moin, ich bin "
  const name = "Malthe"
  const [displayed, setDisplayed] = useState("")
  const [typedComplete, setTypedComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayed(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setTypedComplete(true)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom },
    }),
  }

  // Background moving dots
  const dotCount = 40

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#0a0e17]"
    >
      {/* animated dot grid */}
      <div className="absolute inset-0">
        {Array.from({ length: dotCount }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 4,
              height: 4,
              backgroundColor: "#00d4ff",
              borderRadius: "50%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-6 lg:px-8">
        <div className="grid items-center justify-items-center grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono leading-tight">
              {typedComplete ? (
                <>
                  {preText}
                  <span className="text-[#00d4ff]">Malthe</span>
                </>
              ) : (
                displayed
              )}
            </h1>
            <p className="mt-4 text-lg text-gray-300 font-mono">
              Junior Datacenter Operations Engineer bei HBSN GmbH
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="#certificates"
                className="relative inline-flex items-center justify-center px-6 py-3 bg-[#00d4ff33] text-[#00d4ff] border border-[#00d4ff] hover:bg-[#00d4ff22] hover:text-white font-mono transition-all duration-300"
              >
                Meine Zertifikate
              </a>
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-6 py-3 bg-[#00d4ff] text-[#0a0e17] hover:bg-[#00d4ffcc] font-mono transition-all duration-300"
              >
                Kontaktieren
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <Image
                src="/me.jpg"
                alt="Profile picture of Malthe"
                width={280}
                height={280}
                className="relative rounded-full border-2 border-[#00d4ff] p-1"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#00d4ff] opacity-60"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}