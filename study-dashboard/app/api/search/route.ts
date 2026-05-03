import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json({ error: "Query required" }, { status: 400 });
  }

  try {
    // 1. Fetch real web results from DuckDuckGo via POST (to bypass bot blocks)
    const response = await fetch(`https://html.duckduckgo.com/html/`, {
      method: "POST",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
      body: `q=${encodeURIComponent(q)}`,
      cache: 'no-store'
    });

    const html = await response.text();
    const results = [];
    const resultBlocks = html.split('class="result__body"');
    
    for (let i = 1; i < resultBlocks.length; i++) {
      const block = resultBlocks[i];
      
      const titleMatch = block.match(/<h2 class="result__title">[\s\S]*?<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
      let url = "";
      let title = "";
      if (titleMatch) {
        url = titleMatch[1];
        title = titleMatch[2].replace(/<[^>]+>/g, "").trim();
        if (url.startsWith("//duckduckgo.com/l/?uddg=")) {
          url = decodeURIComponent(url.replace("//duckduckgo.com/l/?uddg=", "").split("&")[0]);
        }
      }

      const snippetMatch = block.match(/<a class="result__snippet[^>]*>([\s\S]*?)<\/a>/);
      let snippet = "";
      if (snippetMatch) {
        snippet = snippetMatch[1].replace(/<[^>]+>/g, "").trim();
      }

      if (title && url && !url.includes('duckduckgo.com/y.js')) {
        results.push({ title, url, snippet });
      }
    }

    // 2. Generate an "AI Overview" summary using real factual data
    let aiOverview = "";
    try {
      const wikiSummaryRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=1&explaintext=1&titles=${encodeURIComponent(q)}&format=json&origin=*`, { cache: 'no-store' });
      const wikiSummaryData = await wikiSummaryRes.json();
      const pages = wikiSummaryData?.query?.pages;
      if (pages) {
        const firstPageId = Object.keys(pages)[0];
        if (firstPageId !== "-1" && pages[firstPageId].extract) {
           aiOverview = pages[firstPageId].extract.substring(0, 500);
           if (pages[firstPageId].extract.length > 500) aiOverview += "...";
        }
      }
    } catch (e) {
      // ignore
    }

    // Fallback to Wikipedia if DuckDuckGo blocks the request (e.g., rate limit or 202)
    if (results.length === 0) {
      const wikiRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&utf8=&format=json&origin=*`, { cache: 'no-store' });
      const wikiData = await wikiRes.json();
      if (wikiData.query && wikiData.query.search) {
        return NextResponse.json({
          results: wikiData.query.search.map((r: any) => ({
            title: r.title,
            url: `https://en.wikipedia.org/wiki/${encodeURIComponent(r.title.replace(/ /g, '_'))}`,
            snippet: r.snippet.replace(/<[^>]+>/g, "").trim()
          })),
          aiOverview,
          source: 'Wikipedia (DuckDuckGo busy)'
        });
      }
    }

    return NextResponse.json({ results, aiOverview, source: 'DuckDuckGo Engine' });
  } catch (error) {
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
