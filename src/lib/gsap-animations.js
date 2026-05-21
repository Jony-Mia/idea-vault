import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const heroEntrance = (container) => {
    if (!container.current) return;
    const q = gsap.utils.selector(container);
    const timeline = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });

    timeline
        .from(container.current, { autoAlpha: 0, y: 40, duration: 0.9 })
        .from(q(".hero-badge"), { y: 20, autoAlpha: 0 }, "-=0.6")
        .from(q(".hero-title"), { y: 40, autoAlpha: 0, stagger: 0.08 }, "-=0.65")
        .from(q(".hero-copy"), { y: 30, autoAlpha: 0 }, "-=0.65")
        .from(q(".hero-cta"), { y: 20, autoAlpha: 0, stagger: 0.1 }, "-=0.65")
        .from(q(".hero-card"), { scale: 0.95, autoAlpha: 0, duration: 1, ease: "power4.out" }, "-=0.85");
};

export const revealCards = (container) => {
    if (!container.current) return;
    const q = gsap.utils.selector(container);
    gsap.from(q(".reveal-card"), {
        scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        y: 40,
        autoAlpha: 0,
        stagger: 0.18,
        ease: "power4.out",
        duration: 0.9,
    });
};

export const revealSectionItems = (container) => {
    if (!container.current) return;
    const q = gsap.utils.selector(container);
    gsap.from(q(".reveal-item"), {
        scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        y: 35,
        autoAlpha: 0,
        stagger: 0.15,
        ease: "back.out(1.2)",
        duration: 0.85,
    });
};

export const countUp = (target, endValue, suffix = "") => {
    if (!target.current) return;
    gsap.fromTo(
        target.current,
        { innerText: 0 },
        {
            innerText: endValue,
            duration: 1.8,
            ease: "power1.out",
            snap: { innerText: 1 },
            onUpdate: () => {
                target.current.innerText = `${Math.round(target.current.innerText)}${suffix}`;
            },
        }
    );
};

export const countUpOnEnter = (container, targets) => {
    if (!container.current) return;

    targets.forEach((target) => {
        const value = Number(target.dataset.end || 0);
        const suffix = target.dataset.suffix || "";

        ScrollTrigger.create({
            trigger: target,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.fromTo(
                    target,
                    { innerText: 0 },
                    {
                        innerText: value,
                        duration: 1.8,
                        ease: "power1.out",
                        snap: { innerText: 1 },
                        onUpdate: () => {
                            target.innerText = `${Math.round(target.innerText)}${suffix}`;
                        },
                    }
                );
            },
        });
    });
};
