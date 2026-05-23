import { getSession } from '@/lib/auth.js';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware to protect API routes
 * Usage: Wrap your API route handlers with this
 */
export async function withAuth(handler) {
    return async (req: NextRequest) => {
        try {
            // Get session from cookies or headers
            const session = await getSession(req);

            if (!session?.user) {
                return NextResponse.json(
                    { error: 'Unauthorized - Please log in' },
                    { status: 401 }
                );
            }

            // Add session to request for use in handler
            (req as any).session = session;
            (req as any).user = session.user;

            // Call the actual handler
            return handler(req);
        } catch (error) {
            console.error('Auth middleware error:', error);
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }
    };
}

/**
 * Helper to get authenticated user from request
 */
export function getAuthUser(req: NextRequest) {
    return (req as any).user;
}

/**
 * Helper to get session from request
 */
export function getAuthSession(req: NextRequest) {
    return (req as any).session;
}
