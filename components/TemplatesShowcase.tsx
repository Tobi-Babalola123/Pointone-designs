"use client";

import React, { useState } from "react";
import { CheckCircle, Headphones, Download, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ".";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function TemplatesShowcase() {
  const [selectedMockup, setSelectedMockup] = useState<any>(null);

  // Free mockups data
  const freeMockups = [
    {
      title: "Employee ID Card Mockup",
      preview: "../ID card.png",
      downloadUrl:
        "https://drive.google.com/file/d/1VrTuL0_-T7w9OpkjuB33QIGQwNaqM94M/view?usp=drive_link",
    },
    {
      title: "Poster Mockup",
      preview: "../scentelixir.png",
      downloadUrl:
        "https://drive.google.com/file/d/1anlLHzvPp5Ilo48exzzqa7Z6LZk4QyQ7/view?usp=sharing",
    },
    {
      title: "T-Shirt Mockup",
      preview: "../tshirt.webp",
      downloadUrl:
        "https://drive.google.com/file/d/1AAe-1IHzroWT_eUGcnLpIMlhb4Zk5g9t/view?usp=sharing",
    },
    {
      title: "Baseball cap Mockup",
      preview: "../blue.webp",
      downloadUrl:
        "https://drive.google.com/file/d/1jdYvJw8DR22bOgEHRJjwTORROvYPageP/view?usp=sharing",
    },
    {
      title: "free-burger-box-mockup",
      preview: "../biebase.webp",
      downloadUrl:
        "https://drive.google.com/file/d/1b7K-rBIyAHTYorcS-nd4-zlo6mnx53fC/view?usp=sharing",
    },
    {
      title: "Rectangle Signage on Wall Mockup",
      preview: "../jabeam signpost.png",
      downloadUrl:
        "https://drive.google.com/file/d/1DCX1jNG09ocHfoO0BXY_jUQUbUxwy6JL/view?usp=sharing",
    },
    {
      title: "Double A4 Flyer Poster mockup",
      preview: "../scentelixirr.png",
      downloadUrl:
        "https://drive.google.com/file/d/1In6twRMO4v_9sXU_lCx21Ams7OFDbMgG/view?usp=sharing",
    },
    {
      title: "Round Embroidered patch mockup ",
      preview: "../desert.webp",
      downloadUrl:
        "https://drive.google.com/file/d/1sYpyzajL2f86om9-ojnKxbIVVj2hfXXD/view?usp=sharing",
    },
  ];

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
              className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold shadow hover:bg-purple-500"
            >
              Browse Templates
            </Link>
          </div>
        </div>

        {/* Product Cards (Paid Templates) */}
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
              image: "../socials.webp",
              gradient: "from-blue-600 to-indigo-600",
              url: "https://pointonedesigns.gumroad.com/l/flyerpack-vol1",
            },
            {
              title: "Website Templates",
              price: "$29.99",
              image: "../hero.png",
              gradient: "from-orange-600 to-pink-600",
              url: "/templates", // internal link
            },
            {
              title: "Design Assets",
              price: "$19.99",
              image:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800",
              gradient: "from-teal-600 to-blue-600",
              url: "#",
            },
          ].map((product, idx) =>
            product.url.startsWith("/") ? (
              // ✅ Internal link using Next.js <Link>
              <Link
                key={idx}
                href={product.url}
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
                  <h3 className="mt-4 text-lg font-semibold">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200">{product.price}</p>
                </div>
              </Link>
            ) : (
              // 🌍 External links open in new tab
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
                  <h3 className="mt-4 text-lg font-semibold">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200">{product.price}</p>
                </div>
              </a>
            )
          )}
        </div>

        {/* Free Mockups Section */}
        {/* Free Mockups Section (Carousel) */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center">
            Free Mockups for Designers
          </h3>
          <p className="mt-2 text-center text-gray-400">
            Download high-quality mockups to showcase your work in style.
          </p>

          <div className="mt-10">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 }, // mobile
                768: { slidesPerView: 2 }, // tablet
                1024: { slidesPerView: 3 }, // desktop
              }}
              className="pb-12"
            >
              {freeMockups.map((mockup, idx) => (
                <SwiperSlide key={idx}>
                  <div className="rounded-2xl p-6 bg-gradient-to-tr from-gray-800 to-gray-700 shadow-lg h-full flex flex-col">
                    <div className="overflow-hidden rounded-lg bg-black/20">
                      <Image
                        src={mockup.preview}
                        alt={mockup.title}
                        width={400}
                        height={250}
                        className="object-cover w-full h-48"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      {mockup.title}
                    </h3>
                    <button
                      onClick={() => setSelectedMockup(mockup)}
                      className="mt-3 inline-block rounded-lg bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 text-sm font-medium transition w-fit"
                    >
                      Download
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
              className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold shadow hover:bg-purple-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMockup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full relative shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedMockup(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Preview Image */}
            <Image
              src={selectedMockup.preview}
              alt={selectedMockup.title}
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-48"
            />

            {/* Title */}
            <h2 className="mt-4 text-xl font-semibold">
              {selectedMockup.title}
            </h2>
            <p className="mt-2 text-gray-400 text-sm">
              Use this free mockup to enhance your presentations or showcase
              designs to clients.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={selectedMockup.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center rounded-lg bg-purple-600 hover:bg-purple-700 px-4 py-2 text-sm font-medium"
              >
                Confirm & Download
              </a>

              <Link
                href="/supportpage"
                // target="_blank"
                rel="noopener noreferrer"
                className="block text-center rounded-lg bg-yellow-500 hover:bg-yellow-600 px-4 py-2 text-sm font-medium"
              >
                ☕ Buy Me a Coffee
              </Link>

              <Link
                href="/#contact"
                className="block text-center rounded-lg bg-green-600 hover:bg-green-700 px-4 py-2 text-sm font-medium"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
