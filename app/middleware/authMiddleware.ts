import { NextRequest, NextResponse } from 'next/server';
import Cookies from 'js-cookie';

export function middleware(req:NextRequest) {
  const token = Cookies.get('accessToken');

  if (token) {
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.next();
    }
  } else {
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect('/signin');
    }
  }

  return NextResponse.next();
}
