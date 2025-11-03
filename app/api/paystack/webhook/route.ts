import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.text();
  const secret = process.env.PAYSTACK_SECRET_KEY!;
  const hash = crypto.createHmac("sha512", secret).update(body).digest("hex");

  const signature = req.headers.get("x-paystack-signature");

  // ✅ Verify the request came from Paystack
  if (hash !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(body);

  if (event.event === "charge.success") {
    const email = event.data.customer.email;
    const amount = event.data.amount / 100;

    console.log("✅ Payment confirmed:", { email, amount });

    // Later: send email with download link here
  }

  return NextResponse.json({ received: true });
}
