import Hero from "@/components/Hero";
import CommandPalette from "@/components/CommandPalette";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <CommandPalette />
      <Hero />
      <Projects />
      <Capabilities />
      <Profile />
      <Contact />
    </main>
  );
}
