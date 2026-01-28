import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function ResearchPage() {
    const posts = await getAllPosts('research')

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Research & Blog</h1>
            <div className="space-y-8">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/research/${post.slug}`}
                        className="block p-6 border-b hover:bg-gray-50 transition-colors"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                        <p className="text-gray-700 leading-relaxed">{post.description}</p>
                        {post.tags && (
                            <div className="mt-3 flex gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-sm text-blue-600 font-medium"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    )
}
