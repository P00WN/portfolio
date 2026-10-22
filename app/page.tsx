"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Certificates from "@/components/sections/Certificates";
import ContactSection from "@/components/sections/ContactSection";
import CookieBanner from "@/components/sections/CookieBanner";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    const isDark = saved ? saved === "dark" : true;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("darkMode", next ? "dark" : "light");
    if (next) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ScrollIndicator />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Certificates />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
