// ======================================
// modules.js - Módulos funcionales (texto, código, resumen, etc.)
// ======================================

// 🧠 Módulo de análisis de texto
async function handleAnalyzeText() {
  const userText = prompt("Pega aquí tu texto:");
  if (!userText) return;

  // Si supera los 2500 caracteres, abre el modal de suscripción
  if (userText.length > 2500) {
    openModal("payModal");
    return;
  }

  // Comunicación con el backend
  try {
    const response = await fetch("http://localhost:4000/api/text/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: userText, email: loggedUser }),
    });
    const data = await response.json();
    console.log(data);
    alert(`Análisis completado: ${JSON.stringify(data.analysis)}`);
  } catch (error) {
    console.error("Error en análisis:", error);
  }
}

// 💻 Módulo de análisis de código
async function handleAnalyzeCode() {
  const code = prompt("Pega tu código:");
  if (!code) return;
  const result = await analyzeCode(code);
  alert(`Similitud detectada: ${result.similarity}`);
}
