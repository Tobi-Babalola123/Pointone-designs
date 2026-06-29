import { Dribbble, Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#03050d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(132,204,22,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_25%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
              Tobi Babalola
            </div>
            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Premium websites that feel effortless and convert with purpose.
            </h3>
            <div className="mt-8 space-y-3 text-slate-400">
              <a
                href="tel:+2348105333852"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-lime-300" />
                +234 810 533 3852
              </a>
              <a
                href="mailto:babalolatobi308@gmail.com"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-lime-300" />
                babalolatobi308@gmail.com
              </a>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Navigate
                </div>
                <div className="mt-4 space-y-3 text-lg text-slate-300">
                  <Link
                    href="/work"
                    className="block transition hover:text-white"
                  >
                    Work
                  </Link>
                  <a
                    href="#services"
                    className="block transition hover:text-white"
                  >
                    Services
                  </a>
                  <a
                    href="#contact"
                    className="block transition hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Social
                </div>
                <div className="mt-4 flex gap-4 text-slate-300">
                  <a
                    href="https://x.com/babalola_t4714"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 p-2 transition hover:text-white"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/Tobi-Babalola123"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 p-2 transition hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tobi-babalola/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 p-2 transition hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://dribbble.com/Tbabalola2024"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 p-2 transition hover:text-white"
                  >
                    <Dribbble className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tobi Babalola. Crafted with care.</p>
          <p>Available for select projects worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
