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
    amount: 25000,
  },
  {
    id: 2,
    name: "Landing Page",
    description:
      "Beautiful and modern landing page built with Next.js and TailwindCSS",
    image: "/landing page preview.png",
    tags: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
    demoUrl: "https://landing-page-templates.netlify.app/",
    amount: 15000,
  },
  {
    id: 3,
    name: "Portfolio Minimal",
    description:
      "Clean and elegant portfolio template for designers and developers",
    image: "/minimal-portfolio-website-dark-theme.jpg",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
    demoUrl: "#",
    amount: 18000,
  },
  {
    id: 4,
    name: "Car Gallery App",
    description: "Modern gallery UI with smooth animations and image previews",
    image: "/car.webp",
    tags: ["Next.js", "TailwindCSS", "Vercel"],
    demoUrl: "https://car-gallery-app-six.vercel.app/",
    amount: 20000,
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
