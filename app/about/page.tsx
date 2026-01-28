import { LucideGithub, LucideLinkedin, LucideMail, FileText } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">About Me</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Quantitative Developer & Researcher combining math, code, and finance.
                </p>
            </header>

            <section className="mb-12 prose dark:prose-invert max-w-none">
                <p>
                    Hi, I'm Owen Geary. I have a passion for unravelling the complexities of financial markets through
                    rigorous quantitative analysis and robust software engineering.
                </p>
                <p>
                    My journey began with a strong foundation in mathematics and computer science, which naturally led me
                    to the world of quantitative finance. I enjoy building systems that process vast amounts of data to
                    extract meaningful signals and automate trading decisions.
                </p>
                <p>
                    When I'm not coding backtests or reading research papers, you can find me hiking, playing chess,
                    or exploring new coffee shops in the city.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Experience</h2>
                <div className="space-y-8">
                    {/* Experience Item 1 */}
                    <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quantitative Researcher Intern</h3>
                        <p className="text-gray-500 text-sm mb-2">Hedge Fund X • Summer 2024</p>
                        <p className="text-gray-600 dark:text-gray-400">
                            Researched and implemented alpha signals using alternative data sources. Optimized backtesting engine performance by 40%.
                        </p>
                    </div>
                    {/* Experience Item 2 */}
                    <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Computer Science Student</h3>
                        <p className="text-gray-500 text-sm mb-2">University of Technology • 2021 - 2025</p>
                        <p className="text-gray-600 dark:text-gray-400">
                            Focusing on Machine Learning, Stochastic Calculus, and High Performance Computing.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'C++', 'TypeScript', 'SQL', 'Rust'].map(skill => (
                                <span key={skill} className="px-2 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Technologies & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Pandas', 'NumPy', 'PyTorch', 'Next.js', 'Docker', 'AWS'].map(skill => (
                                <span key={skill} className="px-2 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Connect</h2>
                <div className="flex gap-4">
                    <Link href="https://github.com" target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        <LucideGithub size={20} />
                        <span>GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        <LucideLinkedin size={20} />
                        <span>LinkedIn</span>
                    </Link>
                    <Link href="mailto:owen@example.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        <LucideMail size={20} />
                        <span>Email</span>
                    </Link>
                    <Link href="/resume.pdf" target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        <FileText size={20} />
                        <span>Resume</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}
