import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsCarousel from "@/components/SkillsCarousel";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <PageBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <SkillsCarousel />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
