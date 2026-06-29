"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Furkan Kaya",
    company: "Upwork",
    role: "Backend Developer",
    quote:
      "He completed the job exactly as I wanted and on time; a very good employee",
    tag: "Landing Page Redesign",
    initials: "FK",
  },
  {
    name: "Daniel Chen",
    company: "Northstar Labs",
    role: "Founder",
    quote:
      "Excellent frontend engineer. Communication was excellent and the final product exceeded expectations.",
    tag: "Product Experience",
    initials: "DC",
  },
  {
    name: "Maya Alvarez",
    company: "Lumen AI",
    role: "VP Product",
    quote:
      "Our dashboard feels incredibly fast and polished now. Highly recommended for any modern product team.",
    tag: "Dashboard UI",
    initials: "MA",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#06070B] py-14 text-white sm:py-16 lg:py-10">
      <div className="absolute inset-0">
        <div className="absolute left-[-80px] top-[-60px] h-64 w-64 rounded-full bg-violet-600/18 blur-[140px]" />
        <div className="absolute bottom-[-80px] right-[-70px] h-72 w-72 rounded-full bg-cyan-500/12 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl"
          >
            Testimonials
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Trusted by founders, startups & growing businesses.
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/65 sm:text-lg"
          >
            Real feedback from clients I&apos;ve helped build fast, modern and
            conversion-focused digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mt-10 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01, rotateX: 2, rotateY: -2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-violet-500/10 opacity-90 transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="text-2xl tracking-[0.2em] text-lime-300">
                  ★★★★★
                </div>

                <p className="mt-5 text-[15px] leading-8 text-white/75">
                  “{testimonial.quote}”
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/55">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>

                <div className="mt-7 inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                  {testimonial.tag}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
