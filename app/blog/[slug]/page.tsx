import { getPost, getAllPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { remark } from "remark"
import html from "remark-html"

export async function generateStaticParams() {
    return getAllPosts().map(post => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPost(params.slug)
    if (!post) notFound()

    const processed = await remark().use(html).process(post.content)
    const contentHtml = processed.toString()

    return (
        <main className="h-screen max-h-screen flex flex-col items-start justify-start w-full gap-4 pt-16">
            <div className="flex flex-col gap-1 pl-4">
                <h2 className="text-2xl sm:text-4xl">{post.meta.title}</h2>
                <p className="text-sm text-gray-400">{post.meta.date}</p>
            </div>
            <div
                className="prose prose-invert prose-teal max-w-none overflow-y-scroll p-4 pr-8 pb-16 w-full"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </main>
    )
}
