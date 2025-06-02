"use client";

import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Prevent running this effect during SSR
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseLeaveElement = () => setIsHovering(false);

    // Track mouse movement
    window.addEventListener("mousemove", updateMousePosition);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea, [role='button'], .hover-target"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeaveElement);
    });

    // Hide cursor when mouse leaves window
    document.addEventListener("mouseleave", handleMouseLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeaveElement);
      });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor follower */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Outer glow */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ease-out ${
            isHovering
              ? "w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-400 to-lime-400 opacity-30 blur-md scale-150"
              : "w-12 h-12 bg-gradient-to-r from-purple-500 via-purple-400 to-lime-400 opacity-20 blur-lg"
          }`}
          style={{ transform: "translate(-50%, -50%)" }}
        />

        {/* Inner core */}
        <div
          className={`absolute rounded-full transition-all duration-200 ease-out ${
            isHovering
              ? "w-8 h-8 bg-gradient-to-r from-purple-600 to-lime-500 opacity-80 scale-125"
              : "w-6 h-6 bg-gradient-to-r from-purple-500 to-lime-400 opacity-60"
          }`}
          style={{ transform: "translate(-50%, -50%)" }}
        />

        {/* Center dot */}
        <div
          className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-150 ease-out ${
            isHovering ? "opacity-100 scale-150" : "opacity-80"
          }`}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>

      {/* Trailing particles */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div
          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse"
          style={{
            transform: "translate(-20px, -20px)",
            animationDelay: "0s",
            animationDuration: "2s",
          }}
        />
        <div
          className="absolute w-1 h-1 bg-lime-400 rounded-full opacity-30 animate-pulse"
          style={{
            transform: "translate(15px, -25px)",
            animationDelay: "0.5s",
            animationDuration: "2.5s",
          }}
        />
        <div
          className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-35 animate-pulse"
          style={{
            transform: "translate(-15px, 20px)",
            animationDelay: "1s",
            animationDuration: "3s",
          }}
        />
      </div>

      {/* Ripple effect on click */}
      <div
        className="fixed pointer-events-none z-30"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`absolute rounded-full border-2 border-purple-400 transition-all duration-500 ease-out ${
            isHovering
              ? "w-20 h-20 opacity-20 animate-ping"
              : "w-0 h-0 opacity-0"
          }`}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>
    </>
  );
}
