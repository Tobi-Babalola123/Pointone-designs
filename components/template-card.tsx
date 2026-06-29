"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Blocks,
  CheckCircle2,
  Code2,
  Cpu,
  CreditCard,
  Database,
  Layers3,
  MonitorPlay,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BuyNowButton = dynamic(() => import("@/components/BuyNowButton"), {
  ssr: false,
});

interface Template {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  amount: number;
}

interface TemplateCardProps {
  template: Template;
}

const techIconMap: Record<string, typeof Cpu> = {
  "Next.js": Cpu,
  React: Blocks,
  TailwindCSS: Sparkles,
  TypeScript: Code2,
  Stripe: CreditCard,
  Prisma: Database,
};

const featureMap: Record<number, string[]> = {
  1: [
    "Conversion-focused sections",
    "Premium motion polish",
    "Launch-ready UI",
  ],
  2: ["Lead-gen layout", "Modern visual hierarchy", "Fast setup"],
  3: ["Corporate storytelling", "Trusted brand feel", "Responsive by default"],
  4: ["Fintech-ready blocks", "Secure-first UX", "High-converting hero"],
  5: ["Healthcare clarity", "Accessible structure", "Modern visual system"],
  6: ["Professional credibility", "Elegant presentation", "Flexible sections"],
  7: ["HR product positioning", "Clear value props", "Scalable foundation"],
  8: [
    "AI product messaging",
    "Interactive storytelling",
    "Developer-friendly structure",
  ],
  9: ["Restaurant ambience", "Menu-first layout", "Mobile-first ordering flow"],
  10: ["Food delivery focus", "Bold call-to-actions", "Instantly customizable"],
};

export function TemplateCard({ template }: TemplateCardProps) {
  const badgeLabel =
    template.id === 1
      ? "Best Seller"
      : template.id === 2
        ? "New"
        : template.id === 3
          ? "Popular"
          : template.id === 4
            ? "Developer Favorite"
            : null;

  const featureList = featureMap[template.id] || [
    "Premium layout",
    "Fast implementation",
    "Modern design system",
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.2 } }}
      className="group relative h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 p-3 shadow-[0_20px_70px_rgba(2,6,23,0.45)] backdrop-blur-2xl transition-all duration-300 hover:border-lime-400/30 hover:shadow-[0_30px_90px_rgba(16,185,129,0.16)]">
        <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_left,_rgba(132,204,22,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_40%)]" />

        <div className="relative overflow-hidden rounded-[1.3rem] border border-white/10 bg-slate-950/70">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={template.image || "/placeholder.svg"}
              alt={template.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-lime-400/20 bg-slate-950/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-lime-300 backdrop-blur-xl">
              <Layers3 className="h-3.5 w-3.5" />
              Premium template
            </div>
            {badgeLabel ? (
              <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xl">
                {badgeLabel}
              </div>
            ) : null}
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="line-clamp-2 text-xl font-semibold tracking-tight text-white">
                  {template.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-300">
                  {template.description}
                </p>
              </div>
              <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-right backdrop-blur-xl">
                <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
                  Starting at
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  ₦{template.amount.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {template.tags.map((tag) => {
                const Icon = techIconMap[tag] || Sparkles;

                return (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-xl"
                  >
                    <Icon className="h-3.5 w-3.5 text-lime-300" />
                    {tag}
                  </Badge>
                );
              })}
            </div>

            <ul className="mt-5 space-y-2">
              {featureList.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-lime-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
              <Button
                asChild
                variant="outline"
                className="flex-1 rounded-full border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-lime-400/40 hover:bg-lime-400/10"
              >
                <a
                  href={template.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MonitorPlay className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <div className="flex-1 rounded-full border border-lime-400/20 bg-lime-400/10 px-0.5 py-0.5 text-sm font-semibold text-lime-300">
                <BuyNowButton
                  amount={template.amount}
                  email="user@example.com"
                  templateName={template.name}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-white/10 transition-all duration-300 group-hover:border-lime-400/30" />
      </div>
    </motion.article>
  );
}
