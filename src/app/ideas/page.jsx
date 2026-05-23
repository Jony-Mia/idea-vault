'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { GetIdeas } from '@/app/api/api';
import { useIdeas } from '@/context/IdeasContextProvider';

export default function AllBookPage() {
    const { ideas: contextIdeas, setAllIdeas } = useIdeas();
    const [ideas, setIdeas] = useState(contextIdeas);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                const data = await GetIdeas();
                setIdeas(data);
                setAllIdeas(data);

                // Extract unique categories
                const uniqueCategories = [...new Set(data.map(idea => idea.category))].filter(Boolean).sort();
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching ideas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchIdeas();
    }, [setAllIdeas]);

    // Listen for changes in context ideas (when new idea is added)
    useEffect(() => {
        if (contextIdeas.length > 0) {
            setIdeas(contextIdeas);
        }
    }, [contextIdeas]);

    // Filter ideas based on search term and category
    const filteredIdeas = ideas.filter(idea => {
        const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            idea.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || idea.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    if (loading) {
        return (
            <section className="min-h-screen bg-slate-50 py-14 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center py-20">
                        <p className="text-lg text-slate-600 dark:text-slate-400">Loading ideas...</p>
                    </div>
                </div>
            </section>
        );
    }

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

                {/* Search and Filter Section */}
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Search Bar */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search by title or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-blue-400"
                        />
                    </div>

                    {/* Category Filter */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400"
                    >
                        <option value="all">All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Showing {filteredIdeas.length} of {ideas.length} ideas
                    </p>
                </div>

                {/* Ideas Grid */}
                {filteredIdeas.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {filteredIdeas.map((idea) => {
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
                ) : (
                    <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white py-20 dark:border-slate-700 dark:bg-slate-900">
                        <div className="text-center">
                            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">No ideas found</p>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                Try adjusting your search or category filter
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}