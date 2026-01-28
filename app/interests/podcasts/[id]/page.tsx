import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Headphones, ChevronLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Correct type for Next.js 15+ dynamic route params
interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    const posts = await getAllPosts('podcasts')
    return posts.map((post) => ({
        id: post.slug,
    }))
}

export default async function PodcastPage({ params }: PageProps) {
    const { id } = await params
    const post = await getPostBySlug('podcasts', id)

    if (!post) {
        notFound()
    }

    const { meta, content } = post

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <Link href="/interests" className="inline-flex items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Interests
            </Link>

            {/* Overview Card */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm mb-12">
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                    <div className="w-40 h-40 relative bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                        {meta.image ? (
                            <Image
                                src={meta.image}
                                alt={meta.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <Headphones size={48} />
                            </div>
                        )}
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            {meta.favorite && (
                                <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-bold rounded-full">
                                    Favorite
                                </span>
                            )}
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Podcast</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight">{meta.title}</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">Hosted by <span className="font-semibold">{meta.host}</span></p>

                        {meta.description && (
                            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                                {meta.description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Review Content - Separate Section */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold border-b dark:border-gray-800 pb-4 mb-6">Why I Listen</h2>
                {content}
            </div>
        </div>
    )
}
