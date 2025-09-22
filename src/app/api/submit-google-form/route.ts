import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message } = await req.json();

    const formData = new URLSearchParams();
    formData.append("entry.352598610", name);
    formData.append("entry.1562494720", phone);
    formData.append("entry.1435401621", email);
    formData.append("entry.2089517146", message);

   const response= await fetch(
      "https://docs.google.com/forms/d/e/1KqRcThUg8f4ZcXajtvcz5AJKDr6n8xJ6wJqbQIljQcU/formResponse",
      {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    console.log(response)
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
