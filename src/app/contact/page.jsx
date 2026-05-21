"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">Contact</p>
                    <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Talk to the Idea Vault team.</h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Have a question, partnership idea, or feedback? Send us a note and we&apos;ll get back to you soon.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
                    <form onSubmit={handleSubmit} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-3 w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                />
                            </div>
                            <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                                Send message
                            </button>
                            {sent && <p className="text-sm text-emerald-500">Thanks! Your message has been queued for review.</p>}
                        </div>
                    </form>

                    <aside className="rounded-[32px] border border-slate-200 bg-slate-100 p-8 shadow-xl shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">Get in touch</p>
                                <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">We&apos;re here to support your idea journey.</h2>
                            </div>
                            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p>hello@ideavault.com</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Office</p>
                                    <p>Narsingdi, Dhaka, Bangladesh</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Working hours</p>
                                    <p>Mon–Fri, 9am–6pm GMT+6</p>
                                </div>
                            </div>
                            <div className="rounded-3xl bg-slate-950 p-6 text-slate-100">
                                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Need faster help?</p>
                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    Browse our FAQ in the resources section or send a short message and we&apos;ll respond quickly.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
