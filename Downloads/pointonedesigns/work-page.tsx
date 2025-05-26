"use client"

import { Menu, ExternalLink } from "lucide-react"
import { useState } from "react"
import FooterSection from "./footer-section"
import MobileMenu from "./mobile-menu"
import MouseFollower from "./mouse-follower"

const categories = ["All", "Video Project", "UI Design", "Development"]

const projects = [
  {
    id: 1,
    title: "TravelSphere Booking App",
    category: "Development",
    year: "2024",
    image: "/placeholder.svg?height=300&width=500",
    description: "Affordable Bus Travel from TravelSphere - Book Now",
  },
  {
    id: 2,
    title: "Solar Panel Estimator",
    category: "UI Design",
    year: "2024",
    image: "/placeholder.svg?height=300&width=500",
    description: "Powering homes and businesses with affordable clean energy solutions",
  },
  {
    id: 3,
    title: "Health Monitoring Dashboard",
    category: "Development",
    year: "2024",
    image: "/placeholder.svg?height=300&width=500",
    description: "Personalized Health Tracking with real-time monitoring and insights",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    category: "Development",
    year: "2023",
    image: "/placeholder.svg?height=300&width=500",
    description: "Modern e-commerce solution with advanced features",
  },
  {
    id: 5,
    title: "Brand Identity Design",
    category: "UI Design",
    year: "2023",
    image: "/placeholder.svg?height=300&width=500",
    description: "Complete brand identity and visual design system",
  },
  {
    id: 6,
    title: "Construction Management",
    category: "Development",
    year: "2023",
    image: "/placeholder.svg?height=300&width=500",
    description: "Project management tool for construction companies",
  },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-8 lg:right-16 w-8 h-8 lg:w-12 lg:h-12 bg-cyan-400 rounded-full opacity-60" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-4 lg:p-8">
        <div className="text-purple-600 text-xl lg:text-2xl font-bold font-poppins">alexdev</div>
        <button onClick={() => setIsMobileMenuOpen(true)} className="text-purple-600 p-2 hover-target">
          <Menu size={20} className="lg:w-6 lg:h-6" />
        </button>
      </header>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-4 lg:pt-8">
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
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover-target"
              >
                {/* Project image */}
                <div className="relative h-48 lg:h-64 bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
                  {/* Project mockups - responsive */}
                  {project.id === 1 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-3 lg:p-6 m-2 lg:m-4 w-full">
                        <div className="text-center">
                          <div className="text-lg lg:text-2xl font-bold font-poppins text-purple-600 mb-1 lg:mb-2">
                            Book Now
                          </div>
                          <div className="text-xs lg:text-sm font-montserrat text-gray-600 mb-2 lg:mb-4">
                            Find a good bus ticket for your next trip
                          </div>
                          <div className="bg-purple-600 text-white px-3 lg:px-4 py-1 lg:py-2 rounded text-xs lg:text-sm font-montserrat">
                            Search Bus
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === 2 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-2 lg:p-4 m-2 lg:m-4 w-full">
                        <div className="text-green-600 font-bold font-poppins text-sm lg:text-lg mb-1 lg:mb-2">
                          Solaris Surge
                        </div>
                        <div className="text-xs lg:text-sm font-montserrat text-gray-700 mb-2 lg:mb-3">
                          Powering homes and businesses with affordable clean energy solutions
                        </div>
                        <div className="bg-green-600 text-white px-2 lg:px-3 py-1 rounded text-xs font-montserrat">
                          Get Started
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === 3 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                      <div className="text-white p-2 lg:p-4 w-full">
                        <div className="text-xs lg:text-sm font-montserrat mb-2 lg:mb-4">WHY WE STAND OUT</div>
                        <div className="grid grid-cols-3 gap-1 lg:gap-2 text-xs font-montserrat">
                          <div className="bg-slate-600 p-1 lg:p-2 rounded">
                            <div className="text-cyan-400">📊</div>
                            <div className="text-xs">Health Tracking</div>
                          </div>
                          <div className="bg-slate-600 p-1 lg:p-2 rounded">
                            <div className="text-red-400">❤️</div>
                            <div className="text-xs">Monitoring</div>
                          </div>
                          <div className="bg-slate-600 p-1 lg:p-2 rounded">
                            <div className="text-purple-400">📈</div>
                            <div className="text-xs">Reports</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id > 3 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                      <div className="text-gray-600 text-2xl lg:text-4xl">🚀</div>
                    </div>
                  )}
                </div>

                {/* Project info */}
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-semibold font-poppins text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs lg:text-sm font-montserrat mb-3 lg:mb-4 uppercase tracking-wide">
                    {project.category} • {project.year}
                  </p>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-300 group/btn hover-target">
                    <span className="text-xs lg:text-sm font-medium font-montserrat">View Details</span>
                    <ExternalLink
                      size={14}
                      className="lg:w-4 lg:h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterSection />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <MouseFollower />
    </div>
  )
}
