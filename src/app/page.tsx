import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { client } from "@/sanity/lib/client";
import { EXPERIENCE_QUERY, PROFILE_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function Home() {
  // Fetch dynamic content from Sanity Content Lake
  const profile = await client.fetch(PROFILE_QUERY);
  const experiences = await client.fetch(EXPERIENCE_QUERY);
  const projects = await client.fetch(PROJECTS_QUERY);

  // If no profile data exists, we have nothing to show
  if (!profile) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-16 md:gap-32 w-full">
      <Hero data={profile} />
      <Experience data={experiences} />
      <Projects data={projects} />
    </div>
  );
}
