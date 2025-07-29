import { allPosts } from '.contentlayer/generated'
import Link from 'next/link'

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-2xl py-8">
      {allPosts.map(p => (
        <article key={p._id} className="mb-6">
          <Link href={p.url} className="text-xl font-bold">
            {p.title}
          </Link>
          <div className="text-sm text-gray-500">{p.date}</div>
        </article>
      ))}
    </div>
  )
}