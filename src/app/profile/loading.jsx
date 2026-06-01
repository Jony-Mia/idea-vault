import { Button } from '@heroui/react';
import Link from 'next/link';

const loading = () => {
            return (
            <section className="min-h-[calc(100vh-280px)] flex flex-col justify-center items-center px-6 py-16 text-center">
                <p className="text-lg font-semibold text-slate-700 mb-4">Sign in to view your profile.</p>
                <Link href="/login">
                    <Button>Go to Login </Button>
                </Link>
            </section>
        );
};

export default loading;