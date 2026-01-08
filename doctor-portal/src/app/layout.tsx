import "./globals.css";

export const metadata = { title: "RLS Care – Arztportal" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto p-4">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-xl font-semibold">RLS Care – Arztportal</h1>
            <nav className="space-x-4">
              <a href="/patients" className="underline">Patienten</a>
              <a href="/encounter" className="underline">Sprechstunde</a>
              <a href="/analytics" className="underline">Analysen</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
