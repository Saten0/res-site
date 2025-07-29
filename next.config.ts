import createMDX from '@next/mdx'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { withContentlayer } from 'next-contentlayer2'
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

/* ① MDX → NextConfig ラッパーを生成 */
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }
})

/* ② 素の Next 設定（Cloudflare なら images.unoptimized 推奨） */
const nextConfig = {
  pageExtensions: ['js','jsx','ts','tsx','md','mdx'],
  images: { unoptimized: true },   // Workers でサイズ削減
  // experimental: { typedRoutes: true },  // 追加したいオプション
}

/* ③ export default で 2段ラップ */
export default withContentlayer(
  withMDX(nextConfig)
)

/* ④ dev 用 Cloudflare フック */
initOpenNextCloudflareForDev()