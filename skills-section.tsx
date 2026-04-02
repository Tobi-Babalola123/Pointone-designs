"use client";

import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] overflow-hidden bg-[#f6f7fb]"
    >
      {/* ================= VISION PRO BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 w-[500px] h-[500px] bg-purple-300/25 blur-[120px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[420px] h-[420px] bg-cyan-300/20 blur-[120px] rounded-full" />

        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center gap-2 p-6 lg:p-8"
      >
        <MapPin className="w-5 h-5 text-purple-600" />
        <span className="text-sm text-black/60">Skills & Expertise</span>
      </motion.header>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-14 lg:py-18">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* ================= DESIGN ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative group rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.05)] group-hover:bg-white/60 transition" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-200/30 to-cyan-200/30 blur-2xl transition" />

            <div className="relative p-6 lg:p-8 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-semibold text-purple-600">
                Design
              </h2>

              <p className="text-black/70 leading-relaxed text-sm lg:text-base">
                Crafting interfaces that{" "}
                <span className="text-black font-medium">
                  convert visitors into customers
                </span>{" "}
                through clean UX systems and premium UI design.
              </p>
            </div>
          </motion.div>

          {/* ================= ENGINEERING ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative group rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.05)] group-hover:bg-white/60 transition" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-200/30 to-purple-200/30 blur-2xl transition" />

            <div className="relative p-6 lg:p-8 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-semibold text-purple-600">
                Engineering
              </h2>

              <p className="text-black/70 leading-relaxed text-sm lg:text-base">
                Building scalable systems that{" "}
                <span className="text-black font-medium">
                  deliver performance and reliability
                </span>{" "}
                across modern web applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
