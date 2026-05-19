"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateMousePosition = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // MAIN CURSOR (fast DOM update, no re-render)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // TRAIL
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // RIPPLE
      if (rippleRef.current) {
        rippleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);

    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea, [role='button'], .hover-target",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* MAIN CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{ transform: "translate3d(-50%, -50%, 0)" }}
      >
        <div
          className={`w-6 h-6 rounded-full transition-all duration-200 ${
            isHovering ? "bg-purple-500 scale-150" : "bg-purple-400 scale-100"
          }`}
        />
      </div>

      {/* TRAIL */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{ transform: "translate3d(-50%, -50%, 0)" }}
      >
        <div className="w-3 h-3 bg-lime-400 rounded-full opacity-40 blur-sm" />
      </div>

      {/* RIPPLE */}
      <div
        ref={rippleRef}
        className="fixed top-0 left-0 pointer-events-none z-30"
        style={{ transform: "translate3d(-50%, -50%, 0)" }}
      >
        <div
          className={`w-10 h-10 rounded-full border border-purple-400 transition-all duration-300 ${
            isHovering ? "opacity-30 scale-150" : "opacity-0 scale-0"
          }`}
        />
      </div>
    </>
  );
}
