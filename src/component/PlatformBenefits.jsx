import { Sparkles, ShieldCheck, ArrowTrendingUp, Users } from "lucide-react";

const benefits = [
    {
        icon: Sparkles,
        title: "Idea clarity",
        description: "Turn messy concepts into crisp, shareable startup stories with structured fields and guided prompts.",
    },
    {
        icon: ShieldCheck,
        title: "Trusted workflow",
        description: "Keep every idea under review with feedback, comments, tags, and progress hints for follow-up work.",
    },
    {
        icon: ArrowTrendingUp,
        title: "Growth focus",
        description: "Track market fit, revenue signals, and advancement stage so the best concepts can move faster.",
    },
    {
        icon: Users,
        title: "Community-ready",
        description: "Share drafts with founders, advisors, and collaborators to collect insight before the next pitch.",
    },
];

const PlatformBenefits = () => {
    return (
        <section className="bg-white py-16 dark:bg-slate-950">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">
                        Platform benefits
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
                        Everything you need to explore, share, and improve startup ideas.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                        Designed for founders, designers, and product teams who want a smarter way to compare ideas and take action.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {benefits.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="group rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/30 transition hover:-translate-y-1 hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-500 text-white shadow-sm">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PlatformBenefits;
