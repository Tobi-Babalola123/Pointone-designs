"use client";

import React from "react";
import { CheckCircle, Headphones, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TemplatesShowcase() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Best Templates for Your Next Project
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Discover a variety of design templates including flyer packs, social
            media designs and website templates to elevate your projects.
          </p>
          <div className="mt-6">
            <Link
              href="/templates"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold shadow hover:bg-blue-500"
            >
              Browse Templates
            </Link>
          </div>
        </div>

        {/* Product Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Flyer & Brochure Packs",
              price: "$6.99",
              image: "../pablo.png",
              gradient: "from-purple-600 to-pink-600",
              url: "https://pointonedesigns.gumroad.com/l/itdig",
            },
            {
              title: "Social Media Designs",
              price: "$5.99",
              image: "../media.jpeg",
              gradient: "from-blue-600 to-indigo-600",
              url: "https://pointonedesigns.gumroad.com/l/flyerpack-vol1",
            },
            {
              title: "Website Templates",
              price: "$29.99",
              image: "../hero.png",
              gradient: "from-orange-600 to-pink-600",
            },
            {
              title: "Design Assets",
              price: "$19.99",
              image:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800",
              gradient: "from-teal-600 to-blue-600",
            },
          ].map((product, idx) => (
            <a
              key={idx}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className={`rounded-2xl p-6 bg-gradient-to-tr ${product.gradient} shadow-lg`}
              >
                <div className="overflow-hidden rounded-lg bg-black/20">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
                <p className="mt-2 text-sm text-gray-200">{product.price}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center">Why Choose Us?</h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="rounded-xl bg-gray-800/50 p-6">
              <CheckCircle className="mx-auto h-8 w-8 text-blue-500" />
              <h4 className="mt-4 font-semibold">Verified Templates</h4>
              <p className="mt-2 text-sm text-gray-400">
                High-quality, professional templates you can trust.
              </p>
            </div>
            <div className="rounded-xl bg-gray-800/50 p-6">
              <Headphones className="mx-auto h-8 w-8 text-green-500" />
              <h4 className="mt-4 font-semibold">Quality Support</h4>
              <p className="mt-2 text-sm text-gray-400">
                Get help and guidance whenever you need it.
              </p>
            </div>
            <div className="rounded-xl bg-gray-800/50 p-6">
              <Download className="mx-auto h-8 w-8 text-yellow-500" />
              <h4 className="mt-4 font-semibold">Instant Download</h4>
              <p className="mt-2 text-sm text-gray-400">
                Access your templates immediately after purchase.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 rounded-2xl bg-gray-800/60 p-10 text-center">
          <h3 className="text-xl font-semibold">
            Find the perfect template for your project today
          </h3>
          <div className="mt-6">
            <Link
              href="/templates"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold shadow hover:bg-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
