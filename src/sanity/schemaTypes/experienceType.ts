import { defineField, defineType } from "sanity";

export const experienceType = defineType({
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        defineField({
            name: "role",
            title: "Job Role",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "company",
            title: "Company Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "duration",
            title: "Duration",
            type: "string",
            description: "e.g., Jan 2021 - Present",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Brief Description",
            type: "text",
        }),
        defineField({
            name: "achievements",
            title: "Achievements",
            type: "array",
            of: [{ type: "string" }],
            description: "Bullet points for this role.",
        }),
        defineField({
            name: "orderIdx",
            title: "Display Order",
            type: "number",
            description: "Lower numbers appear first.",
            initialValue: 0,
        }),
    ],
    orderings: [
        {
            title: "Display Order",
            name: "displayOrderAsc",
            by: [{ field: "orderIdx", direction: "asc" }],
        },
    ],
    preview: {
        select: {
            title: "role",
            subtitle: "company",
        },
    },
});
