"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FooterSection from "./footer-section";
import MobileMenu from "./mobile-menu";
import MouseFollower from "./mouse-follower";
import GraphicDesignModal from "./components/graphic-design-modal";

const categories = ["All", "Business Websites", "Lead-Generation Pages"];

export default function WorkPage() {
  const projects = [
    {
      title: "Solaris Surge – Solar Sales & Estimation Platform",
      year: "2024",
      category: "Business Websites",
      imageUrl: "/solaris-surge.png",
      link: "https://www.solarissurge.net/",
      outcome: "Live business • Used across 50+ countries • Revenue-focused",
      description:
        "A solar estimation platform built to convert visitors into qualified leads by calculating installation requirements, costs, and energy savings — supporting daily sales of batteries, inverters, and installations.",
    },
    {
      title: "Slice & Co - Modern Pizza Delivery & Ordering Web App",
      year: "2026",
      category: "Business Websites",
      imageUrl: "/slice1.png",
      link: "https://slicefoodx.vercel.app/",
      outcome: "Product-style web app • Built for online ordering & conversion",
      description:
        "A modern pizza delivery web app built with Next.js featuring a custom pizza builder, dynamic cart system, and responsive UI. Designed for fast performance, seamless ordering, and an engaging user experience.",
    },
    {
      title: "Flowpay Fintech Landing Page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/flowpay.png",
      link: "https://flowpay-fintech.netlify.app/",
      outcome:
        "Lead-generation landing page • Fintech positioning & trust-focused",
      description:
        "A modern fintech landing page designed to showcase secure digital payments, financial transparency, and seamless user experience..",
    },
    {
      title: "Nexus Consulting Landing Page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/nexus.png",
      link: "https://nexus-consulting-landingpage.netlify.app/",
      outcome:
        "Conversion-focused consulting page • Built for credibility & leads",
      description:
        "A clean, conversion-focused corporate consulting landing page designed to communicate expertise, credibility, and strategic value.",
    },
    {
      title: "Landing Page",
      year: "2025",
      category: "Lead-Generation Pages",
      imageUrl: "/landing page.png",
      link: "https://landing-page-templates.netlify.app/",
      outcome: "Landing page template • UI & layout exploration",
      description:
        "A sleek and modern landing page template designed in 2025, featuring a clean layout, smooth interactions, and a strong visual hierarchy.",
    },
    {
      title: "Medicore Landing Page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/medicore.png",
      link: "https://medicore-landing-page.netlify.app/",
      outcome: "Healthcare landing page • Trust-driven & conversion-focused",
      description:
        "A clean, conversion-focused medical landing page designed to communicate healthcare services with clarity, trust, and professionalism.",
    },
    {
      title: "SaaS Dashboard Pro",
      year: "2025",
      category: "Business Websites",
      imageUrl: "/dashboard pro.png",
      link: "https://ai-dashboard-template.vercel.app/",
      outcome: "SaaS dashboard UI • Built for scalable web applications",
      description:
        "A professional SaaS dashboard interface built in 2025, featuring a clean and intuitive layout designed for modern web applications.",
    },
    {
      title: "Sterling & Associates landing page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/sterling.png",
      link: "https://sterlingandassociateslegal.netlify.app/",
      outcome:
        "Legal services landing page • Built to establish trust & authority",
      description:
        "A clean, conversion-focused legal services landing page designed to communicate trust, expertise, and professional credibility.",
    },
    {
      title: "Health Monitoring Dashboard",
      year: "2024",
      category: "Business Websites",
      imageUrl: "/healthsphere.png",
      link: "https://healthmonitoring-apps.netlify.app/",
      outcome: "Data-driven web dashboard • Real-time monitoring concept",
      description:
        "Comprehensive health tracking platform featuring real-time vital signs monitoring and personalized health insights.",
    },
    {
      title: "TravelSphere Booking App",
      year: "2024",
      category: "Business Websites",
      imageUrl: "/Travelsphere.jpg",
      link: "https://bus-booking-system1.netlify.app/",
      outcome: "Booking platform UI • Multi-step flows & user interaction",
      description:
        "Modern bus booking system with route planning, seat selection, and secure payment integration for seamless travel experiences.",
    },
    {
      title: "Trentrove E-commerce Website",
      year: "2024",
      category: "Business Websites",
      imageUrl: "/trendtrovy.png",
      link: "https://trendtrovei.netlify.app/",
      outcome: "E-commerce website • Product browsing & checkout flow",
      description:
        "Full-featured online shopping platform with product catalog, cart functionality, and smooth checkout experience.",
    },
    {
      title: "Emergency Toolkit Website",
      year: "2025",
      category: "Business Websites",
      imageUrl: "/crisisaid.png",
      link: "https://emergency-toolkit.netlify.app/",
      outcome: "Information platform • Structured content & accessibility",
      description:
        "Essential resource hub providing emergency preparedness guides, tools, and critical information for crisis situations.",
    },
    {
      title: "Real Estate Landing Page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/Haven real estate.png",
      link: "https://haven-real-estate-landing-page.netlify.app/",
      outcome: "Real estate landing page • Built for property lead generation",
      description:
        "A clean, conversion-focused real estate landing page designed to showcase property investment offerings with clarity, trust, and visual hierarchy. Built with a minimal, corporate layout optimized for lead generation",
    },
    {
      title: "Aureum Restaurant Landing Page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/restaurant.png",
      link: "https://aureumrestaurantlandingpage.netlify.app/",
      outcome:
        "Restaurant landing page • Built to attract diners and drive reservations",
      description:
        "A modern, visually engaging restaurant landing page designed to showcase signature dishes, atmosphere, and dining experience with clarity and strong visual appeal. Built with a clean layout and strategic content sections to highlight the menu, encourage reservations, and guide visitors toward making a booking or visiting the location",
    },
    {
      title: "Saas Tech Landing Page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/nexasite.png",
      link: "https://saas-tech-landingpage.netlify.app/",
      description:
        "A clean, conversion-focused SaaS tech landing page designed to communicate product capabilities, support user onboarding, and drive engagement through a structured, performance-focused layout",
    },
    {
      title: "HR Software Landing Page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/HR.png",
      link: "https://hr-software-landing-page.netlify.app/",
      description:
        "A clean, conversion-focused HR landing page designed to communicate product value, streamline information flow, and support user onboarding through a structured, professional layout.",
    },
    {
      title: "HR Software Landing Page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/workflow.png",
      link: "https://workflowhr-landingpage.netlify.app/",
      description:
        "A clean, conversion-focused HR landing page designed to communicate product value, streamline information flow, and support user onboarding through a structured, professional layout.",
    },
    {
      title: "Saas AI Powered Landing Page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/productflow.png",
      link: "https://productflow-landing-page.netlify.app/",
      description:
        "A modern product landing page designed to highlight AI-powered roadmapping, customer insights, and collaborative workflows through a clean, conversion-focused layout.",
    },
    {
      title: "Saas HR Landing Page",
      year: "2026",
      category: "Lead-Generation Pages",
      imageUrl: "/talentio.png",
      link: "https://talentio-hr.netlify.app/",
      description:
        "A clean, conversion-focused HR landing page designed to communicate workforce solutions with clarity, trust, and usability.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedGraphicDesign, setSelectedGraphicDesign] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isGraphicDesignModalOpen, setIsGraphicDesignModalOpen] =
    useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const showMore = () => setVisibleCount(filteredProjects.length);

  const handleGraphicDesignClick = (project: (typeof projects)[0]) => {
    if (project.category.toLowerCase() === "graphic design") {
      setSelectedGraphicDesign(project);
      setIsGraphicDesignModalOpen(true);
    }
  };

  const Card = ({ project }: { project: (typeof projects)[0] }) => (
    <div
      onClick={() => handleGraphicDesignClick(project)}
      className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer`}
    >
      {project.category.toLowerCase() !== "graphic design" ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative h-48 lg:h-64 bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-4 lg:p-6">
            <h3 className="text-lg lg:text-xl font-semibold font-poppins text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              {project.title}
            </h3>
            {project.outcome && (
              <p className="text-sm font-semibold text-lime-500 mt-1">
                {project.outcome}
              </p>
            )}
            <p className="text-gray-500 text-xs lg:text-sm font-montserrat mb-3 lg:mb-4 uppercase tracking-wide">
              {project.year} &nbsp;|&nbsp; {project.category.toUpperCase()}
            </p>
            <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
              {project.description}
            </p>
          </div>
        </a>
      ) : (
        <>
          <div className="relative h-48 lg:h-64 bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <p className="text-white font-semibold">View Full Size</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:p-6">
            <h3 className="text-lg lg:text-xl font-semibold font-poppins text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              {project.title}
            </h3>
            {project.outcome && (
              <p className="text-sm font-semibold text-lime-500 mt-1">
                {project.outcome}
              </p>
            )}
            <p className="text-gray-500 text-xs lg:text-sm font-montserrat mb-3 lg:mb-4 uppercase tracking-wide">
              {project.year} &nbsp;|&nbsp; {project.category.toUpperCase()}
            </p>
            <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
              {project.description}
            </p>
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 right-8 lg:right-16 w-8 h-8 lg:w-12 lg:h-12 bg-cyan-400 rounded-full opacity-60" />
        </div>

        {/* Header */}
        <header className="relative z-10 flex justify-between items-center p-4 lg:p-8">
          <Link href="/">
            <div className="text-purple-600 text-xl lg:text-2xl font-bold font-poppins hover:scale-110 transition-transform duration-300 cursor-pointer">
              Tobi Babalola
            </div>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-purple-600 p-2 hover-target"
          >
            <Menu size={20} className="lg:w-6 lg:h-6" />
          </button>
        </header>

        {/* Main content */}
        <main className="relative z-10 container mx-auto px-4 lg:px-8 pt-4 lg:pt-8">
          <div className="max-w-7xl mx-auto">
            {/* Page header */}
            <div className="mb-8 lg:mb-12 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-800 mb-6 lg:mb-8">
                Selected Work That Drives Business Results
              </h1>
              <p className="text-gray-600 max-w-2xl mt-3">
                A focused selection of websites and landing pages built to
                generate leads, support sales, and scale real businesses — not
                just look good.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(6);
                  }}
                  className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm font-medium font-montserrat transition-all duration-300 hover-target ${
                    activeCategory === category
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {displayedProjects.map((project, index) => (
                <Card key={index} project={project} />
              ))}
            </div>

            {/* View More button */}
            {visibleCount < filteredProjects.length && (
              <div className="text-center">
                <button
                  onClick={showMore}
                  className="mt-6 px-6 py-3 bg-lime-400 text-black rounded-lg hover:bg-blue-700 transition"
                >
                  View More
                </button>
              </div>
            )}

            {/* Call to action */}
            <section className="mt-20 mb-10 text-center bg-gray-900 text-white py-16 rounded-lg">
              <h2 className="text-3xl font-bold font-poppins mb-4">
                Need a website that actually brings results?
              </h2>
              <p className="max-w-xl mx-auto text-gray-300 mb-6">
                I work with startups and growing businesses to build fast,
                conversion-focused websites that support real revenue.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Let’s Talk
              </Link>
            </section>
          </div>
        </main>
      </div>

      <FooterSection />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <MouseFollower />
      <GraphicDesignModal
        isOpen={isGraphicDesignModalOpen}
        onClose={() => setIsGraphicDesignModalOpen(false)}
        project={selectedGraphicDesign}
      />
    </>
  );
}
