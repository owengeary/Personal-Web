import { LucideGithub, LucideLinkedin, LucideMail, FileText } from "lucide-react";
import Link from "next/link";
import { EducationSection } from "@/components/EducationSection";

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">About Me</h1>
                <p className="text-xl text-gray-600">
                    Final Year Mathematics Student & Aspiring Quantitative Analyst
                </p>
            </header>

            <section className="mb-12 prose max-w-none">
                <p>
                    Hi, I'm Owen Geary. I am a highly analytical and motivated final year Mathematics student with a strong aptitude for
                    quantitative analysis and complex problem solving.
                </p>
                <p>
                    I am keen to apply these skills in a fast-paced, challenging role within investment banking,
                    contributing to financial modelling and data-driven decision making.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Experience</h2>
                <div className="space-y-8">
                    {/* Experience Item 1 */}
                    <div className="border-l-2 border-gray-200 pl-4">
                        <h3 className="text-lg font-semibold text-gray-900">Associate Personal Banker</h3>
                        <p className="text-gray-500 text-sm mb-2">NatWest • June 2022 - Present</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 marker:text-gray-400">
                            <li>
                                Managed the end-to-end resolution of complex and sensitive customer queries, managing expectations and navigating internal bank processes to deliver timely and appropriate solutions.
                            </li>
                            <li>
                                Conducted critical risk assessments and enhanced due diligence on high-value transactions (including CHAPs), applying customer protection policies and analytical discretion.
                            </li>
                            <li>
                                Acted as a key liaison between retail clients and specialist internal divisions, analysing customer profiles and initiating dialogue to prepare smooth and successful referrals.
                            </li>
                            <li>
                                Performed rigorous KYC and AML procedures for new and existing customers, ensuring strict adherence to FCA regulation and internal compliance protocols.
                            </li>
                            <li>
                                Provided critical on-call support across NatWest branches, exceeding expectations while rapidly integrating with new teams.
                            </li>
                            <li>
                                Sought out and completed advanced training modules, developing skills and pursuing interest in areas of quantitative finance and ML.
                            </li>
                            <li>
                                Ensured 100% accuracy in daily transaction reporting and customer data entry, meeting procedural standards and mitigating operational risk.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-gray-900">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'R'].map(skill => (
                                <span key={skill} className="px-2 py-1 bg-white border border-gray-200 rounded text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-gray-900">Technologies & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Pandas', 'NumPy', 'PyTorch', 'AI Copilot'].map(skill => (
                                <span key={skill} className="px-2 py-1 bg-white border border-gray-200 rounded text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <EducationSection />

            <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Connect</h2>
                <div className="flex gap-4">
                    <Link href="https://github.com/owengeary" target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <LucideGithub size={20} />
                        <span>GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/owen-geary-19a77626a" target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <LucideLinkedin size={20} />
                        <span>LinkedIn</span>
                    </Link>
                    <Link href="mailto:ob.geary@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <LucideMail size={20} />
                        <span>Email</span>
                    </Link>
                    <Link href="/resume.pdf" target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <FileText size={20} />
                        <span>Resume</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}
