import { MapPin, Menu } from "lucide-react"
import { useScrollAnimation } from "./use-scroll-animation"
import Image from "next/image"

export default function WorkExperienceSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const isLoaded = isVisible

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 relative overflow-hidden"
    >
      {/* Background decorative elements - responsive */}
      <div className="absolute inset-0">
        {/* Large circles - smaller on mobile */}
        <div
          className={`absolute top-32 right-1/4 lg:right-1/3 w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-full opacity-60 lg:opacity-80 transition-all duration-1000 delay-200 ${isVisible ? "scale-100 opacity-60 lg:opacity-80" : "scale-0 opacity-0"}`}
        />
        <div
          className={`absolute bottom-1/3 left-1/2 lg:left-2/3 w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full opacity-40 lg:opacity-60 transition-all duration-1000 delay-400 ${isVisible ? "scale-100 opacity-40 lg:opacity-60" : "scale-0 opacity-0"}`}
        />
        <div
          className={`absolute top-2/3 right-1/6 lg:right-1/4 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full opacity-50 lg:opacity-70 transition-all duration-1000 delay-300 ${isVisible ? "scale-100 opacity-50 lg:opacity-70" : "scale-0 opacity-0"}`}
        />

        {/* Plus signs - fewer on mobile */}
        {[
          { top: "25%", right: "40%", delay: 500 },
          { top: "50%", right: "25%", delay: 600 },
          { bottom: "33%", right: "45%", delay: 700 },
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute text-white text-lg lg:text-2xl opacity-40 lg:opacity-60 transition-all duration-1000 hover:rotate-90 hover:scale-125 ${isVisible ? "rotate-0 opacity-40 lg:opacity-60" : "rotate-45 opacity-0"}`}
            style={{
              ...pos,
              transitionDelay: `${pos.delay}ms`,
            }}
          >
            +
          </div>
        ))}

        {/* Company logos - responsive positioning */}
        <div
          className={`absolute top-1/3 right-1/5 lg:right-1/4 text-lime-400 font-bold font-poppins text-xs lg:text-sm opacity-60 lg:opacity-80 rotate-12 transition-all duration-1000 delay-600 hover:scale-110 ${isVisible ? "translate-y-0 opacity-60 lg:opacity-80" : "translate-y-5 opacity-0"}`}
        >
          TechFlow
        </div>
        <div
          className={`absolute bottom-1/2 right-1/4 lg:right-1/3 text-lime-400 font-bold font-poppins text-xs lg:text-sm opacity-60 lg:opacity-80 rotate-6 transition-all duration-1000 delay-800 hover:scale-110 ${isVisible ? "translate-y-0 opacity-60 lg:opacity-80" : "translate-y-5 opacity-0"}`}
        >
          Solaris Surge
        </div>
        <div
          className={`absolute bottom-1/4 right-1/2 lg:right-2/3 text-lime-400 font-bold font-poppins text-sm lg:text-lg opacity-70 lg:opacity-90 transition-all duration-1000 delay-900 hover:scale-110 ${isVisible ? "translate-y-0 opacity-70 lg:opacity-90" : "translate-y-5 opacity-0"}`}
        >
       Tobi
        </div>
      </div>

      {/* Header */}
      <header
        className={`relative z-10 flex justify-between items-center p-4 lg:p-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
      >
        <div className="text-lime-400 p-2 hover:scale-110 transition-transform duration-300">
          <MapPin size={20} className="lg:w-6 lg:h-6" />
        </div>
        <button className="text-lime-400 p-2 hover:rotate-90 transition-transform duration-300">
          <Menu size={20} className="lg:w-6 lg:h-6" />
        </button>
      </header>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-4 lg:pt-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left content - Text */}
          <div className="space-y-6 lg:space-y-8 mb-16 text-center lg:text-left">
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins text-lime-400 leading-tight transition-all duration-1000 delay-200 hover:scale-105 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
            >
              My
              <br />
              Journey,
            </h2>

            <div className="space-y-4 lg:space-y-6 text-white text-sm lg:text-lg font-montserrat leading-relaxed">
              {[
                "As a frontend developer, I've collaborated with cross-functional teams to build user-centric digital experiences that solve real-world problems across different industries.",
                "I'm currently focused on building responsive and interactive web applications using modern technologies like React and Tailwind CSS.",
                "In past roles, I’ve contributed to projects ranging from solar estimate platforms to transport booking systems, consistently translating design visions into functional, scalable interfaces.",
                "My strength lies in crafting clean, accessible, and pixel-perfect UIs while ensuring performance and responsiveness across devices.",
                "I'm committed to continuous growth and enjoy sharing insights through collaboration, design feedback, and helping others grow in the developer space.",
              ].map((text, i) => (
                <p
                  key={i}
                  className={`transition-all duration-1000 hover:translate-x-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Right content - Image with responsive sizing */}
          <div
            className={`relative flex justify-center items-center mt-8 lg:mt-0 transition-all duration-1000 delay-400 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Central image */}
              <div className="absolute inset-6 lg:inset-8 group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/engineer.png?height=320&width=320"
                    alt="Professional workspace"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent" />
                </div>
              </div>

              {/* Responsive badges and elements */}

              {/* Top left - Experience badge */}
              <div
                className={`absolute top-0 left-0 bg-lime-400 text-purple-900 px-2 lg:px-4 py-1 lg:py-2 rounded-lg font-bold font-poppins text-xs lg:text-sm shadow-lg transition-all duration-1000 delay-600 hover:scale-110 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
              >
                4+ Years
              </div>

              {/* Top right - Skills indicator */}
              <div
                className={`absolute top-2 lg:top-4 right-0 bg-white text-purple-600 px-2 lg:px-3 py-1 lg:py-2 rounded-full text-xs font-semibold font-montserrat shadow-md transition-all duration-1000 delay-700 hover:rotate-12 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
              >
                Frontend Dev
              </div>

              {/* Left side - Tech stack */}
              <div
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 lg:-translate-x-4 bg-purple-800 text-lime-400 px-2 lg:px-3 py-2 lg:py-4 rounded-lg shadow-lg transition-all duration-1000 delay-800 hover:scale-105 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <div className="text-xs font-bold font-poppins mb-1 lg:mb-2">Tech Stack</div>
                <div className="space-y-1 text-xs font-montserrat">
                  <div>React</div>
                  <div>Next.js</div>
                  <div className="hidden lg:block">Tailwindcss</div>
                </div>
              </div>

              {/* Right side - Achievement */}
              <div
                className={`absolute right-0 top-1/3 transform translate-x-2 lg:translate-x-4 bg-lime-400 text-purple-900 px-2 lg:px-3 py-2 lg:py-3 rounded-lg shadow-lg transition-all duration-1000 delay-900 hover:scale-105 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <div className="text-xs font-bold font-poppins mb-1">Projects</div>
                <div className="text-lg font-bold font-poppins">8+</div>
                <div className="text-xs font-montserrat">Delivered</div>
              </div>

              {/* Bottom left - Location */}
              <div
                className={`absolute bottom-0 left-2 lg:left-4 bg-white text-purple-600 px-2 lg:px-3 py-1 lg:py-2 rounded-lg shadow-md transition-all duration-1000 delay-1000 hover:scale-110 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              >
                <div className="text-xs font-semibold font-montserrat">📍 Remote</div>
              </div>

              {/* Bottom right - Status */}
              <div
                className={`absolute bottom-2 lg:bottom-4 right-2 lg:right-4 bg-green-500 text-white px-2 lg:px-3 py-1 lg:py-2 rounded-full text-xs font-bold font-poppins shadow-lg transition-all duration-1000 delay-1100 hover:pulse ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              >
                Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
