"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // <-- import the icon
import { TemplateCard } from "@/components/template-card";
import { Button } from "@/components/ui/button";

const BuyNowButton = dynamic(() => import("@/components/BuyNowButton"), {
  ssr: false,
});

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
    tags: ["Next.js", "TailwindCSS",],
    demoUrl: "https://aureumrestaurantlandingpage.netlify.app/",
    amount: 15000,
  },
  {
    id: 10,
    name: "Slice&Co Pizza Landing Page",
    description:
      "A modern pizza ordering app landing page designed to showcase menu options, highlight deals, and drive seamless online orders through a clean, conversion-focused layout.",
    image: "/slice1.png",
    tags: ["Next.js", "TailwindCSS",],
    demoUrl: "https://slicefoodx.vercel.app/",
    amount: 15000,
  },

  
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-[#6A1B9A] text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6A1B9A] via-[#7B1FA2] to-[#4A148C] opacity-95"></div>

      {/* Back Home Icon */}
      <div className="relative z-20 px-6 pt-6">
        <Link
          href="/"
          className="inline-flex items-center text-[#C6FF00] hover:text-[#D4FF33] font-medium transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 border-b border-[#8E24AA]/40 text-center">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-[#C6FF00]">Discover</span> Stunning Templates
            <br />
            Built for{" "}
            <span className="text-[#C6FF00]">Developers & Creators</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Ship faster with production-ready templates. Built with modern
            technologies and sleek design.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-[#7E57C2]/20 border border-[#9C27B0]/40 rounded-2xl p-5 backdrop-blur-lg hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_#C6FF00]"
            >
              <img
                src={template.image}
                alt={template.name}
                className="rounded-xl w-full object-cover mb-5"
              />
              <h3 className="text-2xl font-bold text-[#C6FF00] mb-2">
                {template.name}
              </h3>
              <p className="text-lg font-semibold text-white mb-3">
                ₦{template.amount.toLocaleString()}
              </p>
              <p className="text-gray-200 mb-4">{template.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {template.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#C6FF00]/20 border border-[#C6FF00]/40 rounded-full text-[#C6FF00]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={template.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#C6FF00] text-black font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#D4FF33] hover:scale-105">
                    Live Demo
                  </Button>
                </a>
                <BuyNowButton
                  amount={template.amount}
                  email="user@example.com"
                  templateName={template.name}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 border-t border-[#8E24AA]/40 bg-[#4A148C]/60 backdrop-blur-lg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#C6FF00]">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-200 mb-6 sm:mb-8 text-sm sm:text-base">
            Explore premium templates that help you ship faster and look
            professional — all built with React and TailwindCSS.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Button className="w-full sm:w-auto bg-[#C6FF00] text-black font-bold px-6 py-3 rounded-full hover:bg-[#D4FF33] hover:scale-105 transition-transform duration-300">
              Browse All Templates
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-[#C6FF00] text-[#C6FF00] font-semibold px-6 py-3 rounded-full hover:bg-[#C6FF00] hover:text-black hover:scale-105 transition-transform duration-300"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
