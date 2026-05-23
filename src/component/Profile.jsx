"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Input } from "@heroui/react";
import { useSession } from "@/lib/auth-client";
import axios from "axios";
import { formatDistanceToNow, parseJSON } from "date-fns";
import Image from "next/image";

const Profile = () => {
    const { data } = useSession();
    const user = data?.user;
    const [ideas, setIdeas] = useState([]);
    const [loadingIdeas, setLoadingIdeas] = useState(true);
    const [name, setName] = useState("");
    const [nameTouched, setNameTouched] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [updating, setUpdating] = useState(false);
    const displayName = nameTouched ? name : user?.name || "";
    const memberSince = user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "";

    useEffect(() => {
        const fetchIdeas = async () => {
            if (!user) {
                setIdeas([]);
                setLoadingIdeas(false);
                return;
            }

            try {
                setLoadingIdeas(true);
                const response = await axios.get("http://localhost:4000/userCreated/ideas" || "https://idea-vault-backend-gray.vercel.app/userCreated/ideas");
                const payload = await response.data[0];

                if (!response.status === 200) {
                    setErrorMessage(payload?.error || "Unable to load your ideas.");
                    setIdeas([]);
                } else {
                    setIdeas(payload || []);
                }
            } catch (error) {
                setErrorMessage("Unable to load your ideas.");
                setIdeas([]);
            } finally {
                setLoadingIdeas(false);
            }
        };

        fetchIdeas();
    }, [user]);

    const handleUpdateName = async (event) => {
        event.preventDefault();
        const updatedName = displayName.trim();

        if (!updatedName) {
            setErrorMessage("Please enter a valid name.");
            setStatusMessage("");
            return;
        }

        if (updatedName === user?.name) {
            setStatusMessage("Your name is already up to date.");
            setErrorMessage("");
            return;
        }

        setUpdating(true);
        setErrorMessage("");
        setStatusMessage("");

        try {


            const response = await axios.post("/api/auth/update-user", { name: updatedName })
            const result = await response.data;

            if (!response.ok) {
                setErrorMessage(result?.message || result?.error || "Updating.... your name.");
                setTimeout(() => { window.location.reload(); }, 100);
            } else {
                setStatusMessage("Name updated successfully. Reloading...");
                setTimeout(() => {
                    window.location.reload();
                }, 800);
            }
        } catch (error) {
            setTimeout(() => { window.location.reload(); }, 100);
            setErrorMessage("Unable to update your name. Please try again.");
        } finally {
            setUpdating(false);
        }
    };
    // const totalTags = ideas.reduce((count, idea) => count + (idea.tags?.length || 0), 0);

    if (!user) {
        return (
            <section className="min-h-[calc(100vh-280px)] flex flex-col justify-center items-center px-6 py-16 text-center">
                <p className="text-lg font-semibold text-slate-700 mb-4">Sign in to view your profile.</p>
                <Link href="/login">
                    <Button>Go to Login</Button>
                </Link>
            </section>
        );
    }


    const totalCategories = [...new Set(ideas.map((idea) => idea.category))].length;

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">

            <div className="mb-10 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm shadow-slate-200/50">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-semibold">Your profile</p>
                        <h1 className="mt-3 text-3xl font-bold text-slate-900">Hello, {user.name || "creator"}</h1>
                        <p className="mt-3 max-w-2xl text-slate-600">
                            This is your Idea Vault dashboard. Manage your name, review your uploaded ideas, and track your activity.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/95 px-6 py-5 text-white shadow-lg shadow-slate-900/10">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Account</p>
                        <p className="mt-3 text-xl font-semibold">{user.email}</p>
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

                        <form onSubmit={handleUpdateName} className="grid gap-6">
                            <div className="grid gap-2">
                                <label htmlFor="profileName" className="text-sm font-semibold text-slate-800">
                                    Display name
                                </label>
                                <Input
                                    id="profileName"
                                    value={displayName}
                                    onChange={(event) => {
                                        setName(event.target.value);
                                        setNameTouched(true);
                                    }}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="space-y-1">
                                    {statusMessage && <p className="text-sm text-emerald-600">{statusMessage}</p>}
                                    {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
                                </div>
                                <Button type="submit" disabled={updating} className="w-full sm:w-auto">
                                    {updating ? "Updating..." : "Update name"}
                                </Button>
                            </div>
                        </form>
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
                        ) : ideas.length === 0 ? (
                            <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-600">
                                <p className="font-semibold">No ideas yet.</p>
                                <p className="mt-2">Start by adding your first startup idea.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {ideas.map((idea) => (
                                    <article key={idea.id} className="rounded-3xl border flex gap-5 border-slate-200 p-5 shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5">
                                        <div>
                                            <div className="">
                                                <Image src={idea.image} height={"100"} alt={idea.title} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <div>
                                                <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-semibold">{idea.category}</p>
                                                <p className="text-sm text-slate-500">{user.createdAt.toLocaleDateString()}</p>
                                                <h3 className="mt-2 text-xl font-semibold text-slate-900">{idea.title}</h3>
                                                <p className="mt-4 text-slate-600 line-clamp-2">{idea.description}</p>
                                            </div>
                                        </div>
                                        {/* <div className="mt-4 flex flex-wrap gap-2">
                                            {idea.tags?.map((tag) => (
                                                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div> */}
                                    </article>
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
                                <p className="mt-3 text-3xl font-semibold">{ideas.length}</p>
                            </div>
                            <div className="rounded-3xl bg-slate-950/95 p-5 text-white">
                                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Categories used</p>
                                <p className="mt-3 text-3xl font-semibold">{totalCategories}</p>
                            </div>
                            {/* <div className="rounded-3xl bg-slate-950/95 p-5 text-white">
                                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Tags added</p>
                                <p className="mt-3 text-3xl font-semibold">{totalTags}</p>
                            </div> */}
                        </div>
                    </section>

                    <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm shadow-slate-200/50">
                        <h2 className="text-2xl font-bold text-slate-900">Quick actions</h2>
                        <div className="mt-6 space-y-4">
                            <Link href="/addIdea" className="block rounded-3xl border border-blue-100 bg-blue-50 px-5 py-4 text-slate-900 hover:bg-blue-100">
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
};

export default Profile;
