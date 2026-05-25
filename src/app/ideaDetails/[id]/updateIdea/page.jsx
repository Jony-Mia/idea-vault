import { GetIdeaDetails } from '@/app/api/api';
import IdeaUpdateForm from '@/component/IdeaUpdateForm';

const AddIdea = async ({ params }) => {
    const { id } = await params;
    const idea = await GetIdeaDetails(id);

    return (
        <div className="min-h-screen bg-slate-50 py-10 dark:bg-slate-950 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                <div className="grid gap-8 lg:grid-cols-[1.75fr_1fr]">
                    <section className="reveal-item rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                        <IdeaUpdateForm id={id} idea={idea} />
                    </section>

                    <aside className="reveal-item rounded-[32px] border border-slate-200 bg-blue-50 p-8 shadow-xl shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/15">
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                                    Submission guide
                                </p>
                                <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                                    Build a stronger idea
                                </h2>
                            </div>
                            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                                <li className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-950">
                                    <strong className="block font-semibold">Keep the problem simple</strong>
                                    Write it from the customer&apos;s perspective.
                                </li>
                                <li className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-950">
                                    <strong className="block font-semibold">Explain your value</strong>
                                    Describe what makes your idea different.
                                </li>
                                <li className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-950">
                                    <strong className="block font-semibold">Name your customer</strong>
                                    Be specific about the market or audience.
                                </li>
                                <li className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-950">
                                    <strong className="block font-semibold">Share your path to revenue</strong>
                                    Add one clear sentence about how it earns money.
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default AddIdea;
