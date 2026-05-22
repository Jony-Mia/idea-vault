"use client";
import { useEffect, useRef } from "react";
import { CheckCircle, Rocket, Sparkles, Users } from 'lucide-react';
// import { revealSectionItems } from "@/lib/gsap-animations";

const steps = [
    {
        title: 'Share your concept',
        description: 'Add your startup idea with a clear problem, solution, and market fit.',
        icon: Sparkles,
    },
    {
        title: 'Refine with feedback',
        description: 'Review curated idea cards, gather comments, and polish your pitch.',
        icon: Users,
    },
    {
        title: 'Validate the next step',
        description: 'Use insights to pick the strongest direction and move toward launch.',
        icon: Rocket,
    },
];

const HowItWorks = () => {
    // const sectionRef = useRef(null);

    // useEffect(() => {
    //     revealSectionItems(sectionRef);
    // }, []);

    return (
        <section  className="bg-white py-16 dark:bg-slate-950">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">How it works</p>
                    <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100">Launch better ideas faster</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                        Idea Vault helps founders capture concepts, compare them visually, and turn feedback into stronger product direction.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.title} className="reveal-item group rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-200/30 transition hover:-translate-y-1 hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-500 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                                    <Icon className="h-7 w-7" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{step.description}</p>
                                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-300">
                                    <CheckCircle className="h-4 w-4" />
                                    Step {index + 1}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
