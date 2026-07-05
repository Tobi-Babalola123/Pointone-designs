import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

type SendTemplateEmailProps = {
  customerEmail: string;
  templateName: string;
  downloadLink: string;
};

export async function sendTemplateEmail({
  customerEmail,
  templateName,
  downloadLink,
}: SendTemplateEmailProps) {
  await transporter.sendMail({
    from: `"Tobi Babalola" <${process.env.EMAIL_USER}>`,
    to: customerEmail,
    subject: `Your ${templateName} Template is Ready 🎉`,

    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:30px">

        <h2>Thank you for your purchase 🎉</h2>

        <p>Your payment has been received successfully.</p>

        <p>
          Click the button below to download your template.
        </p>

        <a
          href="${downloadLink}"
          style="
            display:inline-block;
            padding:14px 28px;
            background:#7c3aed;
            color:white;
            text-decoration:none;
            border-radius:8px;
            font-weight:bold;
          "
        >
          Download Template
        </a>

        <br><br>

        <p>If the button doesn't work, use this link:</p>

        <p>${downloadLink}</p>

        <hr>

        <p style="color:#777">
          Thanks for your purchase.<br>
          Tobi Babalola
        </p>

      </div>
    `,
  });
}
