'use client';

import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

/**
 * Utility hook to get auth state and perform auth-related actions
 */
export const useAuth = () => {
    const { data: sessionData, isPending } = useSession();
    const router = useRouter();

    const user = sessionData?.user;
    const isAuthenticated = !!user;

    /**
     * Require authentication - redirect if not logged in
     */
    const requireAuth = useCallback(() => {
        if (!isAuthenticated && !isPending) {
            router.push('/signup');
            return false;
        }
        return true;
    }, [isAuthenticated, isPending, router]);

    /**
     * Check if user has specific permission or role
     */
    const hasPermission = useCallback((permission: string) => {
        if (!user) return false;
        // Add your permission logic here
        return true;
    }, [user]);

    /**
     * Redirect to login
     */
    const redirectToLogin = useCallback(() => {
        router.push('/login');
    }, [router]);

    /**
     * Redirect to signup
     */
    const redirectToSignup = useCallback(() => {
        router.push('/signup');
    }, [router]);

    /**
     * Redirect to profile
     */
    const redirectToProfile = useCallback(() => {
        router.push('/profile');
    }, [router]);

    /**
     * Get user display name
     */
    const getUserDisplayName = useCallback(() => {
        return user?.name || user?.email || 'User';
    }, [user]);

    /**
     * Check if user email is verified
     */
    const isEmailVerified = useCallback(() => {
        return user?.emailVerified || false;
    }, [user]);

    return {
        user,
        isAuthenticated,
        isLoading: isPending,
        requireAuth,
        hasPermission,
        redirectToLogin,
        redirectToSignup,
        redirectToProfile,
        getUserDisplayName,
        isEmailVerified,
    };
};

export default useAuth;
