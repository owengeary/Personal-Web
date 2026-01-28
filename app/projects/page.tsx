import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function ProjectsPage() {
    const posts = await getAllPosts('projects')

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Projects</h1>
            <div className="grid gap-8 sm:grid-cols-2">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/projects/${post.slug}`}
                        className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                        <p className="text-gray-700">{post.description}</p>
                        {post.tags && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-gray-100 text-xs font-medium rounded-full"
                                    >
                                        {tag}
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
