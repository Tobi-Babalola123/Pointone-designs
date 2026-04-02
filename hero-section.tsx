"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import MobileMenu from "./mobile-menu";
import FloatingMenuButton from "./floating-menu-button";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const fullText = "Websites that convert visitors into revenue.";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const useMagneticEffect = () => {
    const ref = useRef<HTMLButtonElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px) scale(1.04)`;
    };

    const handleMouseLeave = () => {
      const el = ref.current;
      if (!el) return;

      el.style.transform = `translate(0px, 0px) scale(1)`;
    };

    return { ref, handleMouseMove, handleMouseLeave };
  };

  // ================= KEYNOTE CAMERA MOTION =================
  const { scrollY } = useScroll();

  const heroScale = useTransform(scrollY, [0, 600], [1, 0.92]);
  const heroY = useTransform(scrollY, [0, 600], [0, -140]);
  const imageY = useTransform(scrollY, [0, 600], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7]);

  // ================= MOBILE DETECTION =================
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const primaryBtn = useMagneticEffect();
  const secondaryBtn = useMagneticEffect();

  return (
    <motion.section
      ref={heroRef}
      style={{ scale: heroScale, opacity }}
      className="min-h-screen relative overflow-hidden bg-black"
    >
      {/* ================= CINEMATIC BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0">
        {/* Base gradient (Apple keynote dark stage) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05010a] via-[#120a1f] to-black" />

        {/* Stage light bloom */}
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-lime-400/10 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-25%] right-[5%] w-[700px] h-[700px] bg-purple-500/10 blur-[220px] rounded-full animate-pulse" />

        {/* Center cinematic spotlight */}
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[240px] rounded-full" />
      </div>

      {/* ================= HEADER (MINIMAL KEYNOTE STYLE) ================= */}
      <header className="relative z-10 flex justify-between items-center px-6 lg:px-12 py-6">
        <Link href="/">
          <div className="text-lime-400 font-medium tracking-tight text-lg">
            Tobi Babalola
          </div>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-white/60 hover:text-white transition"
        >
          Menu
        </button>
      </header>

      {/* ================= HERO STAGE ================= */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-10">
        <div className="grid lg:grid-cols-12 items-center min-h-[85vh] gap-12">
          {/* ================= LEFT (KEYNOTE TEXT STAGE) ================= */}
          <motion.div
            style={{ y: heroY }}
            className="col-span-full lg:col-span-6 space-y-6"
          >
            {/* SMALL LABEL (APPLE EVENT STYLE) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white/40 tracking-[0.2em] uppercase text-xs"
            >
              Introducing Premium Web Experiences
            </motion.div>

            {/* MAIN HEADLINE (KEYNOTE REVEAL) */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-5xl lg:text-6xl font-semibold leading-tight text-white"
            >
              {text}
              <span className="inline-block w-[2px] h-10 bg-lime-400 ml-2 animate-pulse align-middle" />
            </motion.h1>

            {/* SUBTITLE (SOFT FADE-IN) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white/70 max-w-lg text-lg leading-relaxed"
            >
              I design and build high-performance SaaS-grade websites that feel
              like Apple products — fast, premium, and engineered for
              conversion.
            </motion.p>

            {/* CTA (KEYNOTE BUTTON REVEAL) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-wrap gap-5 pt-6"
            >
              {/* ================= PRIMARY CTA ================= */}
              <motion.button
                onClick={() =>
                  window.open(
                    "https://wa.me/2348105333852?text=Hi%20I%20am%20interested%20in%20getting%20a%20premium%20website%20for%20my%20business",
                    "_blank",
                  )
                }
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative px-8 py-3 rounded-full font-medium text-white overflow-hidden group"
              >
                {/* ================= BASE GLASS ================= */}
                <span className="absolute inset-0 bg-[#0b0f1a] border border-white/10 rounded-full" />

                {/* ================= LIQUID HOVER COLOR ================= */}
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </span>

                {/* ================= GLASS REFRACTION LAYER ================= */}
                <span className="absolute inset-0 backdrop-blur-xl opacity-60" />

                {/* ================= WATER SPLASH CORE ================= */}
                <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:animate-splash" />

                {/* ================= RIPPLE WAVES ================= */}
                <span className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 opacity-0 group-hover:animate-ripple" />
                <span className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 opacity-0 group-hover:animate-rippleDelay" />

                {/* ================= SHINE SWEEP ================= */}
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 opacity-0 group-hover:opacity-100 animate-[shine_1.4s_ease-in-out]" />
                </span>

                {/* ================= TEXT ================= */}
                <span className="relative z-10">Talk to Expert</span>

                {/* ================= GLOW FIELD ================= */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_40px_rgba(34,211,238,0.25)] transition" />
              </motion.button>

              {/* ================= SECONDARY CTA ================= */}
              <motion.button
                ref={secondaryBtn.ref}
                onMouseMove={secondaryBtn.handleMouseMove}
                onMouseLeave={secondaryBtn.handleMouseLeave}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 240, damping: 16 }}
                className="relative px-8 py-3 rounded-full text-white border border-white/15 overflow-hidden"
              >
                {/* glass morph background */}
                <span className="absolute inset-0 bg-white/5 backdrop-blur-xl opacity-0 hover:opacity-100 transition" />

                {/* soft ring glow */}
                <span className="absolute inset-0 rounded-full border border-white/10 scale-95 opacity-0 hover:opacity-100 transition-all duration-300" />

                <span className="relative z-10">View Work</span>
              </motion.button>
            </motion.div>

            {/* MICRO TRUST */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white/30 text-sm pt-4"
            >
              Built with Apple-level attention to detail • Stripe-level
              conversion systems
            </motion.p>
          </motion.div>

          {/* ================= RIGHT IMAGE (FLOATING KEYNOTE OBJECT) ================= */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="col-span-full lg:col-span-6 flex justify-center"
          >
            <div className="relative w-72 h-80 lg:w-80 lg:h-96">
              {/* OUTER CINEMATIC GLOW FIELD */}
              <div className="absolute inset-[-20px] bg-gradient-to-tr from-lime-400/10 via-purple-500/10 to-transparent blur-2xl rounded-3xl animate-pulse" />

              {/* GLASS KEYNOTE FRAME */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 backdrop-blur-2xl bg-white/5 shadow-2xl" />

              {/* FLOATING ENERGY RING */}
              <div className="absolute -inset-2 rounded-3xl border border-lime-400/20 animate-pulse" />

              {/* IMAGE */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/tobi.jpeg"
                  alt="Tobi Babalola"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <FloatingMenuButton onMenuToggle={() => setIsMobileMenuOpen(true)} />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </motion.section>
  );
}
