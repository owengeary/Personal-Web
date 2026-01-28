"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { HeroContent } from "./HeroContent"
import { ScrollDown } from "./ScrollDown"
import { useRef } from "react"

export function ParallaxHero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

    return (
        <section ref={ref} className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300" />
                {/* Blobs: Lighter in light mode, very subtle in dark mode */}
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-200/40 blur-[100px] dark:bg-blue-900/10 mix-blend-multiply dark:mix-blend-normal animate-blob" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-purple-200/40 blur-[100px] dark:bg-purple-900/10 mix-blend-multiply dark:mix-blend-normal animate-blob animation-delay-2000" />
                <div className="absolute top-[20%] right-[20%] w-[60%] h-[60%] rounded-full bg-cyan-200/40 blur-[100px] dark:bg-cyan-900/10 mix-blend-multiply dark:mix-blend-normal animate-blob animation-delay-4000" />
            </motion.div>

            {/* Content that fades out */}
            <motion.div
                style={{ opacity: textOpacity, scale: textScale }}
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <HeroContent />
            </motion.div>

            <motion.div style={{ opacity: textOpacity }}>
                <ScrollDown />
            </motion.div>
        </section>
    )
}
