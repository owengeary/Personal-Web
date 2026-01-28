import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const posts = await getAllPosts('projects')
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params
    const post = await getPostBySlug('projects', slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <header className="mb-8 border-b pb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4">{post.meta.title}</h1>
                <div className="flex items-center text-gray-500">
                    <time>{post.meta.date}</time>
                    {post.meta.tags && (
                        <div className="ml-4 flex gap-2">
                            {post.meta.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </header>
            <article className="prose dark:prose-invert max-w-none">
                {post.content}
            </article>
        </div>
    )
}
