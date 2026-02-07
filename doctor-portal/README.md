# SomniLink – Arztportal (Web-App)

## Projektbeschreibung

**SomniLink** ist eine einfache, patientenzentrierte Web-Anwendung für Ärzte.  
Ziel der Anwendung ist es, nach einem Login gezielt Patienten über eine Patienten-ID aufzurufen und deren Informationen übersichtlich darzustellen.

Die App wurde bewusst **schlank und übersichtlich** umgesetzt und konzentriert sich auf den Kernworkflow eines Arztes:

**Login → Patient suchen → Patientendetails anzeigen**

---

## Funktionsübersicht

- 🔐 **Login**
  - Anmeldung eines Arztes über Benutzername und Passwort
  - Kommunikation mit einem Django-Backend (JWT-Authentifizierung)

- 🔎 **Patientensuche**
  - Eingabe einer Patienten-ID
  - Weiterleitung zur passenden Patientendetailseite

- 📄 **Patientendetailseite**
  - Anzeige der Patienten-ID
  - Strukturierte Platzhalter für:
    - Stammdaten
    - Medizinische Informationen
    - Verlauf / Dokumentation

- 🚪 **Logout**
  - Abmeldung über einen globalen Logout-Button
  - Rückkehr zur Login-Seite

---

## Anwendungsfluss

1. Arzt öffnet die Anwendung  
2. Login mit Benutzername und Passwort  
3. Weiterleitung zur Patientensuchseite  
4. Eingabe einer Patienten-ID  
5. Anzeige der Patientendetailseite  
6. Optional: Logout  

Der Ablauf orientiert sich an realistischen Arbeitsprozessen im medizinischen Umfeld.

---

## Projektstruktur

```
src/app/
├─ login/                     # Login-Seite
│  └─ page.tsx
│
├─ patients/                  # Patientensuche (Einstiegsseite nach Login)
│  └─ page.tsx
│
├─ patient-detail/
│  └─ [id]/
│     └─ page.tsx             # Patientendetailseite
│
├─ header.tsx                 # Globaler Header mit Logout
├─ layout.tsx                 # Globales Layout
├─ page.tsx                   # Redirect auf /login
└─ globals.css                # Globale Styles
```

Die Struktur folgt dem **Next.js App Router** und ist bewusst minimal gehalten.

---

## Technologiestack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- CSS / Utility-Klassen

### Backend
- Django
- Django REST Framework
- JWT-Authentifizierung

---

## Projekt starten

### Voraussetzungen
- Node.js (empfohlen: Version 18 oder höher)
- pnpm
- Python (Version 3.10 oder höher)
- Backend-Repository (`rls-backend`) lokal vorhanden

---

### Backend starten

1. In den Backend-Ordner wechseln:
```bash
cd rls-backend
```

2. Virtuelle Python-Umgebung aktivieren (falls vorhanden):
```bash
venv\Scripts\activate
```

2. 1 Falls der obere schritt nicht geht zuerst:
```bash
python -m venv venv
```

3. Migrationen ausführen:
```bash
python manage.py migrate
```

4. Backend starten:
```bash
python manage.py runserver
```

Das Backend läuft anschließend unter:
```
http://127.0.0.1:8000
```

Swagger-Dokumentation:
```
http://127.0.0.1:8000/api/docs/
```

---

### Frontend starten

1. In den Frontend-Ordner wechseln:
```bash
cd RLS_Web_App/doctor-portal
```

2. Abhängigkeiten installieren:
```bash
pnpm install
```

3. Entwicklungsserver starten:
```bash
pnpm dev
```

Die Web-App ist anschließend erreichbar unter:
```
http://localhost:3000
```

---

## Designentscheidungen

- Keine klassische Navigation (Menü)
- Fokus auf einen klaren medizinischen Workflow
- Keine unnötigen Features oder Overengineering
- Trennung von Login, Suche und Detailansicht
- Erweiterbar für zukünftige Backend-Anbindungen (zum Beispiel echte Patientendaten)

---

## Hinweis

Die Patientendaten auf der Detailseite dienen aktuell als **Platzhalter**.  
Die Anwendung ist so aufgebaut, dass eine spätere Anbindung realer Patientendaten problemlos möglich ist.

---

## Fazit

SomniLink zeigt exemplarisch, wie eine einfache medizinische Web-App strukturiert und umgesetzt werden kann.  
Der Fokus liegt auf Verständlichkeit, klarer Struktur und einem realistischen Anwendungsfall im ärztlichen Alltag.
