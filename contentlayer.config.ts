import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// 投稿 (=MDX) の型定義
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,        // src/content 配下を全部対象
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    date : { type: 'date',   required: true },
    draft: { type: 'boolean', default: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (doc) => `/blog/${doc._raw.flattenedPath}` },
  },
}))

export default makeSource({
  contentDirPath: 'src/content',      // ← MDX を置いたフォルダ
  documentTypes: [Post],
  markdown: { 

    remarkPlugins: [remarkMath], 
    rehypePlugins: [rehypeSlug,rehypeKatex, [rehypeAutolinkHeadings, { behavior: 'append' }],] 
  },
})