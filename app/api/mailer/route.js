import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Parse the JSON body
    const { to, name, fromEmail, subject, body, attachment } = await req.json();

    // Validate input fields
    if (!to || !name || !fromEmail || !subject || !body) {
      return NextResponse.json(
        { message: "All fields (to, name, fromEmail, subject, body) are required" },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Mail options
    const mailOptions = {
      from: `${name}`, // Sender's name and email
      to,
      subject,
      html: `<p>${body}</p>`, // Use `html` for better formatting
      attachments: attachment
      ? [
          {
            filename: attachment.name,
            content: attachment.data,
            contentType: attachment.type,
          },
        ]
      : [],
    };

    try {
      const sendMsg = await transporter.verify();
      console.log("Server is ready to take messages:", sendMsg.response);
    } catch (error) {
      console.log(error);
      return;
    }

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // Success response
    return NextResponse.json(
      { message: "Email sent successfully", info: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Error response
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
