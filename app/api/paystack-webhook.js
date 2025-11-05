import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secret = process.env.PAYSTACK_SECRET_KEY;
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  const event = req.body;

  if (event.event === "charge.success") {
    const email = event.data.customer.email;

    // ✅ Send email to buyer using EmailJS API
    const sendEmail = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          template_params: {
            user_name: event.data.customer.first_name || "there",
            download_link: "https://your-secure-link.com/my-template.zip",
          },
        }),
      }
    );

    if (sendEmail.ok) {
      console.log(`✅ Email sent to ${email}`);
    } else {
      console.error("❌ Failed to send email");
    }
  }

  res.status(200).json({ received: true });
}
