"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_u3q7kas";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ya0vsww";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "hbk9niBaDHluDz-c0";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setStatus("success");
      setFormData({ from_name: "", reply_to: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-3xl" />
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
            <Send size={14} />
            <span>KONTAKT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold glow-text">
            Kontakt aufnehmen
          </h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Haben Sie eine Frage oder möchten Sie zusammenarbeiten? Schreiben
            Sie mir gerne eine Nachricht.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-mono text-sm font-semibold text-accent-cyan uppercase tracking-wider">
                Kontaktinformationen
              </h3>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-surface/50">
                <div className="text-accent-cyan shrink-0 mt-0.5">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-accent-cyan/70 uppercase tracking-wider">
                    E-Mail
                  </p>
                  <a
                    href="mailto:vorbeck@malthe.info"
                    className="text-foreground/80 hover:text-accent-cyan transition-colors"
                  >
                    vorbeck@malthe.info
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-surface/50">
                <div className="text-accent-cyan shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-accent-cyan/70 uppercase tracking-wider">
                    Standort
                  </p>
                  <p className="text-foreground/80">Lüneburg, Deutschland</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-mono text-sm font-semibold text-accent-cyan mb-3 uppercase tracking-wider">
                Social
              </h3>
              <div className="space-y-2">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/malthev" },
                  { label: "Xing", href: "https://xing.com/profile/malthe_vorbeck" },
                  { label: "GitHub", href: "https://github.com/P0WN" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-foreground/60 hover:text-accent-cyan transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-xl p-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-accent-cyan/70 uppercase tracking-wider mb-1.5 block">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Ihr Name"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent-cyan/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-accent-cyan/70 uppercase tracking-wider mb-1.5 block">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                    placeholder="ihre@email.de"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent-cyan/50 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-accent-cyan/70 uppercase tracking-wider mb-1.5 block">
                  Betreff *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Betreff"
                  className="w-full px-4 py-2.5 rounded-lg bg-surface/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent-cyan/50 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-accent-cyan/70 uppercase tracking-wider mb-1.5 block">
                  Nachricht *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Ihre Nachricht..."
                  className="w-full px-4 py-2.5 rounded-lg bg-surface/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent-cyan/50 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center gap-2 px-6 py-2.5 cyan-gradient text-black font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Nachricht senden
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-accent-green text-sm">
                  <CheckCircle size={16} />
                  Nachricht erfolgreich gesendet!
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es
                  später erneut.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
