import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_4npVbeNU_ALtpu8G3cJsXjswpUhVfd9zi");

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log(JSON.stringify(body, null, 2));
    const { name, company, address, email, telephone, fax, message } = body;

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
        </table>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "noreply <ofingconsult@resend.dev>",
      to: [email], // Send email to the recipient's address
      subject: `${name} sent you a message`,
      html: emailContent,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully", data }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Send email error: " + error.message, {
      status: 500,
    });
  }
};
