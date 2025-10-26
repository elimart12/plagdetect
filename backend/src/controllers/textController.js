// -------------------------------------------------
//  textController.js
// Controla análisis de texto con IA simulada
// -------------------------------------------------
import { limitCheck } from "../utils/limiter.js";

export const analyzeText = async (req, res) => {
  const { text, email } = req.body;

  if (!text) return res.status(400).json({ message: "Texto requerido" });
  if (!limitCheck(text, email)) {
    return res.status(403).json({
      message: "Límite de 2500 caracteres alcanzado. Requiere suscripción.",
    });
  }

  //  Aquí irá la llamada real a la IA en el Avance 3
  const aiResponse = await analyzeTextWithAI(text);

  res.json({ success: true, analysis: aiResponse });
};

// Simulación de IA
async function analyzeTextWithAI(text) {
  //  En Avance 3 se reemplazará con API real de OpenAI o Python Flask
  const resumen = text.split(" ").slice(0, 20).join(" ") + "...";
  return { summary: resumen, plagiarism: "12%" };
}
