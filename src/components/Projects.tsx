"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects({ data }: { data: any[] }) {
    if (!data || data.length === 0) return null;

    return (
        <section id="projects" className="py-24 container mx-auto px-6">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl md:text-6xl font-oswald font-black tracking-tighter uppercase text-black">
                    RECENT PROJECTS
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {data.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        key={project._id}
                        className="group flex flex-col items-center"
                    >
                        {/* Project Card Image container mimicking the phone cutouts */}
                        <div className="relative w-full aspect-4/3 rounded-4xl overflow-hidden bg-gray-100 shadow-xl group-hover:shadow-2xl transition-shadow duration-500 mb-8">
                            {project.imageUrl ? (
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center font-oswald text-2xl text-gray-400 uppercase tracking-widest">
                                    Coming Soon
                                </div>
                            )}
                        </div>

                        {/* Minimalist Info */}
                        <div className="text-center md:text-left w-full px-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                            <p className="text-sm font-medium text-gray-500 leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                                {project.techStack?.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-1.5 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-center md:justify-start gap-6 text-sm font-bold uppercase tracking-wider text-black">
                                <a href={project.linkGithub} className="hover:text-amber-600 transition-colors border-b border-transparent hover:border-amber-600">
                                    Source
                                </a>
                                <a href={project.linkDemo} className="hover:text-amber-600 transition-colors border-b border-transparent hover:border-amber-600">
                                    Live Demo ↗
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
