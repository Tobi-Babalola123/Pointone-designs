import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { reference } = await req.json();
  const secretKey = process.env.PAYSTACK_SECRET_KEY!;

  const response = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    }
  );

  const data = await response.json();

  if (data.status && data.data.status === "success") {
    return NextResponse.json({
      verified: true,
      data: data.data,
    });
  }

  return NextResponse.json({ verified: false });
}
