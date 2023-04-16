import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { checkAuth } from '@lib'

export function middleware(request: NextRequest) {
    return checkAuth( request, NextResponse)
}
