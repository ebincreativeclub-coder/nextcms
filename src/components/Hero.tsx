"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero({ data }: { data: any }) {
    const containerRef = useRef<HTMLElement>(null);
    const [mounted, setMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!data || !mounted) return null;

    return isDesktop ? <DesktopHero data={data} /> : <MobileHero data={data} />;
}

// ---------------------------------------------------------------------------
// DESKTOP HERO (Retains the Madison-inspired absolute corner layout)
// ---------------------------------------------------------------------------
function DesktopHero({ data }: { data: any }) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax transforms (Desktop offsets)
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const yImg = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const yTextLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yTextRight = useTransform(scrollYProgress, [0, 1], [0, -250]);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center pt-20">
            {/* Background Layer (Z-10): Elegant Serif Text */}
            <motion.div
                style={{ y: yBg, opacity: opacityBg }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-[12%] w-full flex justify-between z-10 pointer-events-none px-24"
            >
                <div className="w-full flex justify-between text-[10rem] font-playfair italic font-light tracking-tight text-gray-900 opacity-90 leading-none">
                    <span>Hey,</span>
                    <span>there</span>
                </div>
            </motion.div>

            {/* Middle Layer (Z-20): Portrait Image */}
            <motion.div
                style={{ y: yImg }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-0 w-[500px] h-[75vh] z-20 pointer-events-none"
            >
                <Image
                    src={data.imageUrl || "/hero_portrait.png"}
                    alt="Developer Portrait"
                    fill
                    className="object-contain object-bottom drop-shadow-2xl mix-blend-darken"
                    priority
                />
            </motion.div>

            {/* Foreground Layer (Z-30): UI Pills & Corners */}
            <div className="relative z-30 w-full h-full container mx-auto px-6 pointer-events-none">

                {/* Left Content Column */}
                <motion.div
                    style={{ y: yTextLeft }}
                    className="absolute left-12 bottom-[20%] flex flex-col items-start gap-12 pointer-events-auto z-40 max-w-[60vw]"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-3"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-xs font-bold text-gray-800 tracking-wide uppercase">Available for new opportunities</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h1 className="flex flex-col font-oswald font-black uppercase tracking-tighter text-black wrap-break-word drop-shadow-sm mix-blend-darken">
                            <span className="text-[4rem] leading-none mb-2">I AM</span>
                            <span className="text-[8rem] leading-[0.85]">{data.name}</span>
                        </h1>
                    </motion.div>
                </motion.div>

                {/* Right Content Column */}
                <motion.div
                    style={{ y: yTextRight }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute right-12 bottom-[30%] flex flex-col items-end text-right pointer-events-auto max-w-[350px] z-40"
                >
                    <p className="text-sm font-medium text-gray-600 mb-6 leading-relaxed">
                        {data.bio || "Specialized in Web Design, UX / UI, Webflow, and Front End Development."}
                    </p>
                    <h2 className="text-[4.5rem] font-oswald font-bold uppercase leading-[1.05] text-black drop-shadow-sm mix-blend-darken text-right">
                        DIGITAL<br />PRODUCT<br />DESIGNER
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}

// ---------------------------------------------------------------------------
// MOBILE HERO (A bespoke, completely stacked vertical layout for incredible scroll feel)
// ---------------------------------------------------------------------------
function MobileHero({ data }: { data: any }) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Extremely Aggressive Mobile Parallax Transforms
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const yPill = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yName = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const yImg = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const yTitle = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <section ref={containerRef} className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-center justify-start pt-32 pb-12 px-4 gap-6">

            {/* Background Vanishing Text */}
            <motion.div
                style={{ y: yBg, opacity: opacityBg }}
                className="absolute top-[20%] w-full flex justify-between z-0 pointer-events-none px-4"
            >
                <div className="w-full flex justify-between text-6xl font-playfair italic font-light tracking-tight text-gray-900 opacity-60 leading-none">
                    <span>Hey,</span>
                    <span>there</span>
                </div>
            </motion.div>

            {/* 1. Status Pill (Top) */}
            <motion.div
                style={{ y: yPill }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-30 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-sm flex items-center gap-2 mt-4"
            >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-bold text-gray-800 tracking-wide uppercase">Available for new opportunities</span>
            </motion.div>

            {/* 2. Massive Name Text (Middle Top) */}
            <motion.div
                style={{ y: yName }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-30 w-full flex flex-col items-center text-center mt-2"
            >
                <h1 className="flex flex-col font-oswald font-black uppercase tracking-tighter text-black mix-blend-darken w-full">
                    <span className="text-3xl leading-none mb-1 text-gray-700">I AM</span>
                    <span className="text-[4.5rem] leading-[0.85]">{data.name}</span>
                </h1>
            </motion.div>

            {/* 3. Central Portrait (Middle) */}
            <motion.div
                style={{ y: yImg }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative z-20 w-[95vw] h-[50vh] mt-4"
            >
                <Image
                    src={data.imageUrl || "/hero_portrait.png"}
                    alt="Developer Portrait"
                    fill
                    className="object-contain object-bottom drop-shadow-2xl mix-blend-darken"
                    priority
                />
            </motion.div>

            {/* 4. Giant Role Title (Bottom) */}
            <motion.div
                style={{ y: yTitle }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative z-40 w-full flex flex-col items-center text-center mt-4"
            >
                <h2 className="text-4xl font-oswald font-bold uppercase leading-[0.95] text-black drop-shadow-md pb-4">
                    DIGITAL<br />PRODUCT<br />DESIGNER
                </h2>
            </motion.div>

        </section>
    );
}
