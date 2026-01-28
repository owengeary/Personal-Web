"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >


            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-white mb-8">
                Owen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Geary</span>
            </h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
            >
                Master of Mathematics Undergraduate. <br />
                Developing skills and understanding of <span className="text-gray-900 dark:text-gray-100 font-medium">financial markets</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
            >
                <Link
                    href="/projects"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    View Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all hover:-translate-y-1"
                >
                    About Me
                </Link>
            </motion.div>
        </motion.div>
    )
}
