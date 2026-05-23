'use client';

import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useProtectedRoute = (redirectTo = '/signup') => {
    const { data: sessionData, isPending } = useSession();
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        if (!isPending) {
            if (!sessionData?.user) {
                // User is not logged in
                router.push(redirectTo);
            } else {
                // User is logged in
                setIsAuthorized(true);
            }
        }
    }, [sessionData, isPending, router, redirectTo]);

    return {
        isAuthorized,
        isLoading: isPending,
        user: sessionData?.user,
        session: sessionData,
    };
};

export default useProtectedRoute;
