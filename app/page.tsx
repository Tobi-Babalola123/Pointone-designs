"use client";

import HeroSection from "../hero-section";
import SkillsSection from "../skills-section";
// import WorkExperienceSection from "../work-experience-section";
import PortfolioBlogSection from "../portfolio-blog-section";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../contact-section";
import FooterSection from "../footer-section";
import PricingSection from "../components/PricingSection";
import TemplatesSection from "../components/TemplatesSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      {/* <WorkExperienceSection /> */}
      <PortfolioBlogSection />
      <TestimonialsSection />
      <PricingSection />
      <TemplatesSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
