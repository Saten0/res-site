import './globals.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex gap-4">
            <a href="/"      className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/presentaiton" className="hover:underline">Presentation</a>
          </nav>
        </header>
        <main className="flex-1 container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
