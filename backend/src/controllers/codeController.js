// -------------------------------------------------
// codeController.js
// Analiza similitud de código fuente
// -------------------------------------------------
export const analyzeCode = (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ message: "Código requerido" });

  // Lógica simulada (luego se integrará IA real)
  const similarity = Math.floor(Math.random() * 20);

  res.json({
    success: true,
    similarity: `${similarity}%`,
    message: "Análisis de similitud completado.",
  });
};
