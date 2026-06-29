"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const templates = [
  {
    name: "Nova Launch",
    price: "$49",
    stack: ["Next.js", "Tailwind", "Framer"],
    badge: "Most Popular",
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },
  {
    name: "Northstar Studio",
    price: "$39",
    stack: ["React", "Tailwind", "GSAP"],
    badge: "New",
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    name: "Aether Canvas",
    price: "$59",
    stack: ["Next.js", "Shadcn", "Motion"],
    badge: "Premium",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

const featurePoints = [
  "Modern UI",
  "Fully Responsive",
  "Clean Code",
  "Framer Motion Animations",
  "Easy Customization",
  "Commercial Use",
];

export default function TemplatesSection() {
  return (
    <section className="relative overflow-hidden bg-[#06070B] py-14 text-white sm:py-16 lg:py-10">
      <div className="absolute inset-0">
        <div className="absolute left-[-90px] top-[-80px] h-72 w-72 rounded-full bg-violet-600/18 blur-[150px]" />
        <div className="absolute bottom-[-90px] right-[-70px] h-72 w-72 rounded-full bg-cyan-500/12 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl"
        >
          <Sparkles size={14} className="text-lime-300" />
          New
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-sm font-medium text-violet-100 backdrop-blur-xl">
              FOR DEVELOPERS
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
              Premium Landing Page Templates
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Professionally designed React, Next.js and Tailwind landing pages
              built for developers, agencies and freelancers who want to launch
              faster.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {featurePoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/75 backdrop-blur-xl"
                >
                  <span className="text-lime-300">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="/templates"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#06070B] transition"
              >
                Browse Templates
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition"
              >
                Become a Customer
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-[560px] items-center justify-center"
          >
            <div className="absolute inset-10 rounded-[2.4rem] bg-[radial-gradient(circle,_rgba(124,58,237,0.16),_transparent_60%)] blur-3xl" />

            <div className="relative flex w-full flex-col gap-4 sm:gap-5">
              {templates.map((template, index) => (
                <motion.article
                  key={template.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.01, rotateX: 2, rotateY: -2 }}
                  className={`relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl ${index === 1 ? "ml-4 sm:ml-8" : index === 2 ? "ml-8 sm:ml-16" : ""}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${template.accent}`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3">
                      <div className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
                        {template.badge}
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
                        {template.price}
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1rem] border border-white/10 bg-[#0a0b12]/70 p-3 shadow-inner">
                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
                        <span className="h-2 w-2 rounded-full bg-lime-300" />
                        Preview
                      </div>
                      <div className="mt-3 h-24 rounded-[0.8rem] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-violet-500/10" />
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-base font-semibold text-white">
                          {template.name}
                        </div>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {template.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/15">
                          Live Demo
                        </button>
                        <button className="rounded-full bg-lime-300 px-3 py-2 text-xs font-semibold text-[#06070B] transition hover:bg-lime-200">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-center text-sm leading-7 text-white/55 sm:text-base"
        >
          Every template is production-ready, responsive and built with modern
          best practices.
        </motion.div>
      </div>
    </section>
  );
}
