import { allPosts } from '.contentlayer/generated'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { useMDXComponent } from 'next-contentlayer2/hooks' // ★ここ！

export function generateStaticParams() {
  return allPosts.map(p => ({ slug: p._raw.flattenedPath.split('/') }))
}

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = use(params)
  const slugStr = slug.join('/')
  const post = allPosts.find(p => p._raw.flattenedPath === slugStr)
  if (!post) return notFound()

  // ① 文字列 -> React コンポーネントに変換
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="prose prose-neutral mx-auto px-4 py-12 lg:prose-lg">
      <h1 className="mb-2">{post.title}</h1>
  
      {/* 日付を “2025-08-01” → “2025年8月1日” っぽく整形 */}
      <time dateTime={post.date} className="block text-sm text-gray-500">
        {new Intl.DateTimeFormat('ja-JP', {
          dateStyle: 'long',
        }).format(new Date(post.date))}
      </time>
  
      {/* MDX 本文 */}
      <MDXContent
        components={{
          // 例：h2 にアンカーリンクを自動付与
          h2: (props) => (
            <h2 {...props} className="group scroll-mt-24">
              <a
                href={`#${props.id}`}
                className="opacity-0 group-hover:opacity-100 ml-2 text-gray-400"
              >
                #
              </a>
            </h2>
          ),
        }}
      />
    </article>
  )
}