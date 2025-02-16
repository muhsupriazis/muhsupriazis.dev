import { promises as fs } from "fs"
import Link from "next/link"
import path from "path"

interface Post {
  title: string
  date: string
  slug: string
  author: string
  summary: string
}
async function getPosts() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(posts)/posts.json")
  )
  const tasks = JSON.parse(data.toString())

  return tasks
}


export async function Posts() {
  const data = await getPosts()

  return (
    <div className='font-[family-name:var(--font-inter)]'>
      {data.map((post : Post) => (
        <Link href={`${post.slug}`} key={post.slug} className="py-3 block border-none">
          <div>
            <span className="font-[family-name:var(--font-geist-mono)] text-sm dark:text-zinc-600">{post.date}</span>
              <h1 className='text-lg font-semibold'>{post.title}</h1>
            <p className='py-2 text-base'>{post.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}