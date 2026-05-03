import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new NextResponse('Missing URL parameter', { status: 400 });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      // Important to allow fetching without getting cached responses that might be tied to specific sessions
      cache: 'no-store'
    });

    const contentType = response.headers.get('content-type') || 'text/html';
    
    // Pass through HTML and inject a <base> tag to fix relative links/assets
    if (contentType.includes('text/html')) {
      let html = await response.text();
      
      try {
        const originUrl = new URL(targetUrl).origin;
        const pathname = new URL(targetUrl).pathname;
        // Inject <base> tag right after <head> or at the top of the document
        const baseTag = `<base href="${originUrl}${pathname}">`;
        
        if (html.includes('<head>')) {
          html = html.replace('<head>', `<head>${baseTag}`);
        } else if (html.includes('<head ')) {
          html = html.replace(/(<head[^>]*>)/i, `$1${baseTag}`);
        } else {
          html = baseTag + html;
        }
      } catch (e) {
        // In case URL parsing fails, just serve the html
      }

      // We explicitly do NOT return X-Frame-Options or Content-Security-Policy
      // so that it can be rendered inside our iframe
      return new NextResponse(html, {
        headers: {
          'Content-Type': contentType,
          'Access-Control-Allow-Origin': '*'
        }
      });
    } else {
       // Pass through binary data (like images) directly
       const buffer = await response.arrayBuffer();
       return new NextResponse(buffer, {
         headers: {
           'Content-Type': contentType,
           'Access-Control-Allow-Origin': '*'
         }
       });
    }
  } catch (error) {
    console.error("Proxy error for URL:", targetUrl, error);
    return new NextResponse('Failed to load website content.', { status: 500 });
  }
}
