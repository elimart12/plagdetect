// ======================================
// app.js - Control principal del frontend
// ======================================

// 🔐 Estado del usuario (usamos localStorage para simular sesión)
let loggedUser = localStorage.getItem("userEmail") || null;

// =======================
// 🧭 MODALES
// =======================
function openModal(id) {
  document.getElementById(id).classList.add("active");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

// =======================
// 🧠 LOGIN / REGISTRO
// =======================
async function handleLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPass").value;
  if (!email || !password) return alert("Completa todos los campos.");

  const result = await loginUser(email, password);
  if (result.message === "Login exitoso") {
    loggedUser = email;
    localStorage.setItem("userEmail", email);
    alert(`Bienvenido ${email}`);
    closeModal("loginModal");
  } else {
    alert(result.message || "Error al iniciar sesión.");
  }
}

async function handleRegister() {
  const username = document.getElementById("regUser").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPass").value;
  if (!email || !password) return alert("Completa todos los campos.");

  const result = await registerUser(username, email, password);
  if (result.message) {
    alert(result.message);
    closeModal("registerModal");
  }
}

function logout() {
  localStorage.removeItem("userEmail");
  loggedUser = null;
  alert("Sesión cerrada.");
}

// =======================
// 📋 FUNCIONES DE MÓDULOS
// =======================

// Analizar texto
async function analyzeTextModule() {
  const text = prompt("Introduce el texto para analizar:");
  if (!text) return;

  if (text.length > 2500) {
    openModal("payModal");
    return;
  }

  const result = await analyzeText(text, loggedUser);
  alert(`Análisis completado: ${JSON.stringify(result.analysis)}`);
}

// Analizar código
async function analyzeCodeModule() {
  const code = prompt("Pega aquí tu código:");
  if (!code) return;
  const result = await analyzeCode(code);
  alert(`Similitud detectada: ${result.similarity}`);
}

// =======================
// 🌎 IDIOMA Y CONFIG
// =======================
function changeLanguage(lang) {
  alert(`Idioma cambiado a: ${lang}`);
}

// =======================
// 💳 SUSCRIPCIÓN
// =======================
function paySubscription() {
  closeModal("payModal");
  alert("Pago simulado realizado: RD$0.99");
}

// =======================
// 🎛️ INTERFAZ / EVENTOS
// =======================

// Abre login modal
function openLogin() {
  openModal("loginModal");
}

// Abre registro modal
function openRegister() {
  closeModal("loginModal");
  openModal("registerModal");
}

// Inicializa el año dinámico en el footer
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
