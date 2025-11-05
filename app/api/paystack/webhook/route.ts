import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.text();
  const secret = process.env.PAYSTACK_SECRET_KEY!;
  const hash = crypto.createHmac("sha512", secret).update(body).digest("hex");
  const signature = req.headers.get("x-paystack-signature");

  if (hash !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(body);

  if (event.event === "charge.success") {
    const email = event.data.customer.email;
    const amount = event.data.amount / 100;

    console.log("✅ Payment confirmed:", { email, amount });

    // ✅ Send download email using EmailJS
    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: {
              to_email: email,
              amount: amount,
            },
          }),
        }
      );

      if (!response.ok) {
        console.error("❌ Email failed:", await response.text());
      } else {
        console.log("✅ Email sent successfully to:", email);
      }
    } catch (error) {
      console.error("❌ Error sending email:", error);
    }
  }

  return NextResponse.json({ received: true });
}
