"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FooterSection from "./footer-section";
import MobileMenu from "./mobile-menu";
import MouseFollower from "./mouse-follower";

const categories = ["All", "websites", "ui", "video", "graphic design"];

const categoryLabels = {
  All: "All",
  website: "website",
  ui: "UI Design",
  video: "Video Project",
  "social media design": "Social Media Design",
};

export default function WorkPage() {
  const projects = [
    {
      title: "TravelSphere Booking App",
      year: "2024",
      category: "websites",
      imageUrl: "/Travelsphere.jpg",
      link: "https://bus-booking-system1.netlify.app/",
    },
    {
      title: "Solar Panel Estimator",
      year: "2024",
      category: "websites",
      imageUrl: "/solaris-surge.png",
      link: "https://solaris-surge-nett.vercel.app/home",
    },
    {
      title: "Health Monitoring Dashboard",
      year: "2024",
      category: "websites",
      imageUrl: "/healthsphere.png",
      link: "https://health-monitoring-app2.netlify.app/",
    },
    {
      title: "Trentrove E-commerce Website",
      year: "2024",
      category: "websites",
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
      title: "Christian Ebook Cover Design",
      year: "2025",
      category: "graphic design",
      imageUrl: "/deepthingsofgod.jpeg",
      link: "https://dribbble.com/shots/25848651-E-Book-Cover-design-The-Deep-things-of-God",
    },
    {
      title: "Music Cover",
      year: "2025",
      category: "graphic design",
      imageUrl: "/musiccover.jpeg",
      link: "https://www.behance.net/gallery/205917009/Album-art",
    },
    {
      title: "Art Illustration",
      year: "2025",
      category: "graphic design",
      imageUrl: "/fffff.jpeg",
      link: "https://www.behance.net/gallery/221048523/The-Hands-of-Fate-A-Visual-Allegory",
    },
    {
      title: "Christian Ebook Formatting & Publishing",
      year: "2025",
      category: "graphic design",
      imageUrl: "/ebook.jpeg",
      link: "https://dribbble.com/shots/26102133-Christian-eBook-Design-Purposeful-Living-Divine-Calling",
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
      title: "Web Novel Cover Design",
      year: "2025",
      category: "graphic design",
      imageUrl: "/ccccc.jpeg",
      link: "https://dribbble.com/shots/25803315-Death-Plus-One-A-Psychological-Thriller",
    },
    {
      title: "Raw Foodstrore Branding",
      year: "2025",
      category: "graphic design",
      imageUrl: "/33.jpeg",
      link: "https://dribbble.com/shots/25640394-Branding-Logo-Design-for-FD-Foodstore",
    },
    {
      title: "Professional eBook Design: “The Basics of an Exit Strategy",
      year: "2025",
      category: "graphic design",
      imageUrl: "/mockups.png",
      link: "https://dribbble.com/shots/26159172-Professional-eBook-Design-The-Basics-of-an-Exit-Strategy",
    },
    {
      title: "Organic Skincare poster",
      year: "2025",
      category: "graphic design",
      imageUrl: "/skincare.jpeg",
      link: "https://dribbble.com/shots/25848733-Skincare-Organics-Flyer-Krina-Organics-Skincare",
    },
    {
      title: "Happy Birthday Social Media Post",
      year: "2025",
      category: "graphic design",
      imageUrl: "/birthday.jpeg",
      link: "https://dribbble.com/shots/25648603-Birthday-design-mockups",
    },
    {
      title: "Night Club Events Poster",
      year: "2025",
      category: "graphic design",
      imageUrl: "/clubflame.webp",
      link: "https://dribbble.com/shots/25046847-Electric-Nights-Club-Vibes",
    },
    {
      title: "Crypto Wallet Logo Design",
      year: "2025",
      category: "graphic design",
      imageUrl: "/pointone.jpg",
      link: "https://dribbble.com/shots/25655684-Logo-Design-crypto-wallet-product-design",
    },
    {
      title: "Gospel Campaign Banner Design",
      year: "2025",
      category: "graphic design",
      imageUrl: "/fire.jpeg",
      link: "https://dribbble.com/shots/25928478-Ignite-the-Fire-Gospel-Campaign-The-Hill-Evangelical-Ministry",
    },
    {
      title: "Fasting & Prayer Poster Design",
      year: "2025",
      category: "graphic design",
      imageUrl: "/rrrr.jpeg",
      link: "https://dribbble.com/shots/25848746-Fasting-Prayers-Flier-design-Thehillevangelicalministry",
    },
    {
      title: "To-do Webapp",
      year: "2025",
      category: "websites",
      imageUrl: "/todowebapp2.png",
      link: "",
    },
    {
      title: "Night Club Events Poster",
      year: "2025",
      category: "graphic design",
      imageUrl: "/flame.jpeg",
      link: "https://dribbble.com/shots/25046865-Pulse-Party-Where-Music-Meets-Fun",
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
      category: "graphic design",
      imageUrl: "/hardwoodcharcoal.webp",
      link: "https://dribbble.com/shots/25728199-Charcoal-Packaging-and-mockup-professional-export-box",
    },
    {
      title: "FD Foodstore Branding",
      year: "2024",
      category: "graphic design",
      imageUrl: "/FDfoodstore.webp",
      link: "https://dribbble.com/shots/25640394-Branding-Logo-Design-for-FD-Foodstore",
    },
    {
      title: "A Tribute to Heritage & Culture",
      year: "2024",
      category: "graphic design",
      imageUrl: "/nigeria.jpeg",
      link: "https://dribbble.com/shots/25634163-Celebrating-Nigeria-Visual-tribute-to-heritage-and-culture",
    },
    {
      title: "Fresh eggs Label Design",
      year: "2024",
      category: "graphic design",
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
      category: "graphic design",
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
      category: "graphic design",
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
      category: "graphic design",
      imageUrl: "/scent.webp",
      link: "https://dribbble.com/shots/25046774-T",
    },
    {
      title: "Bakery Label design",
      year: "2024",
      category: "graphic design",
      imageUrl: "/bakery.webp",
      link: "https://dribbble.com/shots/25046991-Artisan-Loaves-Crafted-with-Love",
    },
    {
      title: "Shredded Beef Label design",
      year: "2024",
      category: "graphic design",
      imageUrl: "/shreddedbeef.webp",
      link: "https://dribbble.com/shots/25697673-Premium-Shredded-Beef-Packaging-Design-Ransomed2foods",
    },
    {
      title: "CAP Building Construction Company Logo Design",
      year: "2024",
      category: "graphic design",
      imageUrl: "/cap.jpeg",
      link: "https://dribbble.com/shots/25848729-CAP-Construction-Logo-Design",
    },
    {
      title: "Handbills Design",
      year: "2024",
      category: "graphic design",
      imageUrl: "/handbills.png",
      link: "https://dribbble.com/shots/25926724-Gospel-Campaign-Flyer-design-The-Hill-Evangelical-Ministry",
    },
    {
      title: "Marksmen Construction Company Logo",
      year: "2024",
      category: "graphic design",
      imageUrl: "/1.png",
      link: "https://dribbble.com/shots/25848675-Marks-Men-Construction-Logo-design",
    },
    {
      title: "Corporate Investment Errands Logo",
      year: "2024",
      category: "graphic design",
      imageUrl: "/dirt.jpg",
      link: "https://dribbble.com/shots/25848708-Logo-Design-Corporate-Investment-Errands",
    },
    {
      title: "Gospel Campaign Poster Design",
      year: "2024",
      category: "graphic design",
      imageUrl: "/gospel.jpeg",
      link: "https://dribbble.com/shots/25926705-Gospel-Campaign-Flyer-The-Hill-Evangelical-Ministry",
    },
    {
      title: "FD Foodstore Logo",
      year: "2024",
      category: "graphic design",
      imageUrl: "/fd.jpg",
      link: "https://www.behance.net/gallery/219117103/Branding-(Logo-design)-for-FD-Foodstore",
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
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
