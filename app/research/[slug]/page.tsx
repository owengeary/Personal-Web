import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const posts = await getAllPosts('research')
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function ResearchPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = await getPostBySlug('research', slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <header className="mb-8 pb-8 border-b">
                <h1 className="text-3xl font-bold tracking-tight mb-4">{post.meta.title}</h1>
                <p className="text-xl text-gray-600 mb-4">{post.meta.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                    <time>{post.meta.date}</time>
                    <span className="mx-2">•</span>
                    <span>Research Paper</span>
                </div>
            </header>
            <article className="prose dark:prose-invert max-w-none">
                {post.content}
            </article>
        </div>
    )
}
