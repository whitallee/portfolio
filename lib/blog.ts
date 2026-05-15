import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDir = path.join(process.cwd(), "content")

export type PostMeta = {
    slug: string
    title: string
    date: string
    description: string
    category: "build" | "software-initiative"
    tags: string[]
}

export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(contentDir)) return []

    const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"))

    return files
        .map(filename => {
            const slug = filename.replace(/\.md$/, "")
            const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8")
            const { data } = matter(raw)
            return {
                slug,
                title: data.title ?? slug,
                date: data.date ?? "",
                description: data.description ?? "",
                category: data.category ?? "build",
                tags: data.tags ?? [],
            } as PostMeta
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): { meta: PostMeta; content: string } | null {
    const filePath = path.join(contentDir, `${slug}.md`)
    if (!fs.existsSync(filePath)) return null

    const raw = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(raw)

    return {
        meta: {
            slug,
            title: data.title ?? slug,
            date: data.date ?? "",
            description: data.description ?? "",
            category: data.category ?? "build",
            tags: data.tags ?? [],
        },
        content,
    }
}
