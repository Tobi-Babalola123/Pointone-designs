"use client";

import type React from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Clock3,
  Mail,
  Menu,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "./use-scroll-animation";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref, isVisible } = useScrollAnimation(0.2);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        "service_c5cm1hn",
        "template_faeozwn",
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "PZr-nn48BM-uNPTJg",
      );

      await fetch("https://hooks.zapier.com/hooks/catch/26979240/unhbenh/", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      setStatus("success");
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const trustPoints = [
    { label: "Response within 24 hours", icon: Clock3 },
    { label: "Starting from ₦70,000", icon: Sparkles },
    { label: "Open for select projects", icon: BadgeCheck },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-[#07070B] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-80px] top-[-90px] h-[300px] w-[300px] rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute bottom-[-100px] right-[-80px] h-[300px] w-[300px] rounded-full bg-indigo-500/16 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl">
            <CalendarDays size={14} className="text-violet-300" />
            Consultation
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Book a premium strategy call for your next product launch.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Whether you need a sharp landing page, a polished product
            experience, or a full frontend build, I help ambitious teams look
            premium and convert better.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-sm font-medium text-violet-100">
                <Zap size={14} className="text-lime-300" />
                Available for select projects
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  Premium frontend support for founders, teams, and ambitious
                  brands.
                </h3>
                <p className="text-sm leading-7 text-white/65 sm:text-[15px]">
                  Expect thoughtful strategy, fast execution, and a polished
                  experience designed to feel as refined as your product.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {trustPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.label}
                      className="rounded-[1.15rem] border border-white/10 bg-black/20 p-3 text-left backdrop-blur-xl"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lime-300">
                        <Icon size={15} />
                      </div>
                      <div className="mt-3 text-sm font-medium text-white">
                        {point.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-violet-200">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Fast response by email and WhatsApp
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      Usually replied to within one business day.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8"
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-white/80"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="What should I call you?"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-violet-400/40"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white/80"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-violet-400/40"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-white/80"
                >
                  Tell me about the project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your goals, timeline, and what success looks like."
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-violet-400/40"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#07070B] transition hover:bg-violet-100 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Book a consultation"}
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>

            {status === "success" && (
              <p className="mt-4 text-sm font-medium text-emerald-400">
                Thanks — your message is on its way.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-rose-400">
                Please complete all fields and try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
