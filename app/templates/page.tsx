"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Download,
  Infinity,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { TemplateCard } from "@/components/template-card";
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: 1,
    name: "SaaS Dashboard Pro",
    description:
      "Complete dashboard with analytics, user management, and billing integration",
    image: "/modern-saas-dashboard-interface-dark-theme.jpg",
    tags: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    demoUrl: "https://ai-dashboard-template.vercel.app/",
    amount: 15000,
  },
  {
    id: 2,
    name: "Real Estate Landing Page",
    description:
      "A clean, conversion-focused real estate landing page designed to showcase property investment offerings with clarity, trust, and visual hierarchy. Built with a minimal, corporate layout optimized for lead generation",
    image: "/Haven real estate.png",
    tags: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
    demoUrl: "https://haven-real-estate-landing-page.netlify.app/",
    amount: 15000,
  },
  {
    id: 3,
    name: "Nexus consulting Landing Page",
    description:
      "A clean, conversion-focused corporate consulting landing page designed to communicate expertise, credibility, and strategic value",
    image: "/nexus.png",
    tags: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
    demoUrl: "https://nexus-consulting-landingpage.netlify.app/",
    amount: 15000,
  },
  {
    id: 4,
    name: "Flowpay Fintech Landing Page",
    description:
      "A modern fintech landing page designed to showcase secure digital payments, financial transparency, and seamless user experience.",
    image: "/flowpay.png",
    tags: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
    demoUrl: "https://flowpay-fintech.netlify.app/",
    amount: 15000,
  },
  {
    id: 5,
    name: "Medicore Landing Page",
    description:
      "A clean, conversion-focused medical landing page designed to communicate healthcare services with clarity, trust, and professionalism",
    image: "/medicore.png",
    tags: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
    demoUrl: "https://medicore-landing-page.netlify.app/",
    amount: 15000,
  },
  {
    id: 6,
    name: "Sterling & Associates landing page",
    description:
      "A clean, conversion-focused legal services landing page designed to communicate trust, expertise, and professional credibility",
    image: "/sterling.png",
    tags: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
    demoUrl: "https://sterlingandassociateslegal.netlify.app/",
    amount: 15000,
  },
  {
    id: 7,
    name: "HR Software Landing Page",
    description:
      "A clean, conversion-focused HR software landing page designed to communicate product value, streamline information flow, and support user onboarding through a structured, professional layout",
    image: "/HR.png",
    tags: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
    demoUrl: "https://hr-software-landing-page.netlify.app/",
    amount: 20000,
  },
  {
    id: 8,
    name: "Saas AI Powered Landing Page",
    description:
      "A modern product landing page designed to highlight AI-powered roadmapping, customer insights, and collaborative workflows through a clean, conversion-focused layout",
    image: "/productflow.png",
    tags: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
    demoUrl: "https://productflow-landing-page.netlify.app/",
    amount: 20000,
  },
  {
    id: 9,
    name: "Aureum Restaurant Landing Page",
    description:
      "A modern restaurant landing page designed to showcase signature dishes, menu highlights, and seamless ordering through a clean, conversion-focused layout.",
    image: "/restaurant.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://aureumrestaurantlandingpage.netlify.app/",
    amount: 15000,
  },
  {
    id: 10,
    name: "Slice&Co Pizza Landing Page",
    description:
      "A modern pizza ordering app landing page designed to showcase menu options, highlight deals, and drive seamless online orders through a clean, conversion-focused layout.",
    image: "/slice1.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://slicefoodx.vercel.app/",
    amount: 15000,
  },
];

const filterPills = [
  "All",
  "Business",
  "SaaS",
  "Healthcare",
  "Real Estate",
  "Restaurant",
  "AI",
  "Fintech",
];

const heroStats = [
  { value: "10+", label: "Premium Templates", icon: Sparkles },
  { value: "Instant", label: "Download", icon: Download },
  { value: "Next.js", label: "& Tailwind", icon: Zap },
  { value: "Lifetime", label: "Updates", icon: Infinity },
];

export default function TemplatesPage() {
  const firstBatch = templates.slice(0, 6);
  const secondBatch = templates.slice(6);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(132,204,22,0.16),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.14),_transparent_25%),linear-gradient(135deg,_#03050d_0%,_#050816_45%,_#050816_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition hover:bg-white/15"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="hidden items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-2 text-sm text-lime-300 sm:flex">
            <BadgeCheck className="h-4 w-4" />
            Premium marketplace
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(132,204,22,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_34%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4 text-lime-300" />
              Trusted by founders shipping premium products
            </div>
            <h1 className="mt-8 text-4xl font-semibold leading-[0.95] text-white sm:mt-10 sm:text-5xl lg:text-7xl">
              Premium Landing Page Templates Built for Modern Developers.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Skip weeks of production work and launch with polished,
              conversion-ready templates built with modern frontend tooling.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
              >
                <a href="#templates" className="inline-flex items-center gap-2">
                  Browse Templates
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                <a href={templates[0].demoUrl} target="_blank" rel="noreferrer">
                  View Live Collection
                </a>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-[1.15rem] border border-white/10 bg-white/10 p-4 text-left backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-full border border-lime-400/25 bg-lime-400/10 p-2 text-lime-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-400">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <section
          id="templates"
          className="relative z-10 mx-auto mt-16 w-full max-w-6xl"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Curated collection
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Premium templates for bold launches
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterPills.map((pill) => (
                <button
                  key={pill}
                  type="button"
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition hover:border-lime-400/30 hover:text-white"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {firstBatch.map((template) => (
              <div key={template.id} className="h-full">
                <TemplateCard template={template} />
              </div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="col-span-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 p-8 text-left shadow-[0_20px_70px_rgba(2,6,23,0.4)] backdrop-blur-2xl sm:p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-lime-300">
                    Bespoke options
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                    Need something custom?
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    Want a bespoke landing page designed specifically for your
                    business? We can create a tailored experience that feels as
                    premium as the templates you&apos;re browsing.
                  </p>
                </div>
                <Button
                  asChild
                  className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-lime-300"
                >
                  <a
                    href="https://wa.me/2348105333852?text=Hi%20I%20am%20interested%20in%20getting%20a%20custom%20website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book Discovery Call
                  </a>
                </Button>
              </div>
            </motion.div>

            {secondBatch.map((template) => (
              <div key={template.id} className="h-full">
                <TemplateCard template={template} />
              </div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto mt-20 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-10 lg:p-14"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(132,204,22,0.16),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_36%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-lime-300">
                Launch faster
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Ready to launch faster?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Skip weeks of development and start from professionally designed
                templates built with modern frontend technologies.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-lime-300"
              >
                <a href="#templates">Browse Templates</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl hover:bg-white/15"
              >
                <a href="#templates">Explore the Collection</a>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
