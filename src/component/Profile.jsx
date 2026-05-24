"use client";

import { Button, ButtonGroup } from '@heroui/react';
import { PenBoxIcon, Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import UpdateUser from '@/app/lib/UpdateUser';
import { useUser } from '@/context/UserContextProvider';
import { DeleteUserIdea } from '@/app/api/api';

export default function Profile({ UserInputedIdeas }) {


    const { user } = useUser();
    const loadingIdeas = false;
    const memberSince = user?.createdAt ? new Date(user?.createdAt).toLocaleDateString() : "";
    const ideas = UserInputedIdeas;

    // const totalCategories = 2
    const totalCategories = [...new Set(ideas?.map((idea) => idea?.category))]?.length;

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">

            <div className="mb-10 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm shadow-slate-200/50">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-semibold">Your profile</p>
                        <h1 className="mt-3 text-3xl font-bold text-slate-900">Hello, {user?.name || "creator"}</h1>
                        <p className="mt-3 max-w-2xl text-slate-600">
                            This is your Idea Vault dashboard. Manage your name, review your uploaded ideas, and track your activity.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/95 px-6 py-5 text-white shadow-lg shadow-slate-900/10">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Account</p>
                        <p className="mt-3 text-xl font-semibold">{user?.email}</p>
                        {memberSince ? (
                            <p className="mt-2 text-slate-300 text-sm">Member since {memberSince}</p>
                        ) : (
                            <p className="mt-2 text-slate-300 text-sm">Member since —</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-8">
                    <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm shadow-slate-200/50">
                        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Profile settings</h2>
                                <p className="text-slate-600">Update your display name and keep your profile up to date.</p>
                            </div>
                        </div>
                        <UpdateUser userId={user?.id} />

                    </section>

                    <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm shadow-slate-200/50">
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Your ideas</h2>
                                <p className="text-slate-600">All ideas you have submitted are shown here.</p>
                            </div>
                            <Link href="/addIdea" className="text-blue-500 hover:text-blue-600 font-semibold">
                                Add new idea
                            </Link>
                        </div>

                        {loadingIdeas ? (
                            <div className="space-y-3">
                                <div className="h-14 rounded-2xl bg-slate-100 animate-pulse" />
                                <div className="h-14 rounded-2xl bg-slate-100 animate-pulse" />
                            </div>
                        ) : ideas?.length === 0 ? (
                            <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-600">
                                <p className="font-semibold">No ideas yet.</p>
                                <p className="mt-2">Start by adding your first startup idea.</p>
                            </div>
                        ) : (
                            <div className="space-y-4 ">
                                {ideas?.map((idea) => (
                                    <IdeasCard
                                        key={String(idea._id)}
                                        id={idea._id}
                                        idea={idea}
                                        image={idea?.image_url}
                                        title={idea?.title}
                                        description={idea?.description}
                                        date={user?.createdAt.toLocaleDateString()}
                                    />
                                ))}
                            </div>
                        )}
                    </section>
                </div>

                <aside className="space-y-8">
                    <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm shadow-slate-200/50">
                        <h2 className="text-2xl font-bold text-slate-900">Interaction summary</h2>
                        <p className="mt-2 text-slate-600">Track your shared ideas and the activity inside your profile.</p>
                        <div className="mt-6 grid gap-4">
                            <div className="rounded-3xl bg-slate-950/95 p-5 text-white">
                                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Ideas created</p>
                                <p className="mt-3 text-3xl font-semibold">{ideas?.length}</p>
                            </div>
                            <div className="rounded-3xl bg-slate-950/95 p-5 text-white">
                                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Categories used</p>
                                <p className="mt-3 text-3xl font-semibold">{totalCategories}</p>
                            </div>

                        </div>
                    </section>

                    <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm shadow-slate-200/50">
                        <h2 className="text-2xl font-bold text-slate-900">Quick actions</h2>
                        <div className="mt-6 space-y-4">
                            <Link href="/addIdea"
                                className="block rounded-3xl border border-blue-100 bg-blue-50 px-5 py-4 text-slate-900 hover:bg-blue-100">
                                Add another idea to your vault.
                            </Link>
                            <Link href="/all-book" className="block rounded-3xl border border-slate-100 bg-slate-50 px-5 py-4 text-slate-900 hover:bg-slate-100">
                                Browse other ideas and see what people are sharing.
                            </Link>
                        </div>
                    </section>
                </aside>
            </div>
        </section>
    );
}

export const IdeasCard = ({ id, image, category, date, title, description, idea }) => {
    // console.log(id)
    return (
        <div className="relative">
            <article
                className="rounded-3xl w-full border gap-5 flex flex-wrap border-slate-200 p-5 shadow-sm shadow-slate-200/50">
                <div>

                    <div className="">
                        <Image className='rounded-2xl' src={image} height={"150"} width={"150"} alt={title} />
                    </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-semibold">
                            {category}
                        </p>
                        <p className="text-sm text-slate-500">{date}</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">{title}</h3>
                        <p className="mt-4 text-slate-600 line-clamp-2">{description}</p>
                    </div>
                </div>
                {/* <div className=""> */}
                <ButtonGroup className="absolute z-10 top-2 right-2 " variant="outline">
                    <Button onClick={() => DeleteUserIdea(id)} variant="danger" ><Trash /></Button>
                    <Link href={`/ideaDetails/${id}/updateIdea`}>
                        <Button  >
                            <PenBoxIcon />
                        </Button>
                    </Link>
                </ButtonGroup>

            </article>
        </div>

    )
}