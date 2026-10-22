import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malthe Vorbeck | Datacenter Operations Engineer",
  description:
    "Portfolio von Malthe Vorbeck – Junior Datacenter Operations Engineer bei HBSN GmbH. Spezialisiert auf IT-Infrastruktur, Cybersecurity und Systemadministration.",
  keywords: [
    "Malthe Vorbeck",
    "Datacenter",
    "Operations Engineer",
    "Cybersecurity",
    "IT-Infrastruktur",
    "Systemadministration",
    "Lüneburg",
  ],
  authors: [{ name: "Malthe Vorbeck" }],
  openGraph: {
    type: "website",
    title: "Malthe Vorbeck | Datacenter Operations Engineer",
    description:
      "Portfolio von Malthe Vorbeck – Junior Datacenter Operations Engineer bei HBSN GmbH.",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
