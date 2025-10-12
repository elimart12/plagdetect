// -------------------------------------------------
// 🧠 AuthController.js
// Maneja registro, login y validación de usuarios
// -------------------------------------------------
import nodemailer from "nodemailer";

const users = []; // Base temporal (reemplazar por DB en el futuro)

// Registro
export const register = async (req, res) => {
  const { email, password, username } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos obligatorios" });
  }

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: "El usuario ya existe" });

  users.push({ email, password, username });
  await sendConfirmationEmail(email);

  res.status(201).json({ message: "Registro exitoso. Revisa tu correo." });
};

// Login
export const login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Credenciales inválidas" });
  res.json({ message: "Login exitoso", user });
};

// Email simulado
async function sendConfirmationEmail(to) {
  console.log(`📧 Simulando envío de correo a ${to}`);
  // Aquí puedes integrar Nodemailer real con SMTP o Gmail API
}
