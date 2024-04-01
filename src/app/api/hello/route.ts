import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      message: "Hello World",
    }),
    { status: 200 }
  );
}

export async function POST(params: string) {
  return new Response(
    JSON.stringify({
      params,
    })
  );
}
