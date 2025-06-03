"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FooterSection from "./footer-section";
import MobileMenu from "./mobile-menu";
import MouseFollower from "./mouse-follower";

const categories = ["All", "dev", "ui", "video"];

const categoryLabels = {
  All: "All",
  dev: "Development",
  ui: "UI Design",
  video: "Video Project",
};

export default function WorkPage() {
  const projects = [
    {
      title: "TravelSphere Booking App",
      year: "2024",
      category: "dev",
      imageUrl: "/Travelsphere.jpg",
      link: "https://bus-booking-system1.netlify.app/",
    },
    {
      title: "Solar Panel Estimator",
      year: "2024",
      category: "dev",
      imageUrl: "/solaris-surge.png",
      link: "https://solaris-surge-nett.vercel.app/home",
    },
    {
      title: "Health Monitoring Dashboard",
      year: "2024",
      category: "dev",
      imageUrl: "/healthsphere.png",
      link: "https://health-monitoring-app2.netlify.app/",
    },
    {
      title: "Trentrove E-commerce Website",
      year: "2024",
      category: "dev",
      imageUrl: "/trendtrovy.png",
      link: "https://trendtrovei.netlify.app/",
    },
    {
      title: "PointOne Crypto Wallet design",
      year: "2024",
      category: "ui",
      imageUrl: "/productdesign.webp",
      link: "https://dribbble.com/shots/25655700-Product-Design-crypto-wallet-design",
    },
    {
      title: "Real Estate Video Ad",
      year: "2025",
      category: "video",
      imageUrl: "/videos/realestate.mp4",
      isVideo: true,
      link: "https://dribbble.com/shots/25849166-Greater-Construction-Video-ad",
    },
    {
      title: "Health Supplement Video Ad",
      year: "2025",
      category: "video",
      imageUrl: "/videos/pileridvideo.mp4",
      isVideo: true,
      link: "https://dribbble.com/shots/25497685-Advertising-Video-for-Natural-Pile-Relief-Product",
    },
    {
      title: "Charcoal Hardwood Branding",
      year: "2024",
      category: "ui",
      imageUrl: "/hardwoodcharcoal.webp",
      link: "https://dribbble.com/shots/25728199-Charcoal-Packaging-and-mockup-professional-export-box",
    },
    {
      title: "FD Foodstore Branding",
      year: "2024",
      category: "ui",
      imageUrl: "/FDfoodstore.webp",
      link: "https://dribbble.com/shots/25640394-Branding-Logo-Design-for-FD-Foodstore",
    },
    {
      title: "Fresh eggs Label Design",
      year: "2024",
      category: "ui",
      imageUrl: "/histokem.webp",
      link: "https://dribbble.com/shots/25634173-Branding-Sticker-Design",
    },
    {
      title: "Hospitality Industry Video Ad",
      year: "2024",
      category: "video",
      imageUrl: "/videos/mipconsultant.mp4",
      isVideo: true,
      link: "https://dribbble.com/shots/25640422-Motion-Design-for-hospitality-industry",
    },
    {
      title: "Real Estate Video Ad",
      year: "2024",
      category: "video",
      imageUrl: "/videos/planetspace.mp4",
      isVideo: true,
      link: "https://dribbble.com/shots/25047169-Discover-Your-Dream-Home-Real-Estate-Showcase",
    },
    {
      title: "Bottle Water Label design",
      year: "2024",
      category: "ui",
      imageUrl: "/kingbirthday.webp",
      link: "https://dribbble.com/shots/25046947-Noble-Wishes-A-Royal-Birthday-Card",
    },
    {
      title: "Real Estate Video Ad",
      year: "2024",
      category: "video",
      imageUrl: "/videos/cornerstone.mp4",
      isVideo: true,
      link: "https://dribbble.com/shots/25790090-Cornerstone-Building-Construction-Company-Video-Presentation",
    },
    {
      title: "Church Graphics",
      year: "2024",
      category: "ui",
      imageUrl: "/THEM..webp",
      link: "https://dribbble.com/shots/25046947-Noble-Wishes-A-Royal-Birthday-Card",
    },
    {
      title: "Real Estate Video Ad",
      year: "2024",
      category: "video",
      imageUrl: "/videos/CAPconstruction.mp4",
      isVideo: true,
      link: "https://dribbble.com/shots/25848894-CAP-Construction-Video-Ad",
    },
    {
      title: "SPA Video Ad",
      year: "2024",
      category: "video",
      imageUrl: "/videos/DDAspa.mp4",
      isVideo: true,
      link: "https://dribbble.com/shots/25849130-DDA-SPA-video-ad",
    },
    {
      title: "Scent Elixir Poster Design",
      year: "2024",
      category: "ui",
      imageUrl: "/scent.webp",
      link: "https://dribbble.com/shots/25046774-T",
    },
    {
      title: "Bakery Label design",
      year: "2024",
      category: "ui",
      imageUrl: "/bakery.webp",
      link: "https://dribbble.com/shots/25046991-Artisan-Loaves-Crafted-with-Love",
    },
    {
      title: "Shredded Beef Label design",
      year: "2024",
      category: "ui",
      imageUrl: "/shreddedbeef.webp",
      link: "https://dribbble.com/shots/25697673-Premium-Shredded-Beef-Packaging-Design-Ransomed2foods",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase()
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
            <div className="text-lime-400 text-xl lg:text-2xl font-bold font-poppins hover:scale-110 transition-transform duration-300 cursor-pointer">
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
            <div className="mb-8 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-800 mb-6 lg:mb-8 text-center lg:text-left">
                Featured Projects
              </h1>

              {/* Filter tabs - responsive */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
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
            </div>

            {/* Projects grid - responsive */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover-target"
                >
                  <div className="relative h-48 lg:h-64 bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
                    {project.isVideo ? (
                      <video
                        src={project.imageUrl}
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-semibold font-poppins text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-xs lg:text-sm font-montserrat mb-3 lg:mb-4 uppercase tracking-wide">
                      {project.year} &nbsp;|&nbsp;{" "}
                      {project.category.toUpperCase()}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>

      <FooterSection />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <MouseFollower />
    </>
  );
}
