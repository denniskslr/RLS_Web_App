# RLS Care – Arztportal (Frontend)

Dies ist die Web-Anwendung für Ärztinnen und Ärzte im RLS-Care-System.  
Über diese Oberfläche können Patientendaten aus einem FHIR-Server abgerufen und angezeigt werden.

Das Frontend basiert auf **Next.js (React)** und kommuniziert mit einem lokalen **HAPI-FHIR-Server**, der über Docker läuft.

---

## 🚀 Projekt starten
 
### 1. FHIR-Server starten (Backend) 
Am besten in einem extra Terminal 

Im Hauptordner `rls-care` im Terminal:

cd ~/rls-care   
docker compose up -d    #Starte alle benötigten Server im Hintergrund

Der FHIR-Server läuft anschließend unter:

http://localhost:8080/fhir

*Beenden mit:*
cd ~/rls-care
docker compose down


---

### 2. Frontend starten (Arztportal)
Am besten in einem extra Terminal 

In den Ordner `doctor-portal` wechseln:

cd ~/rls-care/doctor-portal   
pnpm install    #Installiere alles, was dieses Projekt zum Starten braucht
pnpm dev    #Starte die Web-App zum Entwickeln

Die Web-App ist dann erreichbar unter:

http://localhost:3000

*Beenden mit:* 
CTRL + C

---

### 3. Patienten anlegen

Da der FHIR-Server in dieser Projektkonfiguration ohne persistente Datenbank läuft, gehen alle Patientendaten beim Neustart verloren.
Das folgende Skript legt die Testpatienten erneut an:

*Im FHIR-Server Terminal:*
bash ~/rls-care/init-patients.sh


---

## 📁 Projektstruktur

doctor-portal/  
└── src/  
  └── app/  
    ├── layout.tsx → Grundlayout + Navigation  
    ├── page.tsx → Startseite  
    ├── patients/  
    │  └── page.tsx → Patientenliste (FHIR-Abfrage)  
    ├── patient-detail/  
    │  └── page.tsx → Detailansicht eines einzelnen Patienten  
    ├── encounter/  
    │  └── page.tsx → Sprechstundenansicht (Platzhalter)  
    └── analytics/  
      └── page.tsx → Analysen & Diagramme (Platzhalter)

---

## 🔍 Seitenbeschreibung

### `/` – Startseite  
Kurze Einführung in das Arztportal und Hinweise zur Navigation.

---

### `/patients` – Patientenliste  
- Lädt Patienten vom FHIR-Server (GET /Patient)  
- Zeigt alle vorhandenen Patienten  
- Jeder Eintrag ist anklickbar und führt zur Detailseite

---

### `/patient-detail?id=XYZ` – Patientendetails  
- Liest Patienten-ID aus der URL  
- Lädt Patientendaten (GET /Patient/{id})  
- Zeigt:
  - Name  
  - Geburtsdatum  
  - Geschlecht  
  - FHIR-ID  
- Grundlage für spätere Erweiterungen:
  - Observations  
  - Symptomverlauf  
  - Schlafdaten  
  - Medikation  

---

### `/encounter` – Sprechstundenansicht (Platzhalter)  
Geplant:
- Übersicht des aktuellen Patienten  
- Symptome  
- Schlafqualität  
- Medikationsverlauf  

---

### `/analytics` – Analysen (Platzhalter)  
Geplant:
- Diagramme  
- Trends  
- Schlafmuster  
- Verlauf der RLS-Symptomatik  

---

## ⚙️ Konfiguration

In `.env.local` muss folgendes stehen:

NEXT_PUBLIC_FHIR_BASE_URL=http://localhost:8080/fhir

Damit weiß das Frontend, wo der FHIR-Server läuft.

---

## 🧱 Verwendete Technologien

- **Next.js / React** – modernes Web-Frontend  
- **TailwindCSS** – Styling  
- **shadcn/ui** – UI-Komponenten (Button, Card, Table…)  
- **HAPI-FHIR** – medizinischer FHIR-Server  
- **Docker** – Infrastruktur  
- **TypeScript** – Typensicherheit  

---

## 🎯 Ziel des Projekts

Eine intuitive und sichere Arzt-Web-Anwendung zur:

- Auswertung von RLS-Symptomen  
- Darstellung von Patientenverläufen  
- Unterstützung therapeutischer Entscheidungen  
- Nutzung standardisierter medizinischer Daten (FHIR)

---

## 👥 Teamhinweis

Dieses Projekt ist Teil des RLS-Care-Gesamtsystems bestehend aus:

- Sensorik zur nächtlichen Messung  
- mobiler Patienten-App  
- FHIR-Backend  
- Arztportal (dieses Projekt)
