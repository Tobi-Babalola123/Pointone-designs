import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const secret = process.env.PAYSTACK_SECRET_KEY;
    const bodyString = JSON.stringify(req.body);
    const hash = crypto
      .createHmac("sha512", secret)
      .update(bodyString)
      .digest("hex");

    if (hash !== req.headers["x-paystack-signature"]) {
      return res.status(401).json({ error: "Invalid signature" });
    }

    const event = req.body;

    // ✅ Handle successful payment
    if (event.event === "charge.success") {
      const email = event.data.customer.email;
      const firstName = event.data.customer.first_name || "there";
      const metadata = event.data.metadata || {};

      // ✅ Identify the template purchased
      const templateType = metadata.template_type || "default";

      // ✅ Match template name to the correct download link
      let downloadLink =
        "https://point1nedesign.netlify.app/templates/code.zip"; // default

      if (templateType === "car-gallery-app") {
        downloadLink =
          "https://point1nedesign.netlify.app/templates/car-gallery-app-master.zip";
      } else if (templateType === "dashboard-layout") {
        downloadLink =
          "https://point1nedesign.netlify.app/templates/dashboard-layout.zip";
      } else if (templateType === "landing-page") {
        downloadLink = "https://point1nedesign.netlify.app/templates/code.zip";
      }

      // ✅ Send confirmation email via EmailJS
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
              user_name: firstName,
              download_link: downloadLink,
            },
          }),
        }
      );

      if (response.ok) {
        console.log(`✅ Email sent successfully to ${email}`);
      } else {
        console.error(
          "❌ Failed to send email via EmailJS",
          await response.text()
        );
      }
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
