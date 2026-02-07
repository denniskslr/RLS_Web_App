import "./globals.css";
import Header from "./header";

export const metadata = {
  title: "SomniLink",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="min-h-screen flex flex-col">
          
          {/* HEADER */}
          <header className="w-full px-6 py-4">
            <div className="mx-auto max-w-6xl">
              <Header />
            </div>
          </header>

          {/* CONTENT – exakt mittig */}
          <main className="flex-1 flex items-center justify-center px-6">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
