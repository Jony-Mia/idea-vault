import Link from 'next/link';
import Image from 'next/image';
import { GetIdeas } from '@/app/api/api';
import Slide1 from '@/app/assets/Slide_1.png';
import Slide2 from '@/app/assets/Slide_2.png';
import Slide3 from '@/app/assets/Slide_3.png';

const imageMap = {
    slide1: Slide1,
    slide2: Slide2,
    slide3: Slide3,
};

// const resolveIdeaId = (idea) => {
//     return idea._id || (typeof idea.id === 'string' ? idea.id : idea.id?.$oid) || 'unknown';
// };

export default async function AllBookPage() {
    const ideas = await GetIdeas();

    return (
        <section className="min-h-screen bg-slate-50 py-14 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
                            Explore ideas
                        </p>
                        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Browse every startup concept in the world of Idea Vault.
                        </h1>
                    </div>
                    <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                        Filter through bold ideas, discover growth themes, and click into any card to view full details and comments.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {ideas.map((idea) => {
                        const ideaId = idea._id
                        console.log(idea);
                        
                        // const commentsCount = idea.comments?.length || 0;
                        // const featuresCount = idea.features?.length || 0;

                        return (
                            <Link
                                key={ideaId}
                                href={`/ideaDetails/${ideaId}`}
                                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
                            >
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={idea.image}
                                        alt={idea.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-4 p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                                            {idea.category}
                                        </span>
                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                            {idea.stage}
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-100">
                                            {idea.title}
                                        </h2>
                                        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                            {idea.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {idea.tags?.slice(0, 4).map((tag) => (
                                            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                        {/* <span>{commentsCount} comments</span> */}
                                        {/* <span>{featuresCount} features</span> */}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}