'use client';

import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';



export const ProtectedRoute = ({
    children,
    redirectTo = '/signup',
    fallback = <LoadingFallback />
})=> {
    const { data: sessionData, isPending } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !sessionData?.user) {
            // Redirect to signup or specified route if not authenticated
            router.push(redirectTo);
        }
    }, [sessionData, isPending, router, redirectTo]);

    // Show loading state while checking authentication
    if (isPending) {
        return fallback;
    }

    // Show content only if authenticated
    if (sessionData?.user) {
        return <>{children}</>;
    }

    // This shouldn't be reached due to redirect, but as a safety measure
    return null;
};

const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-r-blue-500 dark:border-slate-800 dark:border-r-blue-400"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Loading your content...</p>
        </div>
    </div>
);

export default ProtectedRoute;
