import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'
import { ParallaxHero } from "@/components/ParallaxHero";

export default async function Home() {
  const projects = await getAllPosts('projects')
  const research = await getAllPosts('research')

  const recentProjects = projects.slice(0, 2)
  const recentResearch = research.slice(0, 2)

  return (
    <div className="space-y-0"> {/* Removed vertical spacing to let sections touch */}
      <ParallaxHero />

      <div className="relative z-20 bg-white dark:bg-zinc-950 transition-colors duration-300 pt-24 pb-24 rounded-t-3xl shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.5)] border-t border-gray-100 dark:border-zinc-900">
        {/* Featured Projects */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Featured Projects</h2>
            <Link href="/projects" className="group flex items-center text-blue-600 hover:text-blue-500">
              View all <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {recentProjects.map((post) => (
              <Link
                key={post.slug}
                href={`/projects/${post.slug}`}
                className="block p-6 border border-gray-200 dark:border-slate-700/50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 bg-card text-card-foreground"
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-3">{post.date}</p>
                <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">{post.description}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Research */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Latest Research</h2>
            <Link href="/research" className="group flex items-center text-blue-600 hover:text-blue-500">
              View all <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="space-y-6">
            {recentResearch.map((post) => (
              <Link
                key={post.slug}
                href={`/research/${post.slug}`}
                className="block p-6 hover:bg-gray-50 dark:hover:bg-slate-800/80 rounded-xl transition-colors border-l-4 border-transparent hover:border-blue-500 bg-card border border-gray-100 dark:border-slate-800"
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-slate-400 mb-2">
                  <time>{post.date}</time>
                  {post.tags && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{post.tags.join(', ')}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 dark:text-slate-300">{post.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
