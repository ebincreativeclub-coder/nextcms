import { defineQuery } from "next-sanity";

export const PROFILE_QUERY = defineQuery(`*[_type == "profile"][0] {
  name,
  tagline,
  bio,
  "imageUrl": image.asset->url
}`);

export const EXPERIENCE_QUERY = defineQuery(`*[_type == "experience"] | order(orderIdx asc) {
  _id,
  role,
  company,
  duration,
  description,
  achievements
}`);

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"] | order(orderIdx asc) {
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  techStack,
  highlights,
  linkDemo,
  linkGithub
}`);
