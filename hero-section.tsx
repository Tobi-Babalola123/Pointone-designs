"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import FloatingMenuButton from "./floating-menu-button";

const bounceVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
  }),
};

const text = "Tobi Babalola";

const name = "Tobi Babalola";

const letterAnimation = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // ✅ renamed no longer conflicts
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  // Detect mobile screen
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle windowWidth and loaded state
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
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        {/* Purple background: 70% height on mobile, 70% width on desktop */}
        <div className="w-full h-[60%] lg:w-2/3 lg:h-full bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500" />

        {/* Lime green background: 30% height on mobile, 30% width on desktop */}
        <div className="w-full h-[38%] lg:w-1/3 lg:h-full bg-lime-400" />
      </div>

      {/* Background decorative elements - reduced on mobile */}
      <div className="absolute inset-0">
        {/* Dotted grid pattern - smaller on mobile */}
        <div
          className={`absolute grid grid-cols-8 lg:grid-cols-12 gap-1 opacity-30 lg:opacity-50 transition-all duration-1000 delay-300 ${
            isLoaded
              ? "translate-x-0 opacity-30 lg:opacity-50"
              : "translate-x-4 lg:translate-x-24 opacity-0"
          }`}
          style={{
            top: "8rem", // equivalent to top-40
            right: "31.5rem", // adjusted from right-4
          }}
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

        {/* Crystal/Diamond pattern */}
        <div
          className={`absolute transition-all duration-1000 delay-600 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{
            top: "65%", // moves it further down
            right: "1.5rem", // moves it further right
            transform: "translateY(-50%) translateX(1rem)", // additional nudge
          }}
        >
          <div className="relative scale-75 lg:scale-100">
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
            className={`absolute grid grid-cols-4 gap-1 opacity-70 transition-all duration-1000 delay-500 ${
              isLoaded ? "translate-y-0 opacity-70" : "translate-y-8 opacity-0"
            }`}
            style={{
              bottom: "1.5rem", // equivalent to bottom-6
              right: "2rem", // adjusted from right-12
            }}
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
            className={`absolute w-16 lg:w-20 h-12 lg:h-16 opacity-60 transition-all duration-1000 delay-400 ${
              isLoaded ? "scale-100 rotate-0" : "scale-0 rotate-45"
            }`}
            style={{
              bottom: "20%", // was bottom-1/3
              left: "60%", // was left-1/3
            }}
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
        <Link href="/">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="ml-6 mt-6 overflow-hidden text-lime-400 text-xl lg:text-2xl font-bold font-poppins cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <span className="inline-block">Tobi Babalola</span>
          </motion.div>
        </Link>

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
            <div
              className={`mt-8 mb-12 px-4 sm:px-6 lg:px-0 max-w-md mx-auto lg:mx-0 lg:max-w-none ${
                isMobile ? "ml-8" : ""
              }`}
            >
              <h1 className="text-5xl sm:text-4xl lg:ml-20 lg:text-5xl xl:text-6xl font-bold font-poppins text-lime-400 leading-tight text-left lg:text-left lg:ml-20">
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  Frontend
                </span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  Developer<span className="text-white">.</span>
                </span>
              </h1>

              <p
                className={`text-white text-sm lg:text-base font-montserrat font-medium mt-4 lg:mt-6 max-w-lg mx-auto lg:mx-0 text-left lg:text-left lg:ml-20 transition-all duration-1000 delay-400 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                {isMobile ? (
                  <>
                    Transforming ideas into exceptional <br />
                    digital experiences through innovative <br />
                    web development and thoughtful design.
                  </>
                ) : (
                  <>
                    Transforming ideas into exceptional digital experiences
                    through innovative web development and thoughtful design.
                  </>
                )}
              </p>
            </div>

            {/* Feature boxes */}
            <div className="-mb-12 grid grid-cols-2 gap-4 lg:gap-8 pt-4 lg:pt-8 px-4 sm:px-6 lg:px-0">
              <div
                className={`space-y-2 lg:ml-20 transition-all duration-1000 delay-500 hover:scale-105 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h3 className="text-lime-400 font-montserrat text-[11px] lg:text-sm leading-relaxed text-left lg:text-left ml-8 lg:ml-0 ">
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
                <h3 className="text-lime-400 font-montserrat text-[11px] lg:text-sm leading-relaxed text-left lg:text-center">
                  Passionate about delivering <br /> high-quality solutions that
                  <br /> drive business growth and <br />
                  user satisfaction.
                </h3>
              </div>
            </div>
          </div>

          {/* Right content - Profile image */}
          <div className="col-span-full lg:col-span-6 flex justify-center mt-16 lg:mt-0">
            <div className="relative group w-56 h-64 sm:w-64 sm:h-72 lg:w-72 lg:h-80 lg:translate-y-[-6rem] lg:-ml-40">
              {/* Elegant glassmorphic frame with animation */}
              <div className="absolute inset-0 rounded-xl border border-lime-400/40 bg-lime-400/20 backdrop-blur-md shadow-lg shadow-lime-500/40 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1" />

              {/* Profile Image with hover pulse effect */}
              <Image
                src="/tobi.jpeg"
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
      <FloatingMenuButton onMenuToggle={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </section>
  );
}
