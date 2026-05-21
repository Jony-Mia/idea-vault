import Link from 'next/link';
import Image from 'next/image';
import { FEATURED_IDEAS } from '@/lib/featuredIdeas';
import Slide1 from '@/app/assets/Slide_1.png';
import Slide2 from '@/app/assets/Slide_2.png';
import Slide3 from '@/app/assets/Slide_3.png';
import { GetIdeas } from '@/app/api/api';

const imageMap = {
  slide1: Slide1,
  slide2: Slide2,
  slide3: Slide3,
};

const Featured = async () => {
    const GetAllIdeas = await GetIdeas()
    // const SingleIdea= async (id)=>await GetIdeaDetails(id)
    
    console.log(GetAllIdeas);
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
            Featured ideas
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Explore today&apos;s most promising startup concepts
          </h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
          Each card highlights a startup idea with a hero image, category, stage and key features to inspire your next project.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {GetAllIdeas.map((idea) => (
          <Link
            key={idea._id}
            href={`/ideaDetails/${idea._id}`}
            className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
          >
            <div className="relative h-60 w-full">
              <Image
                src={imageMap[idea.image]}
                alt={idea.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                  {idea.category}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {idea.stage}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {idea.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {idea.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {idea.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">View details</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {idea.features.length} key features
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Featured;
