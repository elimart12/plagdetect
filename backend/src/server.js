// -----------------------------------------
// 🌐 PlagDetect Backend Server
// Autor: Elizabeth Marte | Grupo 5 ITLA
// Descripción: Punto de entrada del servidor Express
// -----------------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

import authRoutes from "./src/routes/authRoutes.js";
import textRoutes from "./src/routes/textRoutes.js";
import codeRoutes from "./src/routes/codeRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/api/auth", authRoutes);
app.use("/api/text", textRoutes);
app.use("/api/code", codeRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
