import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const contentDir = path.join(process.cwd(), 'content')

export type PostType = 'projects' | 'research' | 'books' | 'podcasts' | 'blog'

export interface PostMeta {
    title: string
    date?: string // Optional for interests
    description?: string // Used for projects/podcasts
    tags?: string[]
    slug: string

    // Book specific
    author?: string
    status?: 'Reading' | 'Read' | 'To Read'
    cover?: string
    link?: string
    thoughts?: string // Short summary for list view

    // Podcast specific
    host?: string
    image?: string
    favorite?: boolean
    pinned?: boolean
}

export interface Post {
    meta: PostMeta
    content: React.ReactNode
}

export async function getPostBySlug(type: PostType, slug: string): Promise<Post | undefined> {
    const filePath = path.join(contentDir, type, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
        return undefined
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')

    const { frontmatter, content } = await compileMDX<{
        title: string
        date: string
        description?: string
        tags?: string[]
        pinned?: boolean
    }>({
        source: fileContent,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
            },
        }
    })

    return {
        meta: {
            ...frontmatter,
            slug,
        },
        content,
    }
}

export async function getAllPosts(type: PostType): Promise<PostMeta[]> {
    const dirPath = path.join(contentDir, type)

    if (!fs.existsSync(dirPath)) {
        return []
    }

    const files = fs.readdirSync(dirPath)

    // Use Promise.all since compileMDX is async
    const posts = await Promise.all(
        files
            .filter((file) => file.endsWith('.mdx'))
            .map(async (file) => {
                const slug = file.replace(/\.mdx$/, '')
                const post = await getPostBySlug(type, slug)
                return post?.meta
            })
    )

    // Filter out undefined and sort by pinned then date
    return posts
        .filter((post): post is PostMeta => post !== undefined)
        .sort((a, b) => {
            // Sort pinned posts first
            if (a.pinned && !b.pinned) return -1
            if (!a.pinned && b.pinned) return 1

            if (a.date && b.date) {
                return a.date > b.date ? -1 : 1
            }
            return 0
        })
}
