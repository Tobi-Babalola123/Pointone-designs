"use client";

import dynamic from "next/dynamic";

// Dynamically import PaystackButton only in browser
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

export default function BuyNowButton({
  amount,
  email,
  templateName,
}: {
  amount: number;
  email: string;
  templateName: string;
}) {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  if (!publicKey) {
    return (
      <button className="bg-red-600 text-white px-5 py-2 rounded">
        Missing Paystack Key
      </button>
    );
  }

  const componentProps = {
    email,
    amount: amount * 100, // convert to kobo

    // ✅ Correct metadata format for webhook + EmailJS
    metadata: {
      template_name: templateName,
      download_link: `https://your-domain.com/templates/${templateName}.zip`,
    },

    publicKey,
    text: "Buy Now",
    currency: "NGN",
    reference: new Date().getTime().toString(),
    onSuccess: () => alert("✅ Payment successful!"),
    onClose: () => alert("❌ Transaction closed!"),
  };

  return (
    <PaystackButton
      {...componentProps}
      className="border-[#C6FF00] text-[#C6FF00] font-semibold px-5 py-2 rounded-full hover:bg-[#C6FF00] hover:text-black hover:scale-105 transition-all duration-300"
    />
  );
}
