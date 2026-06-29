import React from "react";
import {
  ArrowRight,
  Brush,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Launch Websites",
    description:
      "High-conversion marketing sites and product launches built with premium visual systems and clear user journeys.",
    deliverables: ["Responsive UI", "Motion polish", "SEO-ready structure"],
    ideal: "Founders, startups, and premium brands",
    icon: Rocket,
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },
  {
    title: "UI Engineering",
    description:
      "Refined component systems, design implementation, and polished frontend architecture for fast-moving teams.",
    deliverables: [
      "Reusable components",
      "Design system support",
      "Frontend handoff",
    ],
    ideal: "Agencies, product teams, and design-led companies",
    icon: Layers3,
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    title: "Product Experiences",
    description:
      "Thoughtful interfaces for dashboards, SaaS tools, and internal products with a premium feel at every interaction.",
    deliverables: [
      "Product UI flows",
      "Interaction design",
      "Performance tuning",
    ],
    ideal: "B2B teams, operators, and SaaS builders",
    icon: Code2,
    accent: "from-emerald-500/20 via-lime-500/10 to-transparent",
  },
  {
    title: "Design Direction",
    description:
      "Strategic visual direction and creative refinement that turns a product into a memorable brand experience.",
    deliverables: [
      "Visual strategy",
      "Brand-consistent UI",
      "Creative iteration",
    ],
    ideal: "Visionary founders and modern creative teams",
    icon: Brush,
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

const PricingSection = () => {
  return (
    <section id="services" className="bg-[#07070B] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl">
            <Sparkles size={14} className="text-violet-300" />
            Services
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Premium digital experiences built with clarity and conviction.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Every engagement is crafted to feel polished, intentional, and built
            to convert — from the first impression to the final interaction.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.06] sm:p-7"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-80 transition duration-500 group-hover:opacity-100`}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-violet-200 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                      <Icon size={20} />
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
                      0{idx + 1}
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/65 sm:text-[15px]">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">
                        Deliverables
                      </div>
                      <ul className="mt-2 space-y-2 text-sm text-white/75">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">
                        Ideal for
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        {service.ideal}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                    <span className="text-sm font-medium text-white/70">
                      Starting from
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                    >
                      Book a call
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
