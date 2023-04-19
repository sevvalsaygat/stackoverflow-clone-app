import { NextRequest, NextResponse } from 'next/server';
import { checkAuth } from '@lib';

export function middleware(request: NextRequest, response: typeof NextResponse) {
    return checkAuth(request, response);
}
