import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import ProjectsSection from './component/ProjectsSection'
import SkillsSection from './component/SkillsSection'
import EducationSection from './component/EducationSection'
import ContactSection from './component/ContactSection'
import Footer from './component/Footer'

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

export default App