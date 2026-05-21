"use client";

import { useState } from 'react';

const STARTUP_CATEGORIES = [
    { value: 'technology', label: 'Technology' },
    { value: 'fintech', label: 'FinTech' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'ecommerce', label: 'E-Commerce' },
    { value: 'social', label: 'Social Media' },
    { value: 'saas', label: 'SaaS' },
    { value: 'ai-ml', label: 'AI / ML' },
    { value: 'sustainability', label: 'Sustainability' },
    { value: 'entertainment', label: 'Entertainment' },
];

const DIFFICULTY_LEVELS = [
    { value: 'low', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'Hard' },
];

const InputField = ({ id, label, required, error, children }) => (
    <div className="space-y-3">
        <label htmlFor={id} className="font-semibold text-slate-700 dark:text-slate-200">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
        {children}
        {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
);

const PageHeader = () => (
    <div className="mb-10 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
            <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                <span className="text-3xl">💡</span>
            </div>
            <div>
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                    Share your startup idea
                </h1>
                <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                    Use this form to capture your idea, the problem it solves, your target market, and why it matters.
                </p>
            </div>
        </div>
    </div>
);

const AddIdea = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        problem: '',
        solution: '',
        targetMarket: '',
        competitors: '',
        revenue: '',
        difficulty: 'medium',
        tags: [],
    });

    const [tagInput, setTagInput] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
        setErrors((previous) => ({ ...previous, [name]: undefined }));
    };

    const addTag = () => {
        const trimmed = tagInput.trim();
        if (!trimmed || formData.tags.includes(trimmed)) return;
        setFormData((previous) => ({ ...previous, tags: [...previous.tags, trimmed] }));
        setTagInput('');
    };

    const removeTag = (tag) => {
        setFormData((previous) => ({
            ...previous,
            tags: previous.tags.filter((item) => item !== tag),
        }));
    };

    const resetForm = () => {
        setFormData({
            title: '',
            category: '',
            description: '',
            problem: '',
            solution: '',
            targetMarket: '',
            competitors: '',
            revenue: '',
            difficulty: 'medium',
            tags: [],
        });
        setTagInput('');
        setErrors({});
    };

    const validate = () => {
        const validationErrors = {};
        if (!formData.title.trim()) validationErrors.title = 'Title is required.';
        if (!formData.category) validationErrors.category = 'Please choose a category.';
        if (!formData.description.trim()) validationErrors.description = 'Brief description is required.';
        if (!formData.problem.trim()) validationErrors.problem = 'Problem statement is required.';
        if (!formData.solution.trim()) validationErrors.solution = 'Solution description is required.';
        if (!formData.targetMarket.trim()) validationErrors.targetMarket = 'Target market is required.';
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validate()) return;

        setIsLoading(true);

        try {
            const response = await fetch('/api/ideas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            if (!response.ok) {
                throw new Error('Unable to submit idea.');
            }

            resetForm();
            alert('Your startup idea was submitted successfully.');
        } catch (error) {
            console.error(error);
            alert('Submission failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10 dark:bg-slate-950 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <PageHeader />

                <div className="grid gap-8 lg:grid-cols-[1.75fr_1fr]">
                    <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <InputField id="title" label="Idea title" required error={errors.title}>
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="AI-powered wellness planner"
                                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </InputField>

                                <InputField id="category" label="Category" required error={errors.category}>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    >
                                        <option value="">Choose category</option>
                                        {STARTUP_CATEGORIES.map((category) => (
                                            <option key={category.value} value={category.value}>
                                                {category.label}
                                            </option>
                                        ))}
                                    </select>
                                </InputField>
                            </div>

                            <InputField id="description" label="Brief description" required error={errors.description}>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Write a short summary of the idea."
                                    className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                />
                            </InputField>

                            <div className="grid gap-6 lg:grid-cols-2">
                                <InputField id="problem" label="Problem statement" required error={errors.problem}>
                                    <textarea
                                        id="problem"
                                        name="problem"
                                        rows={4}
                                        value={formData.problem}
                                        onChange={handleChange}
                                        placeholder="What issue does this idea solve?"
                                        className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </InputField>

                                <InputField id="solution" label="Solution" required error={errors.solution}>
                                    <textarea
                                        id="solution"
                                        name="solution"
                                        rows={4}
                                        value={formData.solution}
                                        onChange={handleChange}
                                        placeholder="How does your idea solve the problem?"
                                        className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </InputField>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-2">
                                <InputField id="targetMarket" label="Target market" required error={errors.targetMarket}>
                                    <textarea
                                        id="targetMarket"
                                        name="targetMarket"
                                        rows={3}
                                        value={formData.targetMarket}
                                        onChange={handleChange}
                                        placeholder="Describe the ideal user or customer."
                                        className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </InputField>

                                <InputField id="competitors" label="Competitors & alternatives">
                                    <textarea
                                        id="competitors"
                                        name="competitors"
                                        rows={3}
                                        value={formData.competitors}
                                        onChange={handleChange}
                                        placeholder="Who else is building something similar?"
                                        className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </InputField>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-2">
                                <InputField id="revenue" label="Revenue model">
                                    <textarea
                                        id="revenue"
                                        name="revenue"
                                        rows={3}
                                        value={formData.revenue}
                                        onChange={handleChange}
                                        placeholder="Subscription, commission, licensing, or other model."
                                        className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </InputField>

                                <InputField id="difficulty" label="Difficulty level">
                                    <select
                                        id="difficulty"
                                        name="difficulty"
                                        value={formData.difficulty}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    >
                                        {DIFFICULTY_LEVELS.map((level) => (
                                            <option key={level.value} value={level.value}>
                                                {level.label}
                                            </option>
                                        ))}
                                    </select>
                                </InputField>
                            </div>

                            <div className="space-y-3">
                                <InputField id="tags" label="Tags (optional)">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <input
                                            id="tags"
                                            name="tags"
                                            value={tagInput}
                                            onChange={(event) => setTagInput(event.target.value)}
                                            onKeyDown={(event) => event.key === 'Enter' && (event.preventDefault(), addTag())}
                                            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                            placeholder="Examples: AI, marketplace, health"
                                            type="text"
                                        />
                                        <button
                                            type="button"
                                            onClick={addTag}
                                            className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                                        >
                                            Add tag
                                        </button>
                                    </div>
                                </InputField>
                                <div className="flex flex-wrap gap-2">
                                    {formData.tags.map((tag) => (
                                        <button
                                            key={tag}
                                            type="button"
                                            onClick={() => removeTag(tag)}
                                            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                                        >
                                            {tag}
                                            <span className="rounded-full bg-slate-300 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                                                ×
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="inline-flex items-center justify-center rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isLoading ? 'Submitting...' : 'Submit idea'}
                                </button>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="rounded-3xl border border-slate-300 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                                >
                                    Reset form
                                </button>
                            </div>
                        </form>
                    </section>

                    <aside className="rounded-[32px] border border-slate-200 bg-blue-50 p-8 shadow-xl shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/15">
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
