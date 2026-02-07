"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // Kein Header auf der Login-Seite
  if (pathname === "/login") return null;

  function handleLogout() {
    localStorage.removeItem("access_token");
    router.push("/login");
  }

  return (
    <div className="flex items-start justify-between border-b pb-3">
      {/* Linke Seite */}
      <div>
        <h1 className="text-xl font-semibold">
          SomniLink – Arztportal
        </h1>

        {pathname !== "/patients" && (
          <button
            onClick={() => router.push("/patients")}
            className="mt-1 text-sm text-gray-600 hover:text-gray-900 underline"
          >
            ← Zurück zur Patientensuche
          </button>
        )}
      </div>

      {/* Rechte Seite */}
      <button
        onClick={handleLogout}
        className="text-sm underline"
      >
        Logout
      </button>
    </div>
  );
}
