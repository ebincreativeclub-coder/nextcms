import { defineField, defineType } from "sanity";

export const profileType = defineType({
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "bio",
            title: "Biography",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Hero Portrait",
            type: "image",
            options: {
                hotspot: true, // Allow cropping in the studio
            },
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "tagline",
        },
    },
});
