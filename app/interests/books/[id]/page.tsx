import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Book as BookIcon, ChevronLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Correct type for Next.js 15+ dynamic route params
interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    const posts = await getAllPosts('books')
    return posts.map((post) => ({
        id: post.slug,
    }))
}

export default async function BookPage({ params }: PageProps) {
    const { id } = await params
    const post = await getPostBySlug('books', id)

    if (!post) {
        notFound()
    }

    const { meta, content } = post

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <Link href="/interests" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Interests
            </Link>

            {/* Overview Card */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
                <div className="flex flex-col md:flex-row">
                    {/* Image Section - Fixed Layout */}
                    <div className="md:w-64 bg-gray-100 relative h-64 md:h-auto flex-shrink-0">
                        {meta.cover ? (
                            <Image
                                src={meta.cover}
                                alt={meta.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <BookIcon size={48} />
                            </div>
                        )}
                    </div>

                    {/* Metadata Section */}
                    <div className="p-8 flex flex-col justify-center flex-1">
                        <div className="flex items-center justify-between mb-4">
                            <span className={
                                `text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${meta.status === 'Reading'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-green-100 text-green-700'
                                }`
                            }>
                                {meta.status}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                            {meta.title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-6 font-medium">
                            by {meta.author}
                        </p>

                        {/* Short thoughts from frontmatter displayed as a highlighted summary */}
                        {meta.thoughts && (
                            <div className="mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                                <p className="text-gray-700 italic">
                                    "{meta.thoughts}"
                                </p>
                            </div>
                        )}

                        {meta.link && (
                            <a
                                href={meta.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors w-fit"
                            >
                                View Book <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Review Content - Separate Section */}
            <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold border-b pb-4 mb-6">Review & Notes</h2>
                {content}
            </div>
        </div>
    )
}
