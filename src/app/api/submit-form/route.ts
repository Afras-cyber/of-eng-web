import fs from "fs";
import path from "path";
import multer from "multer";
import { promisify } from "util";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend("re_4npVbeNU_ALtpu8G3cJsXjswpUhVfd9zi");

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    console.log(JSON.stringify(body, null, 2));
    const { name, company, address, email, telephone, fax, message } = body;

    let fileUrl = "";
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
          fileUrl
            ? `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Document:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="${fileUrl}">Download</a></td>
        </tr>`
            : ""
        }
      </table>
    </div>
  `;

    const { data, error } = await resend.emails.send({
      from: "noreply<ofingconsult@resend.dev>",
      to: [email, "fajiran4565@gmail.com"],
      subject: `${name} send Email`,
      html: emailContent,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return new NextResponse(
      JSON.stringify({ message: "email send succesfully", data: data }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("send email error" + error.message, {
      status: 200,
    });
  }
};

// import { Resend } from "resend";

// const resend = new Resend("re_4npVbeNU_ALtpu8G3cJsXjswpUhVfd9zi");

// export async function POST() {
//   const emailContent = `
//   <div>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>
//     <h1>New Contact Form Submission</h1>

//   </div>
// `;
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "noreply<onboarding@resend.dev>",
//       to: ["afras975@gmail.com"],
//       subject: "Hello world",
//       react: emailContent,
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
