import { MapPin } from "lucide-react"
import { useScrollAnimation } from "./use-scroll-animation"

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements - responsive */}
      <div className="absolute inset-0">
        {/* Dotted pattern - smaller on mobile */}
        <div
          className={`absolute top-20 right-8 lg:right-32 grid grid-cols-6 lg:grid-cols-8 gap-1 opacity-20 lg:opacity-30 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-20 lg:opacity-30" : "translate-x-10 opacity-0"}`}
        >
          {Array.from({ length: window.innerWidth < 1024 ? 36 : 64 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-gray-400 rounded-full hover:bg-purple-400 transition-colors duration-300"
            />
          ))}
        </div>

        {/* Pagination dots - responsive positioning */}
        <div
          className={`absolute top-1/4 left-1/2 transform -translate-x-1/2 flex space-x-2 lg:space-x-3 transition-all duration-1000 delay-400 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-500 hover:scale-150 ${i === 0 ? "bg-purple-600" : "bg-gray-300"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        {/* Bottom pagination dots - responsive */}
        <div
          className={`absolute bottom-1/4 left-1/4 lg:left-1/3 flex space-x-2 lg:space-x-3 transition-all duration-1000 delay-600 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-500 hover:scale-150 ${i === 0 ? "bg-purple-600" : "bg-gray-300"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        {/* Decorative elements - hidden on small screens */}
        <div className="hidden md:block">
          {/* Stepped line graphic */}
          <div
            className={`absolute bottom-1/3 left-1/3 w-12 lg:w-16 h-12 lg:h-16 opacity-40 transition-all duration-1000 delay-500 ${isVisible ? "scale-100 rotate-0" : "scale-0 rotate-45"}`}
          >
            <svg viewBox="0 0 64 64" className="w-full h-full stroke-purple-400 fill-none stroke-2">
              <path
                d="M0 48 L16 48 L16 32 L32 32 L32 16 L48 16"
                className="animate-pulse"
                style={{ animationDuration: "3s" }}
              />
            </svg>
          </div>

          {/* Diamond shapes */}
          <div
            className={`absolute right-4 lg:right-8 top-1/2 space-y-3 lg:space-y-4 transition-all duration-1000 delay-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`${i === 3 ? "w-3 h-3 lg:w-4 lg:h-4 border-2 border-purple-400" : "w-2 h-2 lg:w-3 lg:h-3 bg-purple-600"} rotate-45 hover:scale-125 transition-all duration-300`}
                style={{
                  animationDelay: `${i * 150}ms`,
                  animation: isVisible ? "bounce 3s infinite" : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* Circular element */}
        <div
          className={`absolute top-32 right-8 lg:right-16 w-8 h-8 lg:w-12 lg:h-12 bg-cyan-400 rounded-full opacity-60 transition-all duration-1000 delay-200 hover:scale-110 ${isVisible ? "translate-y-0 opacity-60" : "-translate-y-10 opacity-0"}`}
        />
      </div>

      {/* Header */}
      <header
        className={`relative z-10 flex justify-between items-center p-4 lg:p-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
      >
        <div className="text-purple-600 p-2 hover:scale-110 transition-transform duration-300">
          <MapPin size={20} className="lg:w-6 lg:h-6" />
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Design section */}
          <div
            className={`space-y-6 lg:space-y-10 text-center lg:text-left transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins text-purple-600 leading-tight hover:scale-105 transition-transform duration-300">
              Design
            </h2>
            <p
              className={`text-gray-700 text-base lg:text-lg font-montserrat leading-relaxed max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Creating visually stunning and intuitive interfaces that captivate users. My design philosophy centers on
              clean aesthetics, purposeful layouts, and meaningful interactions that enhance the overall user journey.
            </p>
          </div>

          {/* Engineering section */}
          <div
            className={`flex flex-col justify-center space-y-6 lg:space-y-10 mt-12 lg:mt-48 text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins text-purple-600 leading-tight hover:scale-105 transition-transform duration-300">
              Engineering
            </h2>
            <p
              className={`text-gray-700 text-base lg:text-lg font-montserrat leading-relaxed max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Building robust, scalable applications with cutting-edge technologies. I focus on writing clean,
              maintainable code that performs exceptionally well and adapts seamlessly to evolving business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
