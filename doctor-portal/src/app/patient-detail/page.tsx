"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Client-Komponente: läuft im Browser, weil wir die ID aus der URL lesen
export default function PatientDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Basis-URL des FHIR-Servers (aus .env.local, als PUBLIC-Variable)
  const base = process.env.NEXT_PUBLIC_FHIR_BASE_URL;

  useEffect(() => {
    // Wenn keine ID übergeben wurde, können wir nichts laden
    if (!id) {
      setError("Keine Patienten-ID in der URL übergeben.");
      setLoading(false);
      return;
    }

    async function loadPatient() {
      try {
        // Einzelnen Patienten vom FHIR-Server laden
        const res = await fetch(`${base}/Patient/${id}`);
        if (!res.ok) {
          setError(`Fehler beim Laden der Patientendaten (Status ${res.status})`);
          setLoading(false);
          return;
        }

        const data = await res.json();
        setPatient(data);
      } catch (err) {
        setError("Netzwerkfehler beim Laden der Patientendaten.");
      } finally {
        setLoading(false);
      }
    }

    loadPatient();
  }, [id, base]);

  return (
    <main className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Patientendetails</h2>

      {/* Ladezustand anzeigen */}
      {loading && <p>Patient wird geladen…</p>}

      {/* Fehlermeldung anzeigen */}
      {!loading && error && (
        <p className="text-red-600 font-semibold">Fehler: {error}</p>
      )}

      {/* Patientendaten anzeigen, wenn vorhanden */}
      {!loading && !error && patient && (
        <div className="p-4 rounded-xl border bg-white space-y-2">
          <p>
            <b>ID:</b> {patient.id}
          </p>
          <p>
            <b>Name:</b>{" "}
            {patient.name?.[0]?.given?.[0]} {patient.name?.[0]?.family}
          </p>
          <p>
            <b>Geburtsdatum:</b> {patient.birthDate || "—"}
          </p>
          <p>
            <b>Geschlecht:</b> {patient.gender || "—"}
          </p>
        </div>
      )}
    </main>
  );
}
