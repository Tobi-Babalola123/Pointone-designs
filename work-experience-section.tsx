"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import MobileMenu from "@/mobile-menu";

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
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#05050a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.22),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.1),_transparent_22%),linear-gradient(135deg,_#04040a_0%,_#080813_45%,_#05050a_100%)]" />
      <div className="absolute left-[-10rem] top-[-8rem] h-72 w-72 rounded-full bg-violet-500/20 blur-[140px]" />
      <div className="absolute bottom-[-6rem] right-[-6rem] h-72 w-72 rounded-full bg-lime-400/10 blur-[140px]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
    </div>
  );
}

function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3, y: -4 }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.28)] backdrop-blur-2xl ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-violet-500/10" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function SpatialOS() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroContent = {
    badge: "Premium digital experiences for modern brands",
    title:
      "Frontend engineer building high-conversion experiences for founders and growth teams.",
    text: "I design and ship polished interfaces that feel premium, load fast, and turn attention into action.",
  };

  const trustBadges = [
    "Premium UI systems",
    "Conversion-first layout",
    "Fast & reliable delivery",
  ];
  const stats = [
    { value: "12+", label: "Launches shipped" },
    { value: "98%", label: "Client satisfaction" },
    { value: "24/7", label: "Launch support" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <SpatialBackground />

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-30 mt-4 rounded-full border border-white/10 bg-white/10 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full px-3 py-1.5 text-sm font-semibold tracking-[0.24em] text-white/90 transition hover:text-lime-300"
            >
              TOBI BABALOLA
            </button>

            <div className="flex items-center gap-2">
              <Link
                href="/work"
                className="hidden rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/15 sm:inline-flex"
              >
                View work
              </Link>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="rounded-full border border-white/10 bg-white/10 p-2.5 text-white/80 transition hover:bg-white/15 hover:text-white"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </header>

        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-sm font-medium text-violet-100 backdrop-blur-xl"
              >
                <Sparkles size={14} className="text-lime-300" />
                {heroContent.badge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7 }}
                className="mt-6 text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                <span className="block">{heroContent.title}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/70 sm:text-lg lg:mx-0"
              >
                {heroContent.text}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    boxShadow: "0 14px 40px rgba(163,230,53,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition"
                  onClick={() =>
                    window.open(
                      "https://wa.me/2348105333852?text=Hi%20I%20am%20interested%20in%20getting%20a%20premium%20website%20for%20my%20business",
                      "_blank",
                    )
                  }
                >
                  Talk to expert
                  <ArrowRight size={16} />
                </motion.button>

                <Link href="/work">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      backgroundColor: "rgba(255,255,255,0.14)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition"
                  >
                    View work
                  </motion.button>
                </Link>
              </motion.div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/70 backdrop-blur-xl"
                  >
                    {badge}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 text-left backdrop-blur-xl"
                  >
                    <div className="text-xl font-semibold text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.12 }}
              className="relative mx-auto flex w-full max-w-[480px] justify-center"
            >
              <div className="absolute inset-8 rounded-[2.5rem] bg-[radial-gradient(circle,_rgba(124,58,237,0.18),_transparent_60%)] blur-3xl" />
              <div className="relative w-full">
                <GlassCard className="p-2">
                  <div className="relative overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/engineer.png"
                      alt="Tobi Babalola"
                      width={720}
                      height={900}
                      priority
                      className="aspect-[4/5] w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-white/80 backdrop-blur-xl">
                        <ShieldCheck size={14} className="text-lime-300" />
                        Available for select projects
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="absolute -left-3 top-8 hidden rounded-[1.2rem] border border-white/10 bg-white/10 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:block"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <TrendingUp size={14} className="text-lime-300" />
                    8+ high-impact launches
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="absolute -right-3 bottom-10 hidden rounded-[1.2rem] border border-white/10 bg-white/10 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:block"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <Zap size={14} className="text-violet-300" />
                    Fast iteration cycles
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/70 backdrop-blur-xl"
                >
                  Luxury craft
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
