"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const fullText = "Moin, ich bin Malthe";
  const preText = "Moin, ich bin ";
  const name = "Malthe";
  const [displayed, setDisplayed] = useState("");
  const [typedComplete, setTypedComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    setMounted(true);
    if (shouldReduceMotion) {
      setDisplayed(fullText);
      setTypedComplete(true);
      return;
    }
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayed(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTypedComplete(true);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [shouldReduceMotion, fullText]);

  // Stable grid — no random dots to break SSR/hydration
  const columns = 20;
  const rows = 12;

  // Stagger variants for sections
  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom,
        ease: [0.16, 0.05, 0.13, 0.96],
      },
    }),
  } as any;

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 aurora" />

      {/* Subtle grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {Array.from({ length: columns * rows }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-foreground/5"
            style={{
              left: `${(i % columns) * (100 / columns)}%`,
              top: `${Math.floor(i / columns) * (100 / rows)}%`,
            }}
          />
        ))}
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-6 lg:px-8">
        <div className="grid items-center justify-items-center grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          {/* Text block */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={shouldReduceMotion ? 0 : 0.1}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-mono leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              {typedComplete ? (
                <>
                  {preText}
                  <span className="bg-gradient-to-r from-primary via-highlight to-primary bg-clip-text text-transparent bg-[size:200%_auto] animate-text-gradient">
                    {name}
                  </span>
                </>
              ) : (
                displayed
              )}
            </motion.h1>
            <p className="mt-6 text-lg text-foreground-muted font-mono">
              Junior Datacenter Operations Engineer bei HBSN GmbH
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <motion.a
                href="#certificates"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold
                           bg-primary text-[#041018] hover:bg-secondary hover:text-white
                           transition-all duration-200 shine-sweep"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Meine Zertifikate
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold
                           bg-transparent text-foreground hover:bg-surface-strong/60 hover:text-primary
                           border border-border transition-all duration-200"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Kontaktieren
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.4,
              ease: [0.16, 0.05, 0.13, 0.96],
            }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div
                className="absolute -inset-1 rounded-full blur opacity-15 group-hover:opacity-25 transition duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, #00d4ff 0%, #ffd166 50%, #00d4ff 100%)",
                }}
              />
              <Image
                src="/me.jpg"
                alt="Profile picture of Malthe"
                width={280}
                height={280}
                priority
                className="relative rounded-[24px] border-2 border-border p-1 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : { y: [0, 10, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary opacity-60"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}