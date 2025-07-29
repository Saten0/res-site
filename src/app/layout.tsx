import './globals.css';
import Link from 'next/link';
import "katex/dist/katex.min.css"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-5">
          <nav className="container mx-auto flex gap-8">
            <Link href="/"      className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/presentaiton" className="hover:underline">Presentations</Link>
            <Link href="/blog" className="hover:underline">Tech Blog</Link>
            <Link href="/diary" className="hover:underline">Diary</Link>
          </nav>
        </header>
        <main className="flex-1 container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
