import { withContentlayer } from 'next-contentlayer2'
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

/* Next.js の基本設定 */
const nextConfig = {
  // MDX関連の設定は削除（Contentlayerが処理するため）
  images: { unoptimized: true },   // Workers でサイズ削減
  // experimental: { typedRoutes: true },  // 必要に応じて追加
}

/* Contentlayer でラップ（MDX処理はContentlayerに一本化） */
export default withContentlayer(nextConfig)

/* dev 用 Cloudflare フック */
initOpenNextCloudflareForDev()