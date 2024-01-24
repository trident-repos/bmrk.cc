import { NextRequest } from 'next/server';

import { parse } from 'node-html-parser';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const siteUrl = searchParams.get('q');
  if (!siteUrl) {
    return new Response('Site url is missing.', { status: 400 });
  }
  try {
    const url = new URL(siteUrl);
    const response = await fetch(url);
    const html = await response.text();
    const metatags: { [key: string]: string } = extractMetaTags(html);
    return new Response(JSON.stringify(metatags), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

function extractMetaTags(html: string) {
  const root = parse(html);
  const metaTags: { [key: string]: string } = {};

  const allowedProperties = ['og:', 'twitter:'];
  const allowedNames = [
    'description',
    'twitter:image',
    'twitter:card',
    'twitter:title',
    'twitter:description',
  ];

  // Extract all meta tags
  root.querySelectorAll('meta').forEach((meta) => {
    const property = meta.getAttribute('property');
    const name = meta.getAttribute('name');
    const content = meta.getAttribute('content');

    if (
      property &&
      content &&
      allowedProperties.some((allowed) => property.startsWith(allowed))
    ) {
      metaTags[property] = content;
    } else if (name && content && allowedNames.includes(name)) {
      metaTags[name] = content;
    }
  });

  // Extract title tag
  const titleTag = root.querySelector('title');
  if (titleTag) {
    metaTags['title'] = titleTag.text;
  }

  return metaTags;
}