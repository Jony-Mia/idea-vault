"use client";
import { UpdateUserIdea } from '@/app/api/api';
import { useSession } from '@/lib/auth-client';
import { Input, TextField, ListBox, Select, TextArea, Button } from '@heroui/react';
import React, { useState } from 'react';
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

const DIFFICULTY_LEVELS =  [
  {
    value: "idea",
    label: "Idea"
  },
  {
    value: "validation",
    label: "Validation"
  },
  {
    value: "mvp",
    label: "MVP"
  },
  {
    value: "launch",
    label: "Launch"
  },
  {
    value: "scaling",
    label: "Scaling"
  },
  {
    value: "maturity",
    label: "Maturity"
  }
];

const IdeaUpdateForm = ({ idea }) => {
    let [errors, setErrors] = useState([])
    console.log(idea)
    let { data } = useSession();
    const userId = idea._id;

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        
        setErrors((previous) => ({ ...previous, [name]: undefined }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setIsLoading(true);
        try {
            let formField = new FormData(e.target)
            let formData = Object.fromEntries(formField)
            await UpdateUserIdea(formData, userId);

            alert('Your startup idea was submitted successfully.');
        } catch (error) {
            console.error(error);
            alert('Submission failed. Please try again.');
        }

    };

    const addTag = () => {
        const trimmed = tagInput.trim();
        // setTagInput('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-6 ">
                    <TextField type="text" name="title" aria-label="Idea title" required>
                        <Input
                            defaultValue={idea.title}
                            onchange={handleChange}
                            placeholder="Name of Your Idea"
                            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                        />
                    </TextField>
                </div>
                <div className="grid gap-6 ">
                    <TextField type="url" name="image_url" aria-label="Idea title" required>
                        <Input
                            defaultValue={idea.image_url}
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
                            onchange={handleChange}
                            placeholder="Write a short summary of the idea."
                        />
                    </TextField>
                </div>
                <div className='grid gap-6 lg:grid-cols-2'>
                    <Select className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" aria-label='Select Your Label' name='category' placeholder="Select Categories">
                        {/* <Label>Level</Label> */}
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                {ideaCategories.map((category) => (
                                    <ListBox.Item key={category.value} id={category.value} defaultValue={category.value}>
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
                                    <ListBox.Item key={level.value} id={level.value} defaultValue={level.value}>
                                        {level.label}
                                    </ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* <TextField id="problem"> */}
                        <TextArea required
                            name="problem"
                            rows={4}
                            defaultValue={idea.problem}
                            onchange={handleChange}
                            placeholder="What issue does this idea solve?"
                             aria-label="Problem statement" 
                        />
                    {/* </TextField> */}

                    {/* <TextField id="solution"> */}
                        <TextArea aria-label="Solution" required 
                            name="solution"
                            defaultValue={idea.solution}
                            rows={4}
                            onchange={handleChange}
                            placeholder="How does your idea solve the problem?"
                        />
                    {/* </TextField> */}
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* <TextField id="targetMarket"> */}
                        <TextArea aria-label="Target market" required 
                            name="targetMarket"
                            rows={3}
                            defaultValue={idea.targetMarket}
                            onchange={handleChange}
                            placeholder="Describe the ideal user or customer."

                        />
                    {/* </TextField> */}

                    {/* <TextField id="competitors"> */}
                        <TextArea aria-label="Competitors & alternatives"
                            name="competitors"
                            rows={3}
                            defaultValue={idea.competitors}
                            onchange={handleChange}
                            placeholder="Who else is building something similar?"

                        />
                    {/* </TextField> */}
                </div>

                {/* <div className="grid gap-6 lg:grid-cols-2">
                                <TextField name="revenue" aria-label="Revenue model">
                                    <TextArea
                                        rows={3}
                                        onchange={handleChange}
                                        placeholder="Subscription, commission, licensing, or other model."
                                    />
                                </TextField>
                            </div> */}

                <div className="space-y-3">
                    <TextField className="flex flex-col gap-3 sm:flex-row sm:items-center" name="tags" aria-label="Tags (optional)">
                        {/* <div className="flex flex-col gap-3 sm:flex-row sm:items-center"> */}
                            <Input
                                // onchange={(event) => setTagInput(event.target.value)}
                                // onKeyDown={(event) => event.key === 'Enter' && (event.preventDefault(), addTag())}
                                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                                defaultValue={idea.tags}
                                placeholder="Examples: AI, marketplace, health"
                            />
                            <Button
                                type="button"
                                onClick={addTag}
                                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                            >
                                Add tag
                            </Button>
                        {/* </div> */}
                    </TextField>

                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                        type="submit"

                        className="inline-flex items-center h-auto w-full  justify-center rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 text-lg font-semibold text-white transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        Submit idea
                    </Button>
                    {/* <button
                                    type="button"
                                    className="rounded-3xl border border-slate-300 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                                >
                                    Reset form
                                </button> */}
                </div>
            </form>
        </div>
    );
};

export default IdeaUpdateForm;