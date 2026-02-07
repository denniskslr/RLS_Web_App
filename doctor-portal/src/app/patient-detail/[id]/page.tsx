"use client";

import { useParams } from "next/navigation";

/**
 * Dummy-Daten – nur für Patient ID = "123"
 */

const patient = {
  id: "123",
  firstName: "Max",
  lastName: "Mustermann",
  gender: "männlich",
  birthDate: "1985-06-12",
};

const rlsTrackingData = [
  { date: "01.03.", value: 2 },
  { date: "02.03.", value: 3 },
  { date: "03.03.", value: 5 },
  { date: "04.03.", value: 4 },
  { date: "05.03.", value: 6 },
];

const questionnaireResults = [
  {
    name: "IRLS",
    score: 24,
    interpretation: "Mittelschweres Restless-Legs-Syndrom",
  },
  {
    name: "Epworth Sleepiness Scale",
    score: 14,
    interpretation: "Erhöhte Tagesschläfrigkeit",
  },
];

export default function PatientDetailPage() {
  const params = useParams();
  const patientId = params.id as string;

  // ❌ Falsche / unbekannte ID
  if (patientId !== "123") {
    return (
      <div className="max-w-md text-center space-y-4">
        <h2 className="text-xl font-semibold">
          Patient nicht gefunden
        </h2>
        <p className="text-gray-600">
          Für die eingegebene Patienten-ID liegen keine Daten vor.
        </p>
        <p className="text-sm text-gray-500">
          (Demo: gültige ID ist <strong>123</strong>)
        </p>
      </div>
    );
  }

  // ✅ Richtige ID → Daten anzeigen
  return (
    <div className="max-w-3xl space-y-8">
      <h2 className="text-xl font-semibold">
        Patientendetails
      </h2>

      {/* STAMMDATEN */}
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold mb-3">Stammdaten</h3>
        <p><strong>Name:</strong> {patient.firstName} {patient.lastName}</p>
        <p><strong>Patienten-ID:</strong> {patient.id}</p>
        <p><strong>Geschlecht:</strong> {patient.gender}</p>
        <p><strong>Geburtsdatum:</strong> {patient.birthDate}</p>
      </div>

      {/* RLS NACHT-TRACKER */}
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold mb-3">
          RLS Nacht-Tracking (Bewegungsintensität)
        </h3>

        <div className="flex items-end gap-3 h-32">
          {rlsTrackingData.map((entry) => (
            <div key={entry.date} className="flex flex-col items-center">
              <div
                className="w-6 bg-black rounded"
                style={{ height: `${entry.value * 15}px` }}
              />
              <span className="text-xs mt-1">{entry.date}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-3">
          Darstellung der nächtlichen Bewegungsaktivität basierend auf
          Sensordaten des RLS-Nacht-Trackers.
        </p>
      </div>

      {/* FRAGEBOGEN-AUSWERTUNG */}
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold mb-3">
          Fragebogen-Auswertungen
        </h3>

        <ul className="space-y-3">
          {questionnaireResults.map((q) => (
            <li key={q.name} className="border rounded p-3">
              <p><strong>{q.name}</strong></p>
              <p><strong>Score:</strong> {q.score}</p>
              <p><strong>Interpretation:</strong> {q.interpretation}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
