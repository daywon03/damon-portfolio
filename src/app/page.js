import HeroSection from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import SkillsSection from "@/component/SkillsSection";
import ProjectsSection from "@/component/ProjectsSection";
import ExperienceSection from "@/component/ExperienceSection";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import AboutSection from "@/component/AboutSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        <SkillsSection/>
        <ProjectsSection/>
  <ExperienceSection/>
        <AboutSection/>
        <ContactSection/>
      </div>
      <Footer/>
    </main>
  );
}
