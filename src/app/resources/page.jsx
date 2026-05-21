import Link from "next/link";

const resources = [
    {
        title: "Idea validation checklist",
        description: "A short guide to validate assumptions and discover which startup concepts deserve a second look.",
        label: "Checklist",
    },
    {
        title: "Pitch-ready idea template",
        description: "A fillable framework for presenting your idea to investors, partners, or early users.",
        label: "Template",
    },
    {
        title: "Starter launch plan",
        description: "A simple roadmap of the first steps to take from MVP to market testing.",
        label: "Guide",
    },
];

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">Resources</p>
                    <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Practical guides, templates, and startup resources.</h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Browse resources designed to help you clarify your idea, structure your pitch, and turn early feedback into a stronger plan.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {resources.map((item) => (
                        <article key={item.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                                {item.label}
                            </span>
                            <h2 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
                            <Link href="/addIdea" className="mt-8 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                                Use this resource
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
