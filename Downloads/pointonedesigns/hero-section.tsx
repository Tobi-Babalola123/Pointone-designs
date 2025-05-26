"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import MobileMenu from "./mobile-menu"
import FloatingMenuButton from "./floating-menu-button"

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen lg:min-h-[120vh] relative overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 flex">
        {/* Purple background - full width on mobile, 2/3 on desktop */}
        <div className="w-full lg:w-2/3 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500" />
        {/* Lime green background - hidden on mobile, 1/3 on desktop */}
        <div className="hidden lg:block lg:w-1/3 bg-lime-400" />
      </div>

      {/* Background decorative elements - reduced on mobile */}
      <div className="absolute inset-0">
        {/* Dotted grid pattern - smaller on mobile */}
        <div
          className={`absolute top-20 right-4 lg:right-1/2 lg:transform lg:translate-x-16 grid grid-cols-8 lg:grid-cols-12 gap-1 opacity-30 lg:opacity-50 transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-30 lg:opacity-50" : "translate-x-4 lg:translate-x-24 opacity-0"}`}
        >
          {Array.from({ length: window.innerWidth < 1024 ? 32 : 96 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-white rounded-full"
              style={{
                animationDelay: `${i * 20}ms`,
                animation: isLoaded ? "pulse 3s infinite" : "none",
              }}
            />
          ))}
        </div>

        {/* Crystal/Diamond pattern - simplified on mobile */}
        <div
          className={`absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 transition-all duration-1000 delay-600 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
        >
          <div className="relative scale-75 lg:scale-100">
            {/* Simplified diamond for mobile */}
            <div className="flex justify-center mb-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
            </div>
            <div className="flex justify-center space-x-1 mb-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
            </div>
            <div className="flex justify-center space-x-1 mb-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
            </div>
            <div className="hidden lg:flex justify-center space-x-1 mb-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
            </div>
            <div className="flex justify-center space-x-1 mb-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
            </div>
            <div className="flex justify-center space-x-1 mb-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
            </div>
            <div className="flex justify-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
            </div>
          </div>
        </div>

        {/* Decorative elements - hidden on small screens */}
        <div className="hidden md:block">
          {/* Small dotted pattern */}
          <div
            className={`absolute bottom-16 right-12 grid grid-cols-4 gap-1 opacity-70 transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-70" : "translate-y-8 opacity-0"}`}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-purple-600 rounded-full"
                style={{
                  animationDelay: `${i * 40}ms`,
                  animation: isLoaded ? "pulse 2.5s infinite" : "none",
                }}
              />
            ))}
          </div>

          {/* Stepped line graphics */}
          <div
            className={`absolute bottom-1/3 left-1/3 w-16 lg:w-20 h-12 lg:h-16 opacity-60 transition-all duration-1000 delay-400 ${isLoaded ? "scale-100 rotate-0" : "scale-0 rotate-45"}`}
          >
            <svg viewBox="0 0 80 64" className="w-full h-full stroke-lime-400 fill-none stroke-2">
              <path
                d="M0 48 L12 48 L12 36 L24 36 L24 24 L36 24 L36 12 L48 12 L48 0"
                className="animate-pulse"
                style={{ animationDuration: "3s" }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`relative z-10 flex justify-between items-center p-4 lg:p-8 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        <div className="text-lime-400 text-xl lg:text-2xl font-bold font-poppins hover:scale-110 transition-transform duration-300">
          Tobi Babalola
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-lime-400 p-2 hover:scale-110 transition-transform duration-300"
        >
          <div className="space-y-1">
            <div className="w-5 lg:w-6 h-0.5 bg-lime-400"></div>
            <div className="w-5 lg:w-6 h-0.5 bg-lime-400"></div>
            <div className="w-5 lg:w-6 h-0.5 bg-lime-400"></div>
          </div>
        </button>
      </header>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-4 lg:pt-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh] lg:min-h-[90vh]">
          {/* Left content - spans full width on mobile, 6 columns on desktop */}
          <div
            className={`lg:col-span-6 space-y-6 lg:space-y-8 text-center lg:text-left transition-all duration-1000 delay-200 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins text-lime-400 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">Creative</span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300">Developer.</span>
              </h1>
              <p
                className={`text-white text-base lg:text-lg font-montserrat font-medium mt-4 lg:mt-6 max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              >
                Transforming ideas into exceptional digital experiences through innovative web development and
                thoughtful design.
              </p>
            </div>

            {/* Feature boxes */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-8 pt-4 lg:pt-8">
              <div
                className={`space-y-2 transition-all duration-1000 delay-500 hover:scale-105 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <h3 className="text-lime-400 font-semibold font-montserrat text-sm lg:text-base leading-relaxed">
                  Specialized in modern web technologies, responsive design, and creating seamless user interfaces.
                </h3>
              </div>
              <div
                className={`space-y-2 transition-all duration-1000 delay-600 hover:scale-105 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <h3 className="text-lime-400 font-semibold font-montserrat text-sm lg:text-base leading-relaxed">
                  Passionate about delivering high-quality solutions that drive business growth and user satisfaction.
                </h3>
              </div>
            </div>
          </div>

          {/* Right content - Profile image */}
          <div
            className={`lg:col-span-6 flex items-center justify-center mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
            style={{ transform: window.innerWidth >= 1024 ? "translateX(-30px)" : "none" }}
          >
            <div className="relative group">
              <div className="relative">
                {/* White frame with responsive sizing */}
                <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500">
                  {/* Profile image - responsive sizing */}
                  <div className="relative bg-gray-200 rounded-lg overflow-hidden w-40 h-44 sm:w-48 sm:h-52 lg:w-52 lg:h-56">
                    <Image
                      src="/tobi.webp\?height=350&width=325"
                      alt="Creative Developer Portrait"
                      width={325}
                      height={350}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Lime green border frame */}
                <div className="absolute -inset-1 border-2 lg:border-4 border-lime-400 rounded-lg pointer-events-none group-hover:border-lime-300 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingMenuButton onMenuToggle={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </section>
  )
}
