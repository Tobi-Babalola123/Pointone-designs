import { NextResponse } from "next/server";
import { templateLinks } from "@/lib/templateLinks";
import { sendTemplateEmail } from "@/lib/mailer";


export async function POST(req: Request) {
  try {
    const { reference, email, templateName } = await req.json();

    if (!reference || !email || !templateName) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing payment information.",
        },
        { status: 400 },
      );
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing Paystack secret key.",
        },
        { status: 500 },
      );
    }

    // Verify payment with Paystack
    const verifyResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      },
    );

    const verifyData = await verifyResponse.json();

    if (
      !verifyResponse.ok ||
      !verifyData.status ||
      verifyData.data.status !== "success"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Payment verification failed.",
        },
        { status: 400 },
      );
    }

    // Prevent template tampering
    const paidTemplate =
      verifyData.data.metadata?.template_name || templateName;

    const downloadLink = templateLinks[paidTemplate];

    if (!downloadLink) {
      return NextResponse.json(
        {
          success: false,
          error: "Template download link not found.",
        },
        { status: 404 },
      );
    }

    // Send email
    await sendTemplateEmail({
      customerEmail: email,
      templateName: paidTemplate,
      downloadLink,
    });

    console.log("✅ Template delivered:", paidTemplate);

    return NextResponse.json({
      success: true,
      message: "Template sent successfully.",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
