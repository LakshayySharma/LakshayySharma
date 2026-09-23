import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lakshay.dev"),
  title: {
    default: "Lakshay Sharma — Frontend Architect & AI Builder",
    template: "%s | Lakshay Sharma",
  },
  description:
    "Frontend Software Engineer with 3+ years building high-performance, user-facing web applications. React, Next.js, and AI-native products.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "AI",
    "Web Development",
    "Portfolio",
    "Lakshay Sharma",
  ],
  authors: [{ name: "Lakshay Sharma" }],
  creator: "Lakshay Sharma",
  openGraph: {
    title: "Lakshay Sharma — Frontend Architect & AI Builder",
    description:
      "Frontend Software Engineer building high-performance web applications and AI-native products.",
    type: "website",
    url: "/",
    siteName: "Lakshay Sharma",
    images: [
      { url: "/hero.png", width: 1200, height: 630, alt: "Lakshay Sharma" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshay Sharma — Frontend Architect & AI Builder",
    description:
      "Frontend Software Engineer building high-performance web applications and AI-native products.",
    images: ["/hero.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06060a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-neon-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
