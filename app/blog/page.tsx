import { getAllPosts } from "@/lib/blog"
import Link from "next/link"

const categoryLabel: Record<string, string> = {
    "build": "build devlog",
    "software-initiative": "software initiative",
}

export default function Blog() {
    const posts = getAllPosts()

    return (
        <main className="h-screen max-h-screen flex flex-col items-start justify-start w-full gap-4 pt-16">
            <h2 className="text-2xl sm:text-4xl pl-4">blog</h2>
            <div className="flex flex-col gap-4 overflow-y-scroll p-4 pr-8 pb-16 w-full">
                {posts.length === 0 && (
                    <p className="text-gray-400">No posts yet — check back soon.</p>
                )}
                {posts.map(post => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="w-full bg-gray-800 rounded-xl p-5 flex flex-col gap-2 hover:scale-[1.01] transition-all duration-300"
                    >
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <span className="text-xs py-1 px-2 border-teal-700 border-2 rounded-full text-teal-400">
                                {categoryLabel[post.category] ?? post.category}
                            </span>
                        </div>
                        <p className="text-xs text-gray-400">{post.date}</p>
                        <p className="text-sm text-gray-300">{post.description}</p>
                        {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs py-0.5 px-2 bg-gray-700 rounded-full">{tag}</span>
                                ))}
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </main>
    )
}
