import { allPosts } from '.contentlayer/generated';
import { notFound } from 'next/navigation';
import { use } from 'react';
import React from 'react';

export function generateStaticParams() {
  return allPosts.map(p => ({ slug: p._raw.flattenedPath.split('/') }));
}

type ParamsPromise = Promise<{ slug: string[] }>;

export default function BlogPost({ params }: { params: ParamsPromise }) {
  // 1️⃣ Promise から値を取り出す
  const { slug } = use(params);     

  const slugStr = slug.join('/');
  const post = allPosts.find(p => p._raw.flattenedPath === slugStr);

  if (!post) {
    notFound();                   
  }


  return (
    <article className="prose prose-neutral mx-auto px-4 py-12 lg:prose-lg">
      <h1 className="mb-2">{post!.title}</h1>

      <time dateTime={post!.date} className="block text-sm text-gray-500">
        {new Intl.DateTimeFormat('ja-JP', { dateStyle: 'long' }).format(
          new Date(post!.date),
        )}
      </time>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
}
