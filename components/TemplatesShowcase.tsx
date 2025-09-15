"use client";

import React from "react";
import { CheckCircle, Headphones, Download } from "lucide-react";
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
  // Free mockups data
  const freeMockups = [
    {
      title: "Employee ID Card Mockup",
      preview: "../ID card.png",
      downloadUrl: "/Mockups/employee ID card mockup.zip",
    },
    {
      title: "Poster Mockup",
      preview: "../scentelixir.png",
      downloadUrl: "/Mockups/Free Floating Curved A4 Flyer Mockup.zip",
    },
    {
      title: "T-Shirt Mockup",
      preview: "../tshirt.webp",
      downloadUrl: "/Mockups/men-t-shirt-mockup-floating.zip",
    },
    {
      title: "Baseball cap Mockup",
      preview: "../blue.webp",
      downloadUrl: "/Mockups/475-01-Baseball-Cap-Mockup.zip",
    },
    {
      title: "free-burger-box-mockup",
      preview: "../biebase.webp",
      downloadUrl: "/Mockups/free-burger-box-mockup.zip",
    },
    {
      title: "Rectangle Signage on Wall Mockup",
      preview: "../jabeam signpost.png",
      downloadUrl: "/Mockups/Rectangle+Signage+on+Wall+Mockup.zip",
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
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold shadow hover:bg-blue-500"
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
              image: "../media.jpeg",
              gradient: "from-blue-600 to-indigo-600",
              url: "https://pointonedesigns.gumroad.com/l/flyerpack-vol1",
            },
            {
              title: "Website Templates",
              price: "$29.99",
              image: "../hero.png",
              gradient: "from-orange-600 to-pink-600",
              url: "#",
            },
            {
              title: "Design Assets",
              price: "$19.99",
              image:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800",
              gradient: "from-teal-600 to-blue-600",
              url: "#",
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
                    <a
                      href={mockup.downloadUrl}
                      download
                      className="mt-3 inline-block rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 text-sm font-medium transition w-fit" // 👈 smaller button
                      onClick={() => {
                        console.log("Download clicked:", mockup.title);
                      }}
                    >
                      Download
                    </a>
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
