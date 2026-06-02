import React from 'react';

const loading = () => {
        return (
            <section className="min-h-screen bg-slate-50 py-14 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center py-20">
                        <p className="text-lg text-slate-600 dark:text-slate-400">Loading ideas...</p>
                    </div>
                </div>
            </section>
        );
};

export default loading;