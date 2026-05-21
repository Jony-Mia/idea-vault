import { useState } from "react";
import Link from "next/link";

const NewsletterCta = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thanks! We'll send updates to ${email}`);
        setEmail("");
    };

    return (
        <section className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-16 text-white">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Stay in the loop</p>
                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                            Get product updates, inspiration, and startup best practices.
                        </h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                            Join our community to receive weekly idea prompts, case studies, and launch-checklist content that helps you move faster.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40">
                        <div className="space-y-5">
                            <label htmlFor="newsletter-email" className="block text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
                                Email address
                            </label>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                    placeholder="you@example.com"
                                    className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                                />
                                <button type="submit" className="rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-xs text-slate-400">
                                No spam. Just weekly founder insights and practical idea-building content.
                            </p>
                            <Link href="/resources" className="text-sm font-semibold text-cyan-200 hover:text-white">
                                Explore idea resources →
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCta;
