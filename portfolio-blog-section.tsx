"use client";

import type { MouseEvent as ReactMouseEvent } from "react";
import {
  ArrowRight,
  Code2,
  Cpu,
  Gauge,
  Layers3,
  MapPin,
  Menu,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useScrollAnimation } from "./use-scroll-animation";

export default function PortfolioBlogSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlight = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(700px at ${x}px ${y}px, rgba(255,255,255,0.12), transparent 72%)`,
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const trustItems = [
    { label: "React & Next.js", icon: Code2 },
    { label: "Performance first", icon: Gauge },
    { label: "Premium UI systems", icon: ShieldCheck },
  ];

  const showcaseCards = [
    {
      title: "Recent Project",
      description: "Luxury product experience with motion-led storytelling.",
      icon: Rocket,
      layoutClass: "sm:col-span-2",
    },
    {
      title: "UI Engineering",
      description: "Design systems and component architecture that scale.",
      icon: Layers3,
      layoutClass: "",
    },
    {
      title: "Frontend Development",
      description: "Polished interfaces for SaaS, brands, and growth teams.",
      icon: Cpu,
      layoutClass: "",
    },
    {
      title: "Performance Optimization",
      description: "Faster loads, better conversions, calmer experiences.",
      icon: Zap,
      layoutClass: "",
    },
    {
      title: "Case Study",
      description: "A high-end conversion-focused launch built end to end.",
      icon: Sparkles,
      layoutClass: "",
    },
    {
      title: "Latest Article",
      description: "Notes on modern frontend craft and product design.",
      icon: PenTool,
      layoutClass: "sm:col-span-2",
    },
  ];

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#07070B] py-14 text-white sm:py-16 lg:py-20"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlight }}
      />

      <div className="absolute inset-0">
        <div className="absolute left-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-violet-600/18 blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[320px] w-[320px] rounded-full bg-indigo-500/16 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <motion.header
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        variants={fadeUp}
        custom={0}
        className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <div className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl">
          Featured Work
        </div>

        <button className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/70 backdrop-blur-xl transition hover:-rotate-6 hover:bg-white/10 hover:text-white">
          <Menu size={18} />
        </button>
      </motion.header>

      <div className="relative z-10 mx-auto mt-8 max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeUp}
          custom={0.06}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <motion.div
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              variants={fadeUp}
              custom={0.12}
              className="relative"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-sm font-medium text-violet-100 backdrop-blur-xl">
                <Sparkles size={14} className="text-lime-300" />
                Portfolio & Insights
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                Premium frontend experiences for modern brands.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                I design and ship elegant interfaces that feel premium, move
                with purpose, and turn attention into trust.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {trustItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/75 backdrop-blur-xl"
                    >
                      <Icon size={14} className="text-lime-300" />
                      {item.label}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      8+ launches shipped
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      Product-grade builds for founders and teams.
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 p-2 text-lime-300">
                    <ShieldCheck size={16} />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/work">
                  <motion.a
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                      boxShadow: "0 18px 45px rgba(124,58,237,0.25)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#07070B] transition"
                  >
                    View selected work
                    <ArrowRight size={16} />
                  </motion.a>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition"
                >
                  Read latest insights
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              variants={fadeUp}
              custom={0.16}
              className="relative mx-auto w-full max-w-[560px]"
            >
              <div className="absolute inset-8 rounded-[2.5rem] bg-[radial-gradient(circle,_rgba(124,58,237,0.16),_transparent_60%)] blur-3xl" />

              <div className="relative grid gap-3 sm:grid-cols-2">
                {showcaseCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.article
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.18 + index * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                        rotateX: 2,
                        rotateY: -2,
                      }}
                      className={`relative rounded-[1.25rem] border border-white/10 bg-white/10 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-2xl ${card.layoutClass}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-full border border-violet-400/20 bg-violet-500/10 p-2 text-violet-200">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {card.title}
                          </div>
                          <div className="mt-1 text-sm leading-6 text-white/60">
                            {card.description}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-6 flex max-w-7xl items-center justify-between px-5 text-xs uppercase tracking-[0.28em] text-white/45 sm:px-8 lg:px-10">
        <span>Selected projects</span>
        <span>Built with intention</span>
      </div>
    </section>
  );
}
