import Hero from "@/components/Hero";
import CommandPalette from "@/components/CommandPalette";
import NavBar from "@/components/NavBar";
import Ticker from "@/components/Ticker";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a id="main" />
      <CommandPalette />
      <NavBar />
      <main className="relative bg-background">
        <Hero />
        <Ticker />
        <Projects />
        <div aria-hidden className="section-divider mx-auto max-w-6xl" />
        <Capabilities />
        <div aria-hidden className="section-divider mx-auto max-w-6xl" />
        <Profile />
        <div aria-hidden className="section-divider mx-auto max-w-6xl" />
        <Contact />
      </main>
    </>
  );
}
