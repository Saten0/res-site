// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  // src/content 配下を全部対象
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    draft: { type: "boolean", default: false }
  },
  computedFields: {
    url: { type: "string", resolve: (doc) => `/blog/${doc._raw.flattenedPath}` }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  // ← MDX を置いたフォルダ
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeSlug, rehypeKatex, [rehypeAutolinkHeadings, { behavior: "append" }]]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JUOOSTMI.mjs.map
