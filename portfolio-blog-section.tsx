import { MapPin, Menu, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "./use-scroll-animation"

export default function PortfolioBlogSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Diamond shapes with staggered animation */}
        <div
          className={`absolute right-8 top-1/2 space-y-4 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`${i === 3 ? "w-4 h-4 border-2 border-purple-400" : "w-3 h-3 bg-purple-600"} rotate-45 hover:scale-125 transition-all duration-300`}
              style={{
                animationDelay: `${i * 150}ms`,
                animation: isVisible ? "bounce 3s infinite" : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header
        className={`relative z-10 flex justify-between items-center p-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
      >
        <div className="text-purple-600 p-2 hover:scale-110 transition-transform duration-300">
          <MapPin size={24} />
        </div>
        <button className="text-purple-600 p-2 hover:rotate-90 transition-transform duration-300">
          <Menu size={24} />
        </button>
      </header>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 relative">
            {/* Vertical divider with grow animation */}
            <div
              className={`absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2 hidden lg:block transition-all duration-1000 delay-200 ${isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
              style={{ transformOrigin: "top" }}
            />

            {/* Left section - Portfolio */}
            <div
              className={`space-y-8 lg:pr-8 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
            >
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold font-poppins text-purple-600 leading-tight hover:scale-105 transition-transform duration-300">
                  I create &<br />
                  innovate
                </h2>
                <p
                  className={`text-gray-600 text-lg font-montserrat leading-relaxed max-w-md transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                >
                  Explore my portfolio of creative projects, innovative solutions, and digital experiences.
                </p>
              </div>

              <div
                className={`pt-8 transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <Link href="/work">
                  <button className="group flex items-center space-x-4 px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold font-montserrat hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300">
                    <span>VIEW MY WORK</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right section - Blog */}
            <div
              className={`space-y-8 lg:pl-8 transition-all duration-1000 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
            >
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold font-poppins text-purple-600 leading-tight hover:scale-105 transition-transform duration-300">
                  I share,
                  <br />
                  insights
                </h2>
                <p
                  className={`text-gray-600 text-lg font-montserrat leading-relaxed max-w-md transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                >
                  Discover my thoughts on technology, development trends, and creative processes.
                </p>
              </div>

              <div
                className={`pt-8 transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <button className="group flex items-center space-x-4 px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold font-montserrat hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300">
                  <span>READ MY BLOG</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
