"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { nunito, poppins } from "@/app/layout";
import Slide_1 from "@/app/assets/Slide_1.png";
import Slide_2 from "@/app/assets/Slide_3.png";
import IdeaVault from "@/app/assets/logo.png";
import { heroEntrance } from "@/lib/gsap-animations";

const Slidered = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        heroEntrance(heroRef);
    }, []);

    return (
        <div ref={heroRef} className="relative overflow-hidden">
            <Swiper spaceBetween={20} slidesPerView={1} className="relative">
                <SwiperSlide className="bg-slate-950 text-white">
                    <div className="grid gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-24">
                        <div className="max-w-2xl">
                            <div className="hero-badge inline-flex items-center gap-3 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-slate-950/30">
                                <Image src={IdeaVault} alt="Idea Vault" width={40} height={40} className="rounded-full" />
                                Idea Vault
                            </div>
                            <h1 className={`hero-title mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl ${nunito.className}`}>
                                Build better startup ideas with a shared idea vault.
                            </h1>
                            <p className={`hero-copy mt-6 max-w-xl text-base text-slate-300 ${poppins.className}`}>
                                Capture bold concepts, compare them visually, and discover the strongest path to market with community feedback.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link href="/all-book" className="hero-cta inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 hover:bg-blue-600">
                                    Explore ideas
                                </Link>
                                <Link href="/addIdea" className="hero-cta inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20">
                                    Share an idea
                                </Link>
                            </div>
                            <div className="mt-12 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-[24px] bg-slate-900/80 p-5 text-sm text-slate-200">
                                    <p className="font-semibold text-white">Fast idea capture</p>
                                    Organize your concepts with clear problem and solution statements.
                                </div>
                                <div className="rounded-[24px] bg-slate-900/80 p-5 text-sm text-slate-200">
                                    <p className="font-semibold text-white">Smart discovery</p>
                                    Browse top picks, categories, and practical startup themes.
                                </div>
                                <div className="rounded-[24px] bg-slate-900/80 p-5 text-sm text-slate-200">
                                    <p className="font-semibold text-white">Community-ready</p>
                                    Share ideas, gather insight, and refine your pitch.
                                </div>
                            </div>
                        </div>

                        <div className="hero-card overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/40">
                            <Image src={Slide_1} alt="Startup concept" className="h-full w-full rounded-[28px] object-cover" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-linear-to-br from-slate-100 via-slate-200 to-slate-100 text-slate-950">
                    <div className="grid gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-24">
                        <div className="max-w-2xl">
                            <div className="hero-badge inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm text-slate-900 shadow-lg shadow-slate-200/30">
                                <Image src={IdeaVault} alt="Idea Vault" width={40} height={40} className="rounded-full" />
                                Idea Vault
                            </div>
                            <h1 className={`hero-title mt-8 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl ${nunito.className}`}>
                                Turn startup ideas into a shared product roadmap.
                            </h1>
                            <p className={`hero-copy mt-6 max-w-xl text-base text-slate-600 ${poppins.className}`}>
                                Use the dashboard to compare market opportunities, explain your unique value, and plan your first launch steps.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link href="/all-book" className="hero-cta inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 hover:bg-blue-600">
                                    Discover ideas
                                </Link>
                                <Link href="/addIdea" className="hero-cta inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                                    Add your idea
                                </Link>
                            </div>
                        </div>

                        <div className="hero-card overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/40">
                            <Image src={Slide_2} alt="Idea innovation" className="h-full w-full rounded-[28px] object-cover" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slidered;