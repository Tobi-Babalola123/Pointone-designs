"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import FooterSection from "@/footer-section";

// ✅ Dynamically import PaystackButton so it only loads in browser
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

export default function SupportPage() {
  const publicKey = "pk_live_30a816d0151fde156a906e88af16f632d3cf78e5"; // ✅ replace with your own
  const email = "donor@example.com"; // ideally collect from input
  const [selected, setSelected] = useState(1);
  const [donationOptions] = useState([2, 3, 5, 10]);
  const [selectedDonation, setSelectedDonation] = useState(5);
  const [isMonthly, setIsMonthly] = useState(false);
  const options = [1, 3, 5, 10];

  // Paystack amount must be in kobo (₦)
  const amountInKobo = selectedDonation * 100 * 1000;

  const componentProps = {
    email,
    amount: amountInKobo,
    publicKey,
    text: `Support ₦${selectedDonation * 1000} ${isMonthly ? "(Monthly)" : ""}`,
    onSuccess: () => alert("💚 Thanks for supporting!"),
    onClose: () => alert("Transaction closed"),
  };

  return (
    <section className="bg-gray-100 min-h-screen">
      {/* Header / Navbar */}
      <header className="bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/tobi.webp"
              alt="Profile"
              width={44}
              height={44}
              className="rounded-full"
            />
            <div>
              <div className="flex items-baseline gap-2">
                <h1 className="text-lg font-semibold">Tobi Babalola</h1>
                <span className="text-xs text-gray-500">1 supporter</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              aria-label="menu"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg width="18" height="6" viewBox="0 0 18 6" fill="none">
                <circle cx="3" cy="3" r="3" fill="currentColor" />
                <circle cx="9" cy="3" r="3" fill="currentColor" />
                <circle cx="15" cy="3" r="3" fill="currentColor" />
              </svg>
            </button>

            <Link
              href="/#contact"
              className="text-sm text-gray-700 hover:text-black font-medium"
            >
              Hire me
            </Link>
          </div>
        </div>
      </header>

      {/* Header Banner */}
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-banner.png')" }}
      />

      <div className="max-w-5xl mx-auto px-6 -mt-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side */}
          <div className="bg-white shadow rounded-lg p-6 md:col-span-1">
            <div className="flex items-center gap-4">
              <Image
                src="/tobi.webp"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">Tobi Babalola</h2>
                <p className="text-sm text-gray-500">1 supporter</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white shadow rounded-lg p-6 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Buy me a coffee</h3>

            {/* Options */}
            <div className="flex gap-2 mb-4">
              {options.map((num) => (
                <button
                  key={num}
                  onClick={() => setSelected(num)}
                  className={`px-4 py-2 rounded-full border text-sm transition-colors cursor-pointer
                    ${
                      selected === num
                        ? "bg-green-100 border-green-500 text-green-700 font-semibold"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="w-full max-w-md mx-auto p-4 border rounded-md shadow">
              <input
                type="text"
                placeholder="Name or @yoursocial"
                className="w-full border rounded-md px-4 py-2 mb-3 text-sm cursor-text"
              />
              <textarea
                placeholder="Say something nice..."
                className="w-full border rounded-md px-4 py-2 mb-3 text-sm cursor-text"
                rows={3}
              ></textarea>

              {/* Donation Options */}
              <div className="flex gap-2 mb-4">
                {donationOptions.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedDonation(amount)}
                    className={`px-4 py-2 rounded-full border text-sm ${
                      selectedDonation === amount
                        ? "bg-green-100 border-green-500 text-green-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    ₦{amount * 1000}
                  </button>
                ))}
              </div>

              {/* Monthly Option */}
              <div className="flex items-center gap-2 mb-3">
                <input
                  type="checkbox"
                  id="monthly"
                  checked={isMonthly}
                  onChange={(e) => setIsMonthly(e.target.checked)}
                />
                <label htmlFor="monthly" className="text-sm">
                  Make this monthly
                </label>
              </div>

              {/* Paystack Button */}
              <PaystackButton
                {...componentProps}
                className="w-full bg-green-500 text-white font-semibold rounded-md py-3 hover:bg-green-600 cursor-pointer text-center"
              />
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </section>
  );
}
