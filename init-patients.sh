#!/bin/bash
echo "▶ Füge Testpatienten hinzu..."

FHIR="http://localhost:8080/fhir"

# Erika
curl -X POST "$FHIR/Patient" \
  -H "Content-Type: application/fhir+json" \
  -d '{
        "resourceType": "Patient",
        "name": [{ "family": "Mueller", "given": ["Erika"] }],
        "gender": "female",
        "birthDate": "1980-05-05"
      }'

# Max
curl -X POST "$FHIR/Patient" \
  -H "Content-Type: application/fhir+json" \
  -d '{
        "resourceType": "Patient",
        "name": [{ "family": "Mustermann", "given": ["Max"] }],
        "gender": "male",
        "birthDate": "1975-02-10"
      }'

# Anna
curl -X POST "$FHIR/Patient" \
  -H "Content-Type: application/fhir+json" \
  -d '{
        "resourceType": "Patient",
        "name": [{ "family": "Schmidt", "given": ["Anna"] }],
        "gender": "female",
        "birthDate": "1990-09-22"
      }'

echo "✔ Testpatienten hinzugefügt!"
