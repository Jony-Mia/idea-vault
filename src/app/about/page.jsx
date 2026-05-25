import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                <div className="mb-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">About Idea Vault</p>
                        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">A better place to build, share, and refine startup ideas.</h1>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Idea Vault brings structure to the earliest stage of product creation. It helps founders capture their best concepts, compare them clearly, and collect feedback from peers and mentors.
                        </p>
                    </div>

                    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Our mission</p>
                        <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">Empower founders to choose the strongest ideas.</h2>
                        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                            We believe the earliest idea work should be easy to share, validate, and improve. That&apos;s why Idea Vault focuses on clarity, collaboration, and momentum.
                        </p>
                        <div className="mt-8 space-y-4 text-sm text-slate-700 dark:text-slate-300">
                            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                                <p className="font-semibold">Structured idea capture</p>
                                <p>Clear fields for problem, solution, target market, and growth potential.</p>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                                <p className="font-semibold">Community feedback</p>
                                <p>Invite comments and refine concepts before moving into development.</p>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                                <p className="font-semibold">Rapid iteration</p>
                                <p>Keep your best ideas visible and ready for the next round of validation.</p>
                            </div>
                        </div>
                        <Link href="/ideas" className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                            All Ideas
                        </Link>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {[
                        {
                            title: "Shared idea framework",
                            description: "Every idea is captured with consistent problem, product, and market details so teams can compare concepts quickly.",
                        },
                        {
                            title: "Fast discovery",
                            description: "Find the best paths forward using categories, feature tags, and community commentary.",
                        },
                        {
                            title: "Designed for founders",
                            description: "Built to support small teams and solo founders who need clarity before they invest in development.",
                        },
                    ].map((item) => (
                        <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
