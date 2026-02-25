import { defineField, defineType } from "sanity";

export const projectType = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Project Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Project Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "techStack",
            title: "Tech Stack",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        }),
        defineField({
            name: "highlights",
            title: "Highlights",
            type: "text",
        }),
        defineField({
            name: "linkDemo",
            title: "Live Demo URL",
            type: "url",
        }),
        defineField({
            name: "linkGithub",
            title: "GitHub URL",
            type: "url",
        }),
        defineField({
            name: "orderIdx",
            title: "Display Order",
            type: "number",
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
            title: "title",
            media: "image",
        },
    },
});
