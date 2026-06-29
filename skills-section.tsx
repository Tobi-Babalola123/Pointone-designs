"use client";

import { ArrowRight, Code2, Globe, Palette, Sparkles, Zap } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Brand-led UI design",
    description:
      "Interfaces that feel high-end, intuitive, and built to guide visitors toward action.",
  },
  {
    icon: Globe,
    title: "Conversion websites",
    description:
      "Fast, responsive marketing sites crafted for product launches, leads, and sales.",
  },
  {
    icon: Code2,
    title: "Custom web apps",
    description:
      "Dashboards, booking flows, and SaaS experiences with polished interactions and logic.",
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    description:
      "Thoughtful technical execution to improve speed, accessibility, and search visibility.",
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f7fb] py-28 sm:py-32 lg:py-36"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-200/50 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-cyan-200/50 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-violet-600" />
            What I do best
          </div>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Premium digital products that feel effortless and convert with
            confidence.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            From first impression to final checkout, every interaction is
            designed to feel intentional, polished, and easy to trust.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-violet-500/20" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-slate-900 text-white shadow-lg">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-violet-700">
                  Explore this service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
