"use client";

import { Button, Input, Label, ListBox, TextArea, Select, TextField } from '@heroui/react';
import { useState } from 'react';
import { PostUserIdea } from '../api/api';
import { useSession } from '@/lib/auth-client';

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


const AddIdea = () => {
    
    const [tagInput, setTagInput] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {data} = useSession();
    const id = data?.user?.id;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setErrors((previous) => ({ ...previous, [name]: undefined }));
    };

    const addTag = () => {
        const trimmed = tagInput.trim();
        setTagInput('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
        let formField = new FormData(e.target)
        let formData = Object.fromEntries(formField)
         await PostUserIdea(formData, id);

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

                <div className="grid gap-8 lg:grid-cols-[1.75fr_1fr]">
                    <section className="reveal-item rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid gap-6 ">
                                <TextField type="text" name="title" aria-label="Idea title" required>
                                    <Input
                                        onChange={handleChange}
                                        placeholder="Name of Your Idea"
                                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </TextField>
                            </div>
                            <div className="grid gap-6 ">
                                <TextField type="url" name="image_url" aria-label="Idea title" required>
                                    <Input
                                        onChange={handleChange}
                                        required
                                        placeholder="Image URL"
                                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                    />
                                </TextField>
                            </div>


                            <div>
                                <TextField id="description" aria-label="Brief description" required error={errors.description}>
                                    <TextArea
                                        name="description"
                                        rows={4}
                                        onChange={handleChange}
                                        placeholder="Write a short summary of the idea."
                                    />
                                </TextField>
                            </div>
                            <div className='grid gap-6 lg:grid-cols-2'>
                                <Select className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" aria-label='Select Your Label' placeholder="Select Categories">
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


                                <Select className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" aria-label='Select Label' placeholder="Select Level">
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

                            <div className="grid gap-6 lg:grid-cols-2">
                                <TextField id="problem" aria-label="Problem statement" required error={errors.problem}>
                                    <TextArea
                                        name="problem"
                                        rows={4}
                                        onChange={handleChange}
                                        placeholder="What issue does this idea solve?"

                                    />
                                </TextField>

                                <TextField id="solution" aria-label="Solution" required error={errors.solution}>
                                    <TextArea
                                        name="solution"
                                        rows={4}
                                        onChange={handleChange}
                                        placeholder="How does your idea solve the problem?"
                                    />
                                </TextField>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-2">
                                <TextField id="targetMarket" aria-label="Target market" required error={errors.targetMarket}>
                                    <TextArea
                                        name="targetMarket"
                                        rows={3}
                                        onChange={handleChange}
                                        placeholder="Describe the ideal user or customer."

                                    />
                                </TextField>

                                <TextField id="competitors" aria-label="Competitors & alternatives">
                                    <TextArea
                                        name="competitors"
                                        rows={3}
                                        onChange={handleChange}
                                        placeholder="Who else is building something similar?"

                                    />
                                </TextField>
                            </div>

                            {/* <div className="grid gap-6 lg:grid-cols-2">
                                <TextField name="revenue" aria-label="Revenue model">
                                    <TextArea
                                        rows={3}
                                        onChange={handleChange}
                                        placeholder="Subscription, commission, licensing, or other model."
                                    />
                                </TextField>

                               
                            </div> */}

                            <div className="space-y-3">
                                <TextField name="tags" aria-label="Tags (optional)">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <Input
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
                               
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="inline-flex items-center h-auto w-full  justify-center rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 text-lg font-semibold text-white transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isLoading ? 'Submitting...' : 'Submit idea'}
                                </Button>
                                {/* <button
                                    type="button"
                                    className="rounded-3xl border border-slate-300 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                                >
                                    Reset form
                                </button> */}
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
