"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollDown() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer pb-8"
            onClick={() => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth"
                })
            }}
        >
            <span className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                Scroll to Explore
            </span>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
            </motion.div>
        </motion.div>
    )
}
