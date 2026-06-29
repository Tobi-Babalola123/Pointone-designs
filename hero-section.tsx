"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Headphones, Rocket, Zap } from "lucide-react";
import MobileMenu from "./mobile-menu";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fullText = "Websites that turn visitors into paying customers.";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = window.setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        window.clearInterval(interval);
      }
    }, 32);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(132,204,22,0.16),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.18),_transparent_25%),linear-gradient(135deg,_#03050d_0%,_#090b16_45%,_#050816_100%)]" />
        <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-lime-400/20 blur-[120px]" />
        <div className="absolute bottom-0 right-[-6rem] h-72 w-72 rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.3em] text-lime-300 uppercase"
        >
          Tobi Babalola
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl transition hover:text-white"
        >
          Menu
        </button>
      </header>

      <div className="relative z-10 mx-auto flex min-h-[calc(65vh-5rem)] max-w-7xl flex-col justify-center px-6 pb-24 pt-12 sm:pb-28 sm:pt-16 lg:px-10 lg:pb-12 lg:pt-10">
        <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
              Premium digital experiences for modern brands
            </div>

            <h1 className="mt-10 text-4xl font-semibold leading-[0.95] text-white sm:mt-12 sm:text-5xl lg:mt-16 lg:text-7xl">
              {text}
              <span className="ml-2 inline-block h-10 w-[3px] animate-pulse bg-lime-400 align-middle" />
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:mt-10 sm:text-xl">
              I design and build conversion-first websites for ambitious
              founders, agencies, and fast-moving teams that want to look
              premium and perform beautifully.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 sm:mt-12">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/2348105333852?text=Hi%20I%20am%20interested%20in%20getting%20a%20premium%20website%20for%20my%20business"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
              >
                Book a strategy call
              </motion.a>
              <Link
                href="/work"
                className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:bg-white/15"
              >
                View recent work
              </Link>
            </div>

            <div className="mt-12 grid gap-4 grid-cols-2 sm:mt-14 sm:grid-cols-3">
              {[
                {
                  value: "8+",
                  label: "launches shipped",
                  icon: Rocket,
                },
                {
                  value: "98%",
                  label: "page speed focus",
                  icon: Zap,
                },
                {
                  value: "24/7",
                  label: "launch support",
                  icon: Headphones,
                  fullWidth: true,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`rounded-[1.15rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] ${
                      item.fullWidth ? "col-span-2 sm:col-span-1" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full border border-lime-400/25 bg-lime-400/10 p-2 text-lime-300">
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">
                          {item.value}
                        </div>
                        <div className="mt-1 text-sm text-slate-400">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-lime-400/20 via-cyan-400/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/tobi.jpeg"
                  alt="Tobi Babalola"
                  width={780}
                  height={900}
                  priority
                  className="h-[480px] w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 grid gap-3 rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300 sm:grid-cols-2">
                <div>
                  <div className="font-semibold text-white">
                    Fast & polished
                  </div>
                  <div className="mt-1 text-slate-400">
                    Optimized for speed, clarity, and conversion.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-white">SEO-ready</div>
                  <div className="mt-1 text-slate-400">
                    Built to rank and scale with your growth.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </section>
  );
}
