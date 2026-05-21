"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { nunito } from "@/app/layout";
import Image_1 from "@/app/assets/image_1.png";
import Image_2 from "@/app/assets/image_2.png";
import Image_3 from "@/app/assets/image_3.png";
import Image_4 from "@/app/assets/image_4.png";
import Image_5 from "@/app/assets/image_5.png";
import { revealCards } from "@/lib/gsap-animations";

const categories = [
  { id: 1, label: "Tech", icon: Image_1 },
  { id: 2, label: "Finance", icon: Image_2 },
  { id: 3, label: "Health", icon: Image_3 },
  { id: 4, label: "Judicial", icon: Image_4 },
  { id: 5, label: "Industrial", icon: Image_5 },
];

const ServiceCategory = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    revealCards(sectionRef);
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-50 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">
            Explore categories
          </p>
          <h2 className={`mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100 ${nunito.className}`}>
            Browse ideas by market and opportunity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Discover fast-growing startup themes and the industries where ideas can scale.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((item) => (
            <div
              key={item.id}
              className="reveal-card group overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-200/30 transition hover:-translate-y-1 hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50 dark:bg-blue-900/70">
                <Image src={item.icon} alt={item.label} height={72} width={72} />
              </div>
              <h3 className={`mt-6 text-xl font-semibold text-slate-900 dark:text-slate-100 ${nunito.className}`}>
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Thoughtful ideas for {item.label.toLowerCase()} innovators and founders.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategory;
