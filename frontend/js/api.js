// ======================================
// api.js - Conexión con el backend (Node.js)
// ======================================

// ⚙️ URL base del backend
const API_URL = "http://localhost:4000/api";

// ========== AUTH ==========
async function registerUser(username, email, password) {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error registrando usuario:", err);
    return { message: "Error de conexión" };
  }
}

async function loginUser(email, password) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error en login:", err);
    return { message: "Error de conexión" };
  }
}

// ========== TEXT MODULE ==========
async function analyzeText(text, email) {
  try {
    const res = await fetch(`${API_URL}/text/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, email }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error analizando texto:", err);
    return { message: "Error de conexión" };
  }
}

// ========== CODE MODULE ==========
async function analyzeCode(code) {
  try {
    const res = await fetch(`${API_URL}/code/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error analizando código:", err);
    return { message: "Error de conexión" };
  }
}
