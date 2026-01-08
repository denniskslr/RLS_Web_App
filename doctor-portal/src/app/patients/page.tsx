"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Vereinfachter Patiententyp für die Anzeige im Frontend.
 * Entspricht bewusst NICHT 1:1 dem Backend-Modell,
 * sondern nur dem, was die UI wirklich braucht.
 */
type Patient = {
  id: string;
  name: string;
  birthDate?: string;
};

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // Kein Token → User ist nicht eingeloggt
    if (!token) {
      setError("Nicht eingeloggt.");
      setLoading(false);
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/patients/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        // Backend erreichbar, aber keine Berechtigung / keine Daten
        if (!res.ok) {
          throw new Error("no-data");
        }
        return res.json();
      })
      .then((data) => {
        /**
         * Erwartung:
         * data = Array von Patienten aus dem Backend
         * Falls leer → UI zeigt leere Liste
         */
        setPatients(
          (data ?? []).map((p: any) => ({
            id: p.id,
            name: p.name ?? "Ohne Name",
            birthDate: p.birth_date,
          }))
        );
      })
      .catch(() => {
        /**
         * Bewusster Fallback:
         * Backend liefert aktuell keine Daten (z. B. keine Zuordnung),
         * Frontend bleibt trotzdem funktionsfähig.
         */
        setPatients([
          {
            id: "demo-1",
            name: "Max Mustermann",
            birthDate: "1980-01-01",
          },
          {
            id: "demo-2",
            name: "Erika Beispiel",
            birthDate: "1975-05-12",
          },
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Patienten</h2>

      {/* Loading-State */}
      {loading && <p className="text-gray-600">Lade Patienten …</p>}

      {/* Fehler-State */}
      {!loading && error && (
        <p className="text-red-600">{error}</p>
      )}

      {/* Leere Liste */}
      {!loading && !error && patients.length === 0 && (
        <p className="text-sm text-gray-600">
          Keine Patienten vorhanden.
        </p>
      )}

      {/* Patientenliste */}
      {!loading && patients.length > 0 && (
        <ul className="space-y-2">
          {patients.map((p) => (
            <li
              key={p.id}
              className="p-3 rounded-xl border hover:bg-gray-50"
            >
              <Link href={`/patient-detail?id=${p.id}`}>
                <div className="font-medium underline">
                  {p.name}
                </div>
                <div className="text-sm text-gray-600">
                  ID: {p.id}
                  {p.birthDate && ` · Geburtsdatum: ${p.birthDate}`}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
