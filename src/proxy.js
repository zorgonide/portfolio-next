import { NextResponse } from 'next/server';

// Subdomain -> internal path mapping. Add new subdomains here as they're built.
const SUBDOMAIN_ROUTES = {
  'ghosting.ammarkhurshid.com': '/ghosting',
};

export default function proxy(request) {
  const hostname = request.headers.get('host')?.split(':')[0] ?? '';
  const target = SUBDOMAIN_ROUTES[hostname];

  if (target && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL(target, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
