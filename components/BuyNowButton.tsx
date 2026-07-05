"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import { usePaystackPayment } from "react-paystack";

type PaystackSuccessResponse = {
  reference?: string;
  status?: string;
  [key: string]: unknown;
};

type SendTemplatePayload = {
  reference: string;
  email: string;
  templateName: string;
};

type SendTemplateResponse = {
  success?: boolean;
  message?: string;
  error?: string;
};

export default function BuyNowButton({
  amount,
  email,
  templateName,
}: {
  amount: number;
  email: string;
  templateName: string;
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerEmail, setCustomerEmail] = useState(email);
  const [emailError, setEmailError] = useState("");
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  useEffect(() => {
    setCustomerEmail(email);
  }, [email]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSuccess = async (response: PaystackSuccessResponse) => {
    const reference = response.reference?.trim();

    if (!reference) {
      toast.error("Payment completed, but no reference was returned.");
      return;
    }

    setIsProcessing(true);

    try {
      const deliveryEmail = customerEmail.trim() || email.trim();
      const payload: SendTemplatePayload = {
        reference,
        email: deliveryEmail,
        templateName,
      };

      const responseFromApi = await fetch("/api/send-template", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data: SendTemplateResponse = {};

      try {
        data = (await responseFromApi.json()) as SendTemplateResponse;
      } catch {
        data = {};
      }

      if (!responseFromApi.ok || data.success === false) {
        throw new Error(
          data.error || data.message || "Failed to send template",
        );
      }

      toast.success(
        "Payment successful! Your download link has been sent to your email.",
      );
    } catch (error) {
      console.error("Template delivery error:", error);
      toast.error(
        "Payment was received but we couldn't send your template. Please contact support.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    if (!isProcessing) {
      toast.error("Payment was cancelled or closed.");
    }
  };

  if (!publicKey) {
    return (
      <button className="bg-red-600 text-white px-5 py-2 rounded">
        Missing Paystack Key
      </button>
    );
  }

  const initializePayment = usePaystackPayment({
    email: customerEmail.trim(),
    amount: amount * 100,
    publicKey,
    currency: "NGN",
    reference: new Date().getTime().toString(),
  });

  const isEmailValid = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleContinue = (event: FormEvent) => {
    event.preventDefault();

    const normalizedEmail = customerEmail.trim();

    if (!isEmailValid(normalizedEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setIsModalOpen(false);
    initializePayment({
      onSuccess: handleSuccess,
      onClose: handleClose,
    });
  };

  return (
    <div className="inline-flex flex-col items-start">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={`border border-[#C6FF00] bg-[#0E0B1F]/80 text-[#C6FF00] font-semibold px-5 py-2.5 rounded-full shadow-[0_0_30px_rgba(198,255,0,0.16)] hover:bg-[#C6FF00] hover:text-black hover:scale-105 transition-all duration-300 backdrop-blur-xl ${
          isProcessing ? "cursor-not-allowed opacity-70" : ""
        }`}
      >
        {isProcessing ? "Processing..." : "Buy Now"}
      </button>

      <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="purchase-flow-title"
              className="w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.35),_transparent_45%),linear-gradient(135deg,_rgba(11,10,23,0.95),_rgba(34,26,67,0.9))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-[#C6FF00]/80">
                    Premium Access
                  </p>
                  <h2
                    id="purchase-flow-title"
                    className="text-2xl font-semibold text-white"
                  >
                    Secure your template now
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full border border-white/10 bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
                  aria-label="Close purchase modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6l12 12M18 6L6 18"
                    />
                  </svg>
                </button>
              </div>

              <p className="mb-6 text-sm leading-6 text-slate-300">
                Enter your email to continue to a secure Paystack checkout and
                receive your download instantly after payment.
              </p>

              <form onSubmit={handleContinue} className="space-y-4">
                <div>
                  <label
                    htmlFor="purchase-email"
                    className="mb-2 block text-sm font-medium text-slate-100"
                  >
                    Email Address
                  </label>
                  <input
                    id="purchase-email"
                    type="email"
                    value={customerEmail}
                    onChange={(event) => {
                      setCustomerEmail(event.target.value);
                      if (emailError) setEmailError("");
                    }}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition focus:border-[#C6FF00] focus:ring-2 focus:ring-[#C6FF00]/30"
                  />
                  {emailError ? (
                    <p className="mt-2 text-sm text-rose-300">{emailError}</p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={!isEmailValid(customerEmail)}
                  className="flex w-full items-center justify-center rounded-xl bg-[#C6FF00] px-4 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:bg-[#C6FF00]/60 disabled:text-black/70"
                >
                  Continue to Pay
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {isProcessing ? (
        <span className="mt-2 flex items-center gap-2 text-sm text-[#C6FF00]">
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014 12H0c0 6.627 5.373 12 12 12v-4a7.999 7.999 0 01-6-2.709z"
            />
          </svg>
          Preparing your download...
        </span>
      ) : null}

      <Toaster richColors position="top-right" />
    </div>
  );
}
