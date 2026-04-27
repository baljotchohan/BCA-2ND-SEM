import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q');
  if (!query) {
    return NextResponse.json({ error: 'No query provided' }, { status: 400 });
  }

  const ddgUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1&t=bcastudy`;

  try {
    const res = await fetch(ddgUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'BCA-StudyDashboard/1.0',
      },
      next: { revalidate: 60 }, // cache for 60 seconds
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: `Search failed: ${err.message}` }, { status: 500 });
  }
}
