"use client"

import { useState } from "react"
import HeroSection from "../hero-section"
import SkillsSection from "../skills-section"
import WorkExperienceSection from "../work-experience-section"
import PortfolioBlogSection from "../portfolio-blog-section"
import ContactSection from "../contact-section"
import FooterSection from "../footer-section"
import FloatingMenuButton from "../floating-menu-button"
import MobileMenu from "../mobile-menu"
import MouseFollower from "../mouse-follower"

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <HeroSection />
      <SkillsSection />
      <WorkExperienceSection />
      <PortfolioBlogSection />
      <ContactSection />
      <FooterSection />

      {/* Global floating menu button */}
      <FloatingMenuButton onMenuToggle={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Mouse follower animation */}
      <MouseFollower />
    </>
  )
}
