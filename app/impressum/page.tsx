"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    const isDark = saved ? saved === "dark" : true;
    setDarkMode(isDark);
  }, []);
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("darkMode", next ? "dark" : "light");
      return next;
    });
  };
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-xl p-8 space-y-8">
            <div>
              <h1 className="text-3xl font-bold font-mono text-accent-cyan">
                Impressum
              </h1>
              <p className="text-sm text-foreground/40 font-mono mt-1">
                § 5 TMG
              </p>
            </div>

            <div className="text-foreground/80 space-y-4 leading-relaxed">
              <div>
                <h2 className="font-semibold text-lg mb-2">Angaben gemäß § 5 TMG</h2>
                <p className="font-mono text-sm">
                  Malthe Vorbeck<br />
                  Lüneburg<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg mb-2">Kontakt</h2>
                <p className="font-mono text-sm">
                  E-Mail: <a href="mailto:vorbeck@malthe.info" className="text-accent-cyan hover:underline">vorbeck@malthe.info</a>
                </p>
              </div>

              <div id="datenschutz" className="pt-6 border-t border-border">
                <h2 className="font-semibold text-lg mb-4">Datenschutzerklärung</h2>
                <p className="text-sm mb-4">
                  Verantwortlich für die Datenverarbeitung auf dieser Website
                  ist:
                </p>
                <p className="font-mono text-sm">
                  Malthe Vorbeck<br />
                  Lüneburg<br />
                  E-Mail: <a href="mailto:vorbeck@malthe.info" className="text-accent-cyan hover:underline">vorbeck@malthe.info</a>
                </p>
                <p className="mt-4 text-sm">
                  Diese Website verwendet Cookies, um die bestmögliche Erfahrung zu gewährleisten.
                  Es werden keine personenbezogenen Daten ohne Ihre Einwilligung gespeichert.
                </p>
                <p className="mt-4 text-sm">
                  Das Kontaktformular sendet Daten über EmailJS an den Betreiber.
                  Weitere Informationen zum Datenschutz finden Sie unter{" "}
                  <a
                    href="https://www.emailjs.com/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-cyan hover:underline"
                  >
                    EmailJS Datenschutzerklärung
                  </a>
                  .
                </p>
                <p className="mt-4 text-sm">
                  Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer
                  personenbezogenen Daten. Wenden Sie sich dazu an die oben genannte Kontaktadresse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
