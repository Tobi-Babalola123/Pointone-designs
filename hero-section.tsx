"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import FloatingMenuButton from "./floating-menu-button";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Decide number of dots based on width (default 96 if unknown)
  const dotCount = windowWidth && windowWidth < 1024 ? 32 : 96;

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
          className={`absolute top-20 right-4 lg:right-1/2 lg:transform lg:translate-x-16 grid grid-cols-8 lg:grid-cols-12 gap-1 opacity-30 lg:opacity-50 transition-all duration-1000 delay-300 ${
            isLoaded
              ? "translate-x-0 opacity-30 lg:opacity-50"
              : "translate-x-4 lg:translate-x-24 opacity-0"
          }`}
        >
          {Array.from({ length: dotCount }).map((_, i) => (
            <div
              key={`dot-${i}`}
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
          className={`absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 transition-all duration-1000 delay-600 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
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
            className={`absolute bottom-16 right-12 grid grid-cols-4 gap-1 opacity-70 transition-all duration-1000 delay-500 ${
              isLoaded ? "translate-y-0 opacity-70" : "translate-y-8 opacity-0"
            }`}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={`small-dot-${i}`}
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
            className={`absolute bottom-1/3 left-1/3 w-16 lg:w-20 h-12 lg:h-16 opacity-60 transition-all duration-1000 delay-400 ${
              isLoaded ? "scale-100 rotate-0" : "scale-0 rotate-45"
            }`}
          >
            <svg
              viewBox="0 0 80 64"
              className="w-full h-full stroke-lime-400 fill-none stroke-2"
            >
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
        className={`relative z-10 flex justify-between items-center p-4 lg:p-8 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <div className="text-lime-400 text-xl lg:text-2xl font-bold font-poppins hover:scale-110 transition-transform duration-300">
          Tobi Babalola
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-lime-400 p-2 hover:scale-110 transition-transform duration-300"
          aria-label="Open mobile menu"
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
        <div className="grid lg:grid-cols-12 gap-8 items-center justify-items-center text-center lg:text-left min-h-[80vh] lg:min-h-[90vh]">
          {/* Left content - centralized on small screens, 6 columns on desktop */}
          <div
            className={`col-span-full lg:col-span-6 space-y-6 lg:space-y-8 transition-all duration-1000 delay-200 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="px-4 sm:px-6 lg:px-0">
              <h1 className="text-4xl sm:text-5xl lg:ml-20 lg:text-6xl xl:text-7xl font-bold font-poppins text-lime-400 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  Frontend
                </span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  Developer.
                </span>
              </h1>
              <p
                className={`text-white text-base lg:text-lg lg:ml-20 font-montserrat font-medium mt-4 lg:mt-6 max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-400 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                Transforming ideas into exceptional digital experiences through
                innovative web development and thoughtful design.
              </p>
            </div>

            {/* Feature boxes */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-8 pt-4 lg:pt-8 px-4 sm:px-6 lg:px-0">
              <div
                className={`space-y-2 lg:ml-20 transition-all duration-1000 delay-500 hover:scale-105 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h3 className="text-lime-400 font-semibold font-montserrat text-sm lg:text-base leading-relaxed">
                  Specialized in modern web technologies, responsive design, and
                  creating seamless user interfaces.
                </h3>
              </div>
              <div
                className={`space-y-2 transition-all duration-1000 delay-600 hover:scale-105 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h3 className="text-lime-400 font-semibold font-montserrat text-sm lg:text-base leading-relaxed">
                  Passionate about delivering high-quality solutions that drive
                  business growth and user satisfaction.
                </h3>
              </div>
            </div>
          </div>

          {/* Right content - Profile image */}
          <div className="col-span-full lg:col-span-6">
            <div className="relative group w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] mx-auto">
              {/* Elegant glassmorphic frame with animation */}
              <div className="absolute inset-0 rounded-xl border border-lime-400/40 bg-lime-400/20 backdrop-blur-md shadow-lg shadow-lime-500/40 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1" />

              {/* Profile Image with hover pulse effect */}
              <Image
                src="/tobi.webp"
                alt="Portrait of Tobi Babalola"
                title="Tobi Babalola"
                aria-label="Tobi Babalola profile picture"
                fill
                className="object-cover rounded-xl relative z-10 shadow-lg shadow-lime-500/60 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-lime-400/80"
                priority
                sizes="(max-width: 1024px) 20rem, 24rem"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating menu button and mobile menu */}
      <FloatingMenuButton onClick={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </section>
  );
}
