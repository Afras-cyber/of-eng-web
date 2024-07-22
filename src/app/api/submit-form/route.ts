import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a Nodemailer transporter using SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port:587,
  // port: "587", 
  secure: process.env.SMTP_SECURE === 'true', // Convert string to boolean
  auth: {
    user: "resend",
    pass: "re_4npVbeNU_ALtpu8G3cJsXjswpUhVfd9zi",
  },
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log(JSON.stringify(body, null, 2));
    const {
      name,
      company,
      address,
      email,
      telephone,
      fax,
      message,
      documentUrl,
    } = body;

    const emailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="background-color: #f4f4f4; padding: 10px; border-bottom: 1px solid #ddd;">New Contact Form Submission</h1>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Company:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Address:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${address}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Telephone:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${telephone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Fax:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${fax}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Message:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
          </tr>
          ${
            documentUrl
              ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Document:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;"><a href="${documentUrl}" target="_blank">View Document</a></td>
          </tr>`
              : ''
          }
        </table>
      </div>
    `;

    const emailOptions = {
      from: 'noreply@of-ingconsult.com',
      to: email,
      subject: `${name} sent you a message`,
      html: emailContent,
      attachments: documentUrl ? [{ path: documentUrl }] : [],
    };

    // Send email with Nodemailer
    const info = await transporter.sendMail(emailOptions);

    return new NextResponse(
      JSON.stringify({ message: 'Email sent successfully', info }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse('Send email error: ' + error.message, {
      status: 500,
    });
  }
};
