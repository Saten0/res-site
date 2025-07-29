// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var stripBlogPrefix = (path) => path.replace(/\.mdx$/, "").replace(/^blog\//, "");
var posts = defineCollection({
  name: "posts",
  directory: "src/content",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    draft: z.boolean().optional().default(false)
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeSlug,
        rehypeKatex,
        [rehypeAutolinkHeadings, { behavior: "append" }]
      ]
    });
    const slug = stripBlogPrefix(document._meta.path);
    return {
      ...document,
      mdx,
      slug,
      url: `${document._meta.path.replace(/\.mdx$/, "")}`
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
