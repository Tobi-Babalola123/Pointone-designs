"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import MobileMenu from "@/mobile-menu";

/* =========================
   SPATIAL BACKGROUND SYSTEM
========================= */

function SpatialBackground() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      document.documentElement.style.setProperty("--mx", `${x}`);
      document.documentElement.style.setProperty("--my", `${y}`);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#06060a] overflow-hidden">
      {/* deep gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black" />

      {/* Vision Pro light fields */}
      <div
        className="absolute w-[800px] h-[800px] bg-purple-500/20 blur-[160px] rounded-full"
        style={{
          transform:
            "translate(calc(var(--mx) * 40px), calc(var(--my) * 40px))",
        }}
      />

      <div
        className="absolute bottom-[-25%] right-[-15%] w-[700px] h-[700px] bg-lime-400/10 blur-[180px] rounded-full"
        style={{
          transform:
            "translate(calc(var(--mx) * -30px), calc(var(--my) * -30px))",
        }}
      />

      {/* subtle grid depth */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
    </div>
  );
}

/* =========================
   GLASS CARD SYSTEM
========================= */
function GlassCard({ children }: any) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        rotateX: 3,
        rotateY: -3,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
      className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-3xl bg-white/5 shadow-2xl"
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-purple-500/20 to-lime-400/10" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/* =========================
   MAIN SPATIAL HERO SECTION
========================= */
export default function SpatialOS() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scenes = [
    {
      title: "Frontend Developer Crafting High-End Web Experiences",
      text: "I build modern, performant, and visually immersive web interfaces using React, Next.js, and advanced UI systems.",
    },
    {
      title: "Specialized in UI Engineering & Animations",
      text: "I design and develop smooth, Apple-level interactions using Framer Motion, GSAP, and spatial UI principles.",
    },
    {
      title: "Real-World Experience",
      text: "Internships and projects including e-commerce platforms, health apps, dashboards, and SaaS interfaces.",
    },
    {
      title: "Let’s Build Something Exceptional",
      text: "Available for frontend roles, freelance projects, and product collaborations. Let’s connect and build something world-class.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      const totalScroll = window.innerHeight * (scenes.length - 1);
      const progress = scrollY / totalScroll;

      setProgress(progress);

      const newIndex = Math.min(
        scenes.length - 1,
        Math.round(progress * (scenes.length - 1)),
      );

      setIndex(newIndex);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="text-white">
      {/* BACKGROUND */}
      <SpatialBackground />

      {/* NAV (FIXED BRAND) */}
      <>
        <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-xl bg-black/20 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-semibold text-white/80 hover:text-lime-300 transition"
          >
            Tobi Babalola
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white/70 hover:text-white transition"
          >
            <Menu size={24} />
          </button>
        </div>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </>
      {/* SPATIAL SCROLL HERO SYSTEM */}
      <section className="relative min-h-screen lg:h-[420vh]">
        <div className="lg:sticky top-0 min-h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl w-full items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6 text-center lg:text-left">
              {/* TITLE */}
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight break-words"
              >
                <span className="text-lime-300">{scenes[index].title}</span>
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                key={index + "-p"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white/70 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed"
              >
                {scenes[index].text}
              </motion.p>

              {/* PROGRESS INDICATOR */}
              <div className="flex gap-2 pt-4 justify-center lg:justify-start">
                {scenes.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-10 bg-lime-300" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              {/* CTA SYSTEM */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                {/* PRIMARY CTA */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 25px rgba(163,230,53,0.25)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-lime-400 text-black rounded-full font-medium w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://wa.me/2348105333852?text=Hi%20I%20am%20interested%20in%20getting%20a%20premium%20website%20for%20my%20business",
                      "_blank",
                    )
                  }
                >
                  Talk to Expert
                </motion.button>

                {/* SECONDARY CTA */}
                <Link href="/work">
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(255,255,255,0.08)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-white/20 rounded-full w-full sm:w-auto"
                  >
                    View Work
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[480px] aspect-square mx-auto transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${1 + progress * 0.05})`,
                }}
              >
                <GlassCard>
                  <Image
                    src="/engineer.png"
                    alt="Solar installation"
                    width={600}
                    height={600}
                    priority
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </GlassCard>

                {/* FLOATING TAGS */}
                <div className="absolute -top-3 left-2 bg-lime-300 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Premium Solar
                </div>

                <div className="absolute bottom-2 right-2 bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-xs">
                  Vision Pro UI Layer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
