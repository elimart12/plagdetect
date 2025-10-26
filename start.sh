#!/bin/bash
# ==========================================
# start.sh - Levanta backend y frontend de PlagDetect
# Compatible con VS Code + Linux (Chromebook)
# ==========================================

# ---------- 1️Iniciar Backend ----------
echo "Iniciando backend en http://localhost:4000..."
cd ~/plagdetec/backend || { echo "No se encontró carpeta backend"; exit 1; }

# Asegurar dependencias instaladas
npm install --silent

# Iniciar el servidor en segundo plano
npm run dev &
BACK_PID=$!

# ---------- 2️ Esperar a que el backend arranque ----------
sleep 4

# ---------- 3️ Iniciar Frontend ----------
echo " Iniciando frontend en http://localhost:3000..."
cd ~/plagdetec/frontend || { echo " No se encontró carpeta frontend"; exit 1; }

# Servidor simple de Python (para ver index.html)
python3 -m http.server 3000 &
FRONT_PID=$!

# ---------- 4️Abrir navegador ----------
sleep 2
xdg-open "http://localhost:3000"

# ---------- 5️ Mantener procesos ----------
echo " Backend (PID: $BACK_PID) y Frontend (PID: $FRONT_PID) están corriendo..."
wait $BACK_PID $FRONT_PID
