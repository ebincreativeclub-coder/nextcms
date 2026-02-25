"use client";

import { motion } from "framer-motion";

export default function Experience({ data }: { data: any[] }) {
    if (!data || data.length === 0) return null;

    return (
        <section id="experience" className="py-24 container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl md:text-5xl font-oswald font-black tracking-tighter uppercase text-black mb-4">
                    EXPERIENCE & SKILLS
                </h2>
                <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
            </div>

            <div className="flex flex-col space-y-6">
                {data.map((exp, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={exp._id}
                        className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-white/60 hover:bg-white rounded-4xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
                    >
                        {/* Meta Data Column */}
                        <div className="md:w-1/4 mb-4 md:mb-0">
                            <p className="text-xs font-bold text-gray-400 monitoring-widest uppercase">{exp.duration}</p>
                        </div>

                        {/* Title Column */}
                        <div className="md:w-1/3 mb-4 md:mb-0">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{exp.role}</h3>
                            <h4 className="text-sm font-semibold text-gray-500">{exp.company}</h4>
                        </div>

                        {/* Skills / Achievements Column */}
                        <div className="md:w-5/12">
                            <ul className="flex flex-wrap gap-2">
                                {exp.achievements?.slice(0, 3).map((achievement: string, idx: number) => (
                                    <li key={idx} className="flex items-center text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                                        {achievement.substring(0, 30)}{achievement.length > 30 ? "..." : ""}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
