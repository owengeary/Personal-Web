"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

type YearData = {
    title: string
    details: string[]
}

const years: YearData[] = [
    {
        title: "Currently Studying",
        details: [
            "Masters Project: Brownian Motion & Machine Learning Applications in Modern Finance",
            "Computational Finance",
            "Time Series Analysis and Forecasting",
            "Statistical Machine Learning"
        ]
    },
    {
        title: "Year 4",
        details: [
            "Stochastic Calculus",
            "Multivariate Statistics",
            "Bayesian Statistics"
        ]
    },
    {
        title: "Year 3",
        details: [
            "Mathematical Modelling in Finance",
            "Generalised Linear Models",
            "Foundations of Modern Probability",
            "Markov Processes",
            "Martingales with Applications to Finance",
            "Methods of Applied Mathematics",
            "Elasticity and Viscous Fluid Dynamics",
            "Theories of Equity in Education (UCAS Module)"
        ]
    },
    {
        title: "Year 2",
        details: [
            "Probability and Statistics 2",
            "Stochastic Processes",
            "Linear Regression Models",
            "Partial Differential Equations & Vector Calculus",
            "Fluid Mechanics",
            "Numerical Analysis 1",
            "Introduction to Financial Mathematics",
            "Programming with Python",
            "Principles of Mathematical Modelling",
            "Mathematical Communication and Group Projects"
        ]
    },
    {
        title: "Year 1",
        details: [
            "Statistics I",
            "Probability I",
            "ODEs and Applications",
            "Introduction to Vector Calculus",
            "Mathematical Problem Solving",
            "Mathematical Foundation & Analysis",
            "Real Analysis",
            "Linear Algebra"
        ]
    }
]

export function EducationSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Education</h2>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">University of Manchester</h3>
                    <p className="text-gray-500">2022 - Present</p>
                </div>

                <div className="space-y-3">
                    {years.map((year, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-4 py-3 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
                            >
                                <span className="font-medium text-gray-900">{year.title}</span>
                                <ChevronDown
                                    className={clsx(
                                        "w-5 h-5 text-gray-500 transition-transform duration-200",
                                        openIndex === index ? "transform rotate-180" : ""
                                    )}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-4 pb-4 pt-1 border-t border-gray-100">
                                            <ul className="space-y-2 mt-2">
                                                {year.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
