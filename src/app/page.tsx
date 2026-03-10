import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsGrid from "@/components/SkillsGrid";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy">
      {/* Hero */}
      <Hero />
      
      {/* About */}
      <About />
      
      {/* Skills */}
      <SkillsGrid />
      
      {/* Experience */}
      <Experience />
      
      {/* Certifications */}
      <Certifications />
      
      {/* Contact */}
      <Contact />
    </main>
  );
}
