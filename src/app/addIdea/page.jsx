"use client";

import { Button, Input, Label, ListBox, TextArea, Select, TextField } from '@heroui/react';
import { useEffect, useRef, useState } from 'react';
// import { revealSectionItems } from '@/lib/gsap-animations';

const ideaCategories = [
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

// const TextField = ({ id, label, required, error, children }) => (
//     <div className="space-y-3">
//         <label htmlFor={id} className="font-semibold text-slate-700 dark:text-slate-200">
//             {label}
//             {required && <span className="text-red-500">*</span>}
//         </label>
//         {children}
//         {error && <p className="text-sm text-red-500">{error}</p>}
//     </div>
// );

const PageHeader = () => (
    <div className="mb-10 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
            <div className="rounded-full bg-blue-100 p-4 shadow-lg shadow-blue-200/30 dark:bg-blue-900 dark:shadow-blue-900/20">
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
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
                { label: 'Fast to fill', detail: 'Quick entry with smart field layout.' },
                { label: 'Reviewer-ready', detail: 'Shareable idea format built for feedback.' },
            ].map((item) => (
                <div key={item.label} className="reveal-item rounded-[28px] border border-slate-200 bg-white px-6 py-5 shadow-lg shadow-slate-200/20 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-900 dark:text-slate-100">{item.label}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.detail}</p>
                </div>
            ))}
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
    // const pageRef = useRef(null);

    // useEffect(() => {
    //     revealSectionItems(pageRef);
    // }, []);

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

    // const validate = () => {
    //     const validationErrors = {};
    //     if (!formData.title.trim()) validationErrors.title = 'Title is required.';
    //     if (!formData.category) validationErrors.category = 'Please choose a category.';
    //     if (!formData.description.trim()) validationErrors.description = 'Brief description is required.';
    //     if (!formData.problem.trim()) validationErrors.problem = 'Problem statement is required.';
    //     if (!formData.solution.trim()) validationErrors.solution = 'Solution description is required.';
    //     if (!formData.targetMarket.trim()) validationErrors.targetMarket = 'Target market is required.';
    //     setErrors(validationErrors);
    //     return Object.keys(validationErrors).length === 0;
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // if (!validate()) return;

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
                {/* <PageHeader /> */}

                {/* <div className="mb-12 grid gap-6 sm:grid-cols-3">
                    {[
                        { title: 'Fast capture', subtitle: 'Save the core details of your idea in one polished form.' },
                        { title: 'Clear validation', subtitle: 'Add market, problem, and solution insights for better feedback.' },
                        { title: 'Share effortlessly', subtitle: 'Publish your draft directly into the vault for review.' },
                    ].map((item) => (
                        <div key={item.title} className="reveal-item rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600 dark:text-blue-300">{item.title}</p>
                            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.subtitle}</p>
                        </div>
                    ))}
                </div> */}

                <div className="grid gap-8 lg:grid-cols-[1.75fr_1fr]">
                    <section className="reveal-item rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <TextField type="text" name="title" label="Idea title" required>
                                    <Input
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Name of Your Idea"
                                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </TextField>
                                 <Select   className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="Select Categories">
                                    {/* <Label>Level</Label> */}
                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            {ideaCategories.map((category) => (
                                                <ListBox.Item key={category.value} id={category.value} value={category.value}>
                                                    {category.label}
                                                </ListBox.Item>
                                            ))}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            <TextField id="description" label="Brief description" required error={errors.description}>
                                <TextArea
                                    name="description"
                                    rows={4}
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Write a short summary of the idea."
                                    className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                />
                            </TextField>

                            <div className="grid gap-6 lg:grid-cols-2">
                                <TextField id="problem" label="Problem statement" required error={errors.problem}>
                                    <TextArea
                                        name="problem"
                                        rows={4}
                                        value={formData.problem}
                                        onChange={handleChange}
                                        placeholder="What issue does this idea solve?"
                                        className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </TextField>

                                <TextField id="solution" label="Solution" required error={errors.solution}>
                                    <TextArea
                                        name="solution"
                                        rows={4}
                                        value={formData.solution}
                                        onChange={handleChange}
                                        placeholder="How does your idea solve the problem?"
                                        className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </TextField>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-2">
                                <TextField id="targetMarket" label="Target market" required error={errors.targetMarket}>
                                    <TextArea
                                        name="targetMarket"
                                        rows={3}
                                        value={formData.targetMarket}
                                        onChange={handleChange}
                                        placeholder="Describe the ideal user or customer."
                                        className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </TextField>

                                <TextField id="competitors" label="Competitors & alternatives">
                                    <TextArea
                                        name="competitors"
                                        rows={3}
                                        value={formData.competitors}
                                        onChange={handleChange}
                                        placeholder="Who else is building something similar?"
                                        className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </TextField>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-2">
                                <TextField name="revenue" aria-label="Revenue model">
                                    <TextArea
                                        rows={3}
                                        value={formData.revenue}
                                        onChange={handleChange}
                                        placeholder="Subscription, commission, licensing, or other model."
                                        className="w-full rounded-[28px] border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </TextField>

                                {/* <TextField id="difficulty" label="Difficulty level"> */}
                                <Select className="w-[256px]" placeholder="Select Level">
                                    <Label>Level</Label>
                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            {DIFFICULTY_LEVELS.map((level) => (
                                                <ListBox.Item key={level.value} id={level.value} value={level.value}>
                                                    {level.label}
                                                </ListBox.Item>
                                            ))}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                     
                            </div>

                            <div className="space-y-3">
                                <TextField name="tags" label="Tags (optional)">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <Input

                                            value={tagInput}
                                            onChange={(event) => setTagInput(event.target.value)}
                                            onKeyDown={(event) => event.key === 'Enter' && (event.preventDefault(), addTag())}
                                            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                            placeholder="Examples: AI, marketplace, health"
                                            type="text"
                                        />
                                        <Button
                                            type="button"
                                            onClick={addTag}
                                            className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                                        >
                                            Add tag
                                        </Button>
                                    </div>
                                </TextField>
                                <div className="flex flex-wrap gap-2">
                                    {formData.tags.map((tag) => (
                                        <Button
                                            key={tag}
                                            type="button"
                                            onClick={() => removeTag(tag)}
                                            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                                        >
                                            {tag}
                                            <span className="rounded-full bg-slate-300 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                                                ×
                                            </span>
                                        </Button>
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
