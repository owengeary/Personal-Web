import { getAllPosts, PostMeta } from "@/lib/posts";
import { Book as BookIcon, Headphones, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function InterestsPage() {
    // Fetch data from MDX
    const books = await getAllPosts('books');
    const podcasts = await getAllPosts('podcasts');

    // Group books by status (using type assertions since valid MDX will have these)
    const reading = books.filter(b => b.status === 'Reading');
    const read = books.filter(b => b.status === 'Read');
    const toRead = books.filter(b => b.status === 'To Read');

    const BookCard = ({ book }: { book: PostMeta }) => (
        <Link href={`/interests/books/${book.slug}`} className="block group">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1 flex sm:flex-row flex-col h-full">
                <div className="sm:w-32 w-full h-48 sm:h-auto relative bg-gray-100 flex-shrink-0 group-hover:opacity-90 transition-opacity">
                    {book.cover ? (
                        <Image
                            src={book.cover}
                            alt={book.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <BookIcon size={32} />
                        </div>
                    )}
                </div>
                <div className="p-6 flex flex-col justify-center flex-1">
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">{book.title}</h4>
                            <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
                        </div>
                        {book.status === 'Reading' && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-semibold rounded-full">
                                Reading
                            </span>
                        )}
                    </div>
                    {book.thoughts && (
                        <p className="text-gray-600 dark:text-gray-300 italic text-sm mt-3 border-l-2 border-blue-500 pl-3 line-clamp-3">
                            "{book.thoughts}"
                        </p>
                    )}
                    <span className="text-sm text-blue-600 mt-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read full review &rarr;
                    </span>
                </div>
            </div>
        </Link>
    );

    const PodcastCard = ({ podcast }: { podcast: PostMeta }) => (
        <Link href={`/interests/podcasts/${podcast.slug}`} className="block group h-full">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1 flex items-start gap-4 h-full">
                <div className="w-20 h-20 relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 group-hover:opacity-90 transition-opacity">
                    {podcast.image ? (
                        <Image
                            src={podcast.image}
                            alt={podcast.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <Headphones size={24} />
                        </div>
                    )}
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-0.5 group-hover:text-purple-600 transition-colors">{podcast.title}</h4>
                        {podcast.favorite && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-bold rounded-full">
                                Fav
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">Hosted by {podcast.host}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{podcast.description}</p>
                </div>
            </div>
        </Link>
    );

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">Interests</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                    A curated collection of text and audio that shapes my thinking.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    <Info size={16} />
                    Click on any card to read my detailed notes
                </div>
            </header>

            {/* Stacked Sections */}

            {/* Reading Section */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8 border-b dark:border-gray-800 pb-4">
                    <BookIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reading List</h2>
                </div>

                <div className="space-y-12">
                    {reading.length > 0 && (
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Currently Reading</h3>
                            <div className="grid gap-6">
                                {reading.map((book) => <BookCard key={book.slug} book={book} />)}
                            </div>
                        </div>
                    )}

                    {toRead.length > 0 && (
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Up Next</h3>
                            <div className="grid gap-6">
                                {toRead.map((book) => <BookCard key={book.slug} book={book} />)}
                            </div>
                        </div>
                    )}

                    {read.length > 0 && (
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Archive</h3>
                            <div className="grid gap-6">
                                {read.map((book) => <BookCard key={book.slug} book={book} />)}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Podcasts Section */}
            <section>
                <div className="flex items-center gap-3 mb-8 border-b dark:border-gray-800 pb-4">
                    <Headphones className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Podcasts</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {podcasts.map((podcast) => <PodcastCard key={podcast.slug} podcast={podcast} />)}
                </div>
            </section>
        </div>
    )
}
