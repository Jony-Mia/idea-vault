const testimonials = [
    {
        quote: "Idea Vault helped us turn a rough concept into a clear growth plan in under a week.",
        name: "Mina Rahman",
        role: "Founder, WellPath",
        accent: "AI & wellness",
    },
    {
        quote: "We received feedback from the community that made our pitch instantly stronger.",
        name: "Jason Kim",
        role: "Product Lead, LaunchLoop",
        accent: "FinTech",
    },
    {
        quote: "The idea cards are beautiful, easy to browse, and perfect for co-working sessions.",
        name: "Aisha Nair",
        role: "Growth Designer, TeamWave",
        accent: "Community apps",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-slate-950 py-16 text-white">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">What founders say</p>
                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Trusted by early-stage builders</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                        Real teams use Idea Vault to test assumptions faster, organize launch ideas, and move confidently from concept to action.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((item) => (
                        <article key={item.name} className="group rounded-[32px] border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-cyan-500/30">
                            <p className="text-base leading-7 text-slate-300">“{item.quote}”</p>
                            <div className="mt-8 flex items-center justify-between gap-4">
                                <div>
                                    <p className="font-semibold text-white">{item.name}</p>
                                    <p className="text-sm text-slate-400">{item.role}</p>
                                </div>
                                <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                                    {item.accent}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
