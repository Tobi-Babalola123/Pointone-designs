"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FooterSection from "./footer-section";
import MobileMenu from "./mobile-menu";
import MouseFollower from "./mouse-follower";
import GraphicDesignModal from "./components/graphic-design-modal";
import { projects } from "@/data/projects";
const categories = [
  "All",
  "Featured",
  "Website Redesigns",
  "Business Websites",
  "SaaS",
];

export default function WorkPage() {
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
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-10 w-40 h-40 bg-lime-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-24 right-10 w-52 h-52 bg-cyan-300/20 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <header className="relative z-10 flex justify-between items-center px-6 lg:px-10 py-6">
          <Link href="/">
            <h2 className="text-2xl font-bold font-poppins text-gray-900 hover:opacity-70 transition cursor-pointer">
              Tobi Babalola
            </h2>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-900 hover:text-lime-500 transition"
          >
            <Menu size={24} />
          </button>
        </header>

        <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          {/* Hero */}
          <section className="pt-8 pb-14">
            <span className="inline-flex items-center rounded-full bg-lime-100 text-lime-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
              Selected Case Studies
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-poppins max-w-5xl">
              Websites Designed To Generate Leads,
              <br />
              Build Trust &
              <span className="text-lime-500"> Grow Businesses.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
              A curated collection of conversion-focused websites, homepage
              redesigns and SaaS products built with Next.js, Tailwind CSS and
              modern frontend technologies. Every project is crafted to improve
              user experience, strengthen brand credibility and increase
              customer enquiries.
            </p>
          </section>

          {/* Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(6);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-lime-400 hover:text-lime-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Grid */}
          <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <Card key={index} project={project} />
            ))}
          </section>

          {/* View More */}
          {visibleCount < filteredProjects.length && (
            <div className="flex justify-center mt-14">
              <button
                onClick={showMore}
                className="px-8 py-4 rounded-full bg-lime-400 hover:bg-lime-500 transition font-semibold text-gray-900"
              >
                View More Projects
              </button>
            </div>
          )}

          {/* CTA */}
          <section className="mt-24 mb-20 overflow-hidden rounded-3xl bg-gray-900 relative">
            {/* Glow */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-lime-400 blur-3xl" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center px-8 py-14 lg:px-16 lg:py-20">
              {/* Left */}
              <div>
                <span className="uppercase tracking-[0.35em] text-lime-400 text-xs font-semibold">
                  Ready to Elevate Your Business?
                </span>

                <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight text-white font-poppins">
                  Let's build a website that works as hard as you do.
                </h2>

                <p className="mt-6 text-gray-300 leading-8 max-w-xl">
                  I help businesses transform outdated websites into modern,
                  conversion-focused experiences that build trust, generate
                  qualified leads, and support long-term business growth.
                </p>
              </div>

              {/* Right */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-white text-xl font-semibold mb-5">
                  Here's what you'll get
                </h3>

                <ul className="space-y-4 text-gray-300">
                  <li>✓ Premium UI that builds instant credibility</li>

                  <li>✓ Faster loading and better mobile experience</li>

                  <li>✓ Conversion-focused layouts that increase enquiries</li>

                  <li>✓ SEO-ready structure for better visibility</li>

                  <li>✓ Built with Next.js & Tailwind CSS</li>
                </ul>

                <Link
                  href="/#contact"
                  className="inline-flex mt-8 rounded-full bg-lime-400 px-7 py-4 font-semibold text-gray-900 hover:scale-105 transition"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </section>
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
