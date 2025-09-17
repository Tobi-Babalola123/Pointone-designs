"use client";

import Image from "next/image";

export default function SupportPage() {
  return (
    <section className="bg-gray-100 min-h-screen">
      {/* Header Banner */}
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-banner.png')" }}
      />

      <div className="max-w-5xl mx-auto px-6 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side: Profile & Supporters */}
          <div className="bg-white shadow rounded-lg p-6 md:col-span-1">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <Image
                src="/your-avatar.png"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">Your Name</h2>
                <p className="text-sm text-gray-500">x supporters</p>
              </div>
            </div>

            {/* About */}
            <div className="mt-6">
              <h3 className="font-semibold">About</h3>
              <p className="text-sm text-gray-600">
                Short description about you here.
              </p>
            </div>

            {/* Recent Supporters */}
            <div className="mt-6">
              <h3 className="font-semibold">Recent Supporters</h3>
              <div className="flex items-center gap-3 mt-3">
                <Image
                  src="/supporter-avatar.png"
                  alt="Supporter"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-sm">
                  <span className="font-bold">Casper</span> became a supporter
                  💖
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Support Box */}
          <div className="bg-white shadow rounded-lg p-6 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Buy Me a Coffee ☕</h3>

            {/* Options */}
            <div className="flex gap-2 mb-4">
              {[1, 3, 5, 10].map((num) => (
                <button
                  key={num}
                  className="px-4 py-2 rounded-md border text-sm hover:bg-gray-100"
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Input Fields */}
            <input
              type="text"
              placeholder="Name or @social"
              className="w-full border rounded-md px-4 py-2 mb-3"
            />
            <textarea
              placeholder="Say something nice..."
              className="w-full border rounded-md px-4 py-2 mb-3"
              rows={3}
            ></textarea>

            {/* Monthly Option */}
            <div className="flex items-center gap-2 mb-3">
              <input type="checkbox" id="monthly" />
              <label htmlFor="monthly" className="text-sm">
                Make this monthly
              </label>
            </div>

            {/* Support Button */}
            <button className="w-full bg-green-500 text-white font-semibold rounded-md py-3 hover:bg-green-600">
              Support $5
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
