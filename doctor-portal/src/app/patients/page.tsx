"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PatientsSearchPage() {
  const [patientId, setPatientId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!patientId.trim()) {
      setError("Bitte eine Patienten-ID eingeben");
      return;
    }

    router.push(`/patient-detail/${patientId}`);
  }

  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2 text-center">
        Patient suchen
      </h2>

      <p className="text-sm text-gray-600 mb-6 text-center">
        Bitte geben Sie die Patienten-ID ein, um die Patientendaten aufzurufen.
      </p>

      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">
            Patienten-ID
          </label>
          <input
            type="text"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="z. B. 12345"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Patient anzeigen
        </button>
      </form>
    </div>
  );
}
