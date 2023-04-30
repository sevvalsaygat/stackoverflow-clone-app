import { NextRequest, NextResponse } from 'next/server';

export function checkAuth(request: NextRequest, response: typeof NextResponse) {
  const cookieUser = Object.prototype.hasOwnProperty.call(request.cookies, 'user');

  if (!cookieUser) {
    return response.redirect('/users/sign_in');
  } else {
    return NextResponse.next();
  }
}
