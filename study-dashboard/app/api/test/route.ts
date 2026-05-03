import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const q = "javascript";
    const response = await fetch(`https://html.duckduckgo.com/html/`, {
      method: "POST",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `q=${encodeURIComponent(q)}`
    });
    
    const text = await response.text();
    return new NextResponse(text, { headers: { 'Content-Type': 'text/html' } });
  } catch (e: any) {
    return new NextResponse(e.message);
  }
}
