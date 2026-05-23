import { NextRequest, NextResponse } from 'next/server';
import { isProtectedRoute, isPublicRoute, AUTH_CONFIG } from '@/lib/authConfig';

export async function proxy(request) {
    const { pathname } = request.nextUrl;

    // Allow API routes and static files
    if (pathname.startsWith('/api') || pathname.startsWith('/_next')) {
        return NextResponse.next();
    }

    // Check if route is public
    if (isPublicRoute(pathname)) {
        return NextResponse.next();
    }

    // Check if route is protected
    if (isProtectedRoute(pathname)) {
        // Check for session cookies
        const session = request.cookies.get('session')?.value;
        const betterAuthSession = request.cookies.get('better-auth.session_token')?.value;
        const authToken = request.headers.get('authorization');

        if (!session && !betterAuthSession && !authToken) {
            // No authentication found - redirect to signup with return URL
            const signupUrl = new URL(AUTH_CONFIG.redirects.unauthenticated, request.url);
            signupUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(signupUrl);
        }
    }

    return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
    matcher: [
        // Run middleware on all routes except static files and api
        '/profile','/addIdea','/ideaDetails','/ideaDetails/*'
    ],
};
