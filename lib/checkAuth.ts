import type { NextRequest, NextResponse } from 'next/server'
import Cookies from 'js-cookie'

export default function checkAuth(request: NextRequest, response: any) {
    const cookieUser = Cookies.get('user');
    
    if (!cookieUser) {
        return response.redirect(new URL('/users/sign_in', request.url))  
    }else {
        return response.next()
    }
}