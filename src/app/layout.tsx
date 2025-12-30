import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lakshay Sharma | Frontend Architect & AI Builder",
  description:
    "Frontend Software Engineer with 3+ years of experience building high-performance, user-facing web applications. Expert in React, Next.js, and AI-native products.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "AI",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Lakshay Sharma" }],
  openGraph: {
    title: "Lakshay Sharma | Frontend Architect & AI Builder",
    description:
      "Frontend Software Engineer building high-performance web applications and AI-native products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="crt-overlay" />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
