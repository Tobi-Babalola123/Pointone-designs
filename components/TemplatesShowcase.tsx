"use client";

import React, { useState } from "react";
import { CheckCircle, Headphones, Download, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function TemplatesShowcase() {
  const [selectedMockup, setSelectedMockup] = useState<any>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const freeMockups = [
    {
      title: "Employee ID Card Mockup",
      preview: "../ID card.png",
      downloadUrl: "#",
    },
    { title: "Poster Mockup", preview: "../scentelixir.png", downloadUrl: "#" },
    { title: "T-Shirt Mockup", preview: "../tshirt.webp", downloadUrl: "#" },
    { title: "Baseball cap Mockup", preview: "../blue.webp", downloadUrl: "#" },
  ];

  const products = [
    { title: "Flyer Packs", price: "$6.99", image: "../pablo.png" },
    { title: "Social Designs", price: "$5.99", image: "../socials.webp" },
    {
      title: "Web Templates",
      price: "$29.99",
      image: "../hero.png",
      liveUrl: "./templates",
    },
    { title: "Design Assets", price: "$19.99", image: "../hero.png" },
  ];

  return (
    <section className="relative bg-[#0B0B0F] text-white py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] bottom-[-100px] right-[-50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold">Premium Templates</h2>
          <p className="mt-4 text-white/60">
            High-quality assets designed to elevate your projects instantly.
          </p>
        </motion.div>

        {/* Products */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <Link key={i} href={p.liveUrl || "#"}>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
                className="group rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-xl cursor-pointer"
              >
                <div className="overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-white/60 text-sm">{p.price}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Free Mockups Carousel */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-center">Free Mockups</h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-10"
          >
            {freeMockups.map((m, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-4"
                >
                  <Image
                    src={m.preview}
                    alt={m.title}
                    width={400}
                    height={250}
                    className="rounded-lg object-cover h-40"
                  />
                  <h4 className="mt-3">{m.title}</h4>
                  <button
                    onClick={() => setSelectedMockup(m)}
                    className="mt-3 px-4 py-2 rounded-full bg-white text-black text-sm"
                  >
                    Download
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-6 text-center">
          {[CheckCircle, Headphones, Download].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <Icon className="mx-auto mb-4" />
              <p className="text-white/60">Premium quality & instant access</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link href="/templates">
            <button className="px-8 py-3 rounded-full bg-white text-black hover:scale-105 transition">
              Explore Templates
            </button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedMockup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#111] p-6 rounded-2xl max-w-md w-full relative"
          >
            <button
              onClick={() => setSelectedMockup(null)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>
            <Image
              src={selectedMockup.preview}
              alt="preview"
              width={400}
              height={200}
              className="rounded-lg"
            />
            <h3 className="mt-4">{selectedMockup.title}</h3>
            <a
              href={selectedMockup.downloadUrl}
              className="mt-4 block text-center bg-white text-black py-2 rounded-full"
            >
              Download
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
