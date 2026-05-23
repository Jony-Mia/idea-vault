/**
 * Authentication Configuration
 * Defines protected routes and public routes
 */

export const AUTH_CONFIG = {
    // Routes that are completely public (no auth check needed)
    publicRoutes: [
        '/',
        '/login',
        '/signup',
        '/about',
        '/resources',
        '/contact',
    ],

    // Routes that require authentication
    protectedRoutes: [
        '/profile',
        '/addIdea',
        '/ideaDetails',
    ],

    // Routes that have mixed access (some can view, but need auth for actions)
    mixedAccessRoutes: [
        '/ideas',           // Can view, but commenting/voting needs auth
        '/ideaDetails',     // Can view details, but actions need auth
    ],

    // API endpoints that require authentication
    protectedApiRoutes: [
        '/api/userCreated',
        '/api/userNameUpdate',
        '/api/deleteUserIdea',
        '/api/updateUserIdea',
        '/api/userCreatedIdeas',
    ],

    // API endpoints that are public
    publicApiRoutes: [
        '/api/ideas',
        '/api/ideas/[id]',
    ],

    // Default redirect destinations
    redirects: {
        unauthenticated: '/signup',
        authenticated: '/profile',
    },
};

/**
 * Check if a route requires authentication
 */
export const isProtectedRoute = (pathname: string): boolean => {
    return AUTH_CONFIG.protectedRoutes.some(route =>
        pathname === route || pathname.startsWith(route + '/')
    );
};

/**
 * Check if a route is public
 */
export const isPublicRoute = (pathname: string): boolean => {
    return AUTH_CONFIG.publicRoutes.includes(pathname);
};

/**
 * Check if a route has mixed access
 */
export const hasMixedAccess = (pathname: string): boolean => {
    return AUTH_CONFIG.mixedAccessRoutes.some(route =>
        pathname === route || pathname.startsWith(route + '/')
    );
};
