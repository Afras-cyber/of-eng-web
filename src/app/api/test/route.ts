import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return new NextResponse("Hello everyone", { status: 200 });
  } catch (error: any) {
    return new NextResponse("Get Api error" + error?.message, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    return new NextResponse(
      JSON.stringify({ message: "successfuly update", data: body }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Get Api error" + error?.message, { status: 500 });
  }
};
