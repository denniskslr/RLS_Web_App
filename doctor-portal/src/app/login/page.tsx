"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    // ---------------------------------
    // DUMMY LOGIN – KEIN BACKEND
    // Funktioniert IMMER mit:
    // Benutzername: arzt1
    // Passwort: test
    // ---------------------------------
    if (username === "arzt1" && password === "test") {
      localStorage.setItem("access_token", "dummy-token-arzt1");
      router.push("/patients");
    } else {
      setError("Benutzername oder Passwort falsch");
    }

    setLoading(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white p-6 rounded shadow space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">
          SomniLink
        </h1>

        <div>
          <label className="block text-sm mb-1">
            Benutzername
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">
            Passwort
          </label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? "Anmelden..." : "Anmelden"}
        </button>
      </form>
    </div>
  );
}
