"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-3xl mx-auto card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-foreground/80">
                <span className="font-semibold text-primary">
                  Hinweis zu Cookies:
                </span>{" "}
                Diese Website verwendet Cookies, um Ihnen die bestmögliche
                Erfahrung zu bieten. Durch die Nutzung dieser Website stimmen
                Sie der Verwendung von Cookies zu.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-xs font-mono rounded-lg border border-border text-foreground/60 hover:text-foreground hover:border-primary/30 transition-all"
              >
                Ablehnen
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-xs font-mono rounded-lg bg-primary text-[#041018] font-semibold hover:bg-secondary hover:text-white transition-all"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}