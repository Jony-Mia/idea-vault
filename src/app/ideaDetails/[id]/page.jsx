import Image from 'next/image';
import Link from 'next/link';
import { GetIdeaDetails } from '@/app/api/api';


export default async function IdeaDetailsPage({ params }) {
  const {id} = await params;
  const idea = await GetIdeaDetails(id);

  return (
    <section className="min-h-screen bg-slate-50 py-14 dark:bg-slate-950">
      <br />
      <br />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
              Idea details
            </p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
              {idea.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
              {idea.details}
            </p>
          </div>
          <Link href="/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:bg-slate-800">
            Back to ideas
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-[32px] bg-white shadow-xl shadow-slate-200/40 dark:bg-slate-900 dark:shadow-black/20">
              <div className="relative h-96 w-full">
                <Image src={idea.image} alt={idea.title} fill className="object-cover" />
              </div>
              <div className="space-y-6 p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                    {idea.category}
                  </span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {idea.stage}
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Problem</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{idea.problem}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Solution</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{idea.solution}</p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Target market</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{idea.targetMarket}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Revenue model</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{idea.revenueModel}</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Competitors</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{idea.competitors}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Impact overview</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{idea.impact}</p>
                {/* <div className="mt-6 grid gap-3">
                  {idea.metrics.map((metric) => (
                    <div key={metric} className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {metric}
                    </div>
                  ))}
                </div> */}
              </div>
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quick reference</h3>
                <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Category</p>
                    <p>{idea.category}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Stage</p>
                    <p>{idea.stage}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Tags</p>
                    {/* <div className="mt-2 flex flex-wrap gap-2">
                      {idea.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Growth roadmap</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                This idea is structured to move from early validation into growth with tracking, engagement and premium monetization layers.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">Validate initial user needs and core features.</li>
                <li className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">Launch early beta with targeted user segments.</li>
                <li className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">Scale with community feedback and premium offers.</li>
              </ul>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-blue-600 p-8 text-white shadow-xl shadow-blue-200/20 dark:shadow-blue-950/20">
              <h2 className="text-2xl font-semibold">Why this idea matters</h2>
              <p className="mt-4 text-sm leading-7 text-blue-50">
                It combines emotional context, real-world utility, and a strong market story — the ingredients for a startup that can turn inspiration into traction.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
