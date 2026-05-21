"use client";
import { useEffect, useRef } from "react";
import { revealCards, countUpOnEnter } from "@/lib/gsap-animations";

const stats = [
    { label: 'Ideas shared', value: '320', suffix: '+' },
    { label: 'Fast feedback loops', value: '48', suffix: '/5' },
    { label: 'Market categories', value: '15', suffix: '+' },
    { label: 'Community builders', value: '1200', suffix: '+' },
];

const StatsSection = () => {
    const sectionRef = useRef(null);
    const statRefs = useRef([]);
    const addStatRef = (el) => {
        if (el && !statRefs.current.includes(el)) {
            statRefs.current.push(el);
        }
    };

    useEffect(() => {
        revealCards(sectionRef);
        if (sectionRef.current) {
            countUpOnEnter(sectionRef, statRefs.current);
        }
    }, []);

    return (
        <section ref={sectionRef} className="bg-linear-to-r from-sky-600 to-blue-700 py-16 text-white">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">Community impact</p>
                    <h2 className="mt-4 text-3xl font-bold">Built for founders who want fast feedback</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-cyan-100 sm:text-base">
                        See the growth, engagement, and idea momentum your team can achieve in one collaborative startup vault.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item, index) => (
                        <div key={item.label} className="reveal-card rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-xl shadow-slate-950/20">
                            <p
                                ref={addStatRef}
                                data-end={item.value}
                                data-suffix={item.suffix}
                                className="text-4xl font-semibold tracking-tight"
                            >
                                0{item.suffix}
                            </p>
                            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-cyan-100">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
