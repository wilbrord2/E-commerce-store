import { NextRequest, NextResponse } from 'next/server';
// import Cookies from 'js-cookie';
import { cookies } from 'next/headers';

export default function middleware(req:NextRequest) {
  const token = cookies().get('accessToken');
  const protectedRoutes=['/dashboard']

  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/signin', req.nextUrl));
  } 

  return NextResponse.next();
}
