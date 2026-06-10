"use client";

import { MapPin, Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useScrollAnimation } from "./use-scroll-animation";

export default function PortfolioBlogSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  // Cursor spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlight = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(600px at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 80%)`,
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#0B0B0F] text-white overflow-hidden"
    >
      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlight }}
      />

      {/* Gradient Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] bottom-[-100px] right-[-50px] animate-pulse" />
      </div>

      {/* Header */}
      <motion.header
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        variants={fadeUp}
        className="relative z-10 flex justify-between items-center p-6 md:p-10"
      >
        <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-110 transition">
          <MapPin size={22} />
        </div>

        <button className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:rotate-90 transition">
          <Menu size={22} />
        </button>
      </motion.header>

      {/* Main Card */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeUp}
          className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.4)] p-8 md:p-16 overflow-hidden"
        >
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-indigo-500/20 opacity-0 hover:opacity-100 transition duration-700" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            {/* LEFT */}
            <motion.div variants={fadeUp} className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  I create & <br /> innovate
                </h2>
                <p className="text-white/60 mt-6 max-w-md">
                  Explore my portfolio of creative builds, real-world projects,
                  and high-performance digital experiences.
                </p>
              </div>

              <Link href="/work">
                <button className="group flex items-center gap-3 mt-12 px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 hover:shadow-xl transition">
                  View My Work
                  <ArrowRight
                    className="group-hover:translate-x-2 transition"
                    size={18}
                  />
                </button>
              </Link>
            </motion.div>

            {/* RIGHT */}
            <motion.div variants={fadeUp} className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  I share <br /> insights
                </h2>
                <p className="text-white/60 mt-6 max-w-md">
                  Thoughts on frontend engineering, UI systems, performance, and
                  building products that actually convert.
                </p>
              </div>

              <button className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black hover:shadow-xl transition">
                Read My Blog
                <ArrowRight
                  className="group-hover:translate-x-2 transition"
                  size={18}
                />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
