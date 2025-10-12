// =========================
// auth.js - Autenticación y suscripción simulada
// =========================

let isLogged = localStorage.getItem("loggedUser") || null;

// Modales dinámicos (login, registro, pago)
document.getElementById("modals").innerHTML = `
<!-- Modal Login -->
<div id="loginModal" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center">
  <div class="bg-white p-8 rounded-xl shadow-lg w-96 relative text-center">
    <button onclick="closeLogin()" class="absolute top-2 right-2 text-xl font-bold">❌</button>
    <h3 class="text-2xl font-bold mb-4">🔑 Iniciar Sesión</h3>
    <input type="email" id="loginEmail" class="border p-2 w-full mb-4" placeholder="Correo">
    <input type="password" id="loginPass" class="border p-2 w-full mb-4" placeholder="Contraseña">
    <button onclick="loginUser()" class="bg-indigo-600 text-white px-6 py-2 rounded-lg w-full mb-3">Ingresar</button>
    <button onclick="openRegister()" class="text-indigo-600 underline">¿No tienes cuenta? Regístrate</button>
    <div class="mt-4 space-x-2">
      <button class="bg-red-500 px-3 py-2 text-white rounded">Google</button>
      <button class="bg-gray-800 px-3 py-2 text-white rounded">GitHub</button>
    </div>
  </div>
</div>

<!-- Modal Registro -->
<div id="registerModal" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center">
  <div class="bg-white p-8 rounded-xl shadow-lg w-96 relative text-center">
    <button onclick="closeRegister()" class="absolute top-2 right-2 text-xl font-bold">❌</button>
    <h3 class="text-2xl font-bold mb-4">📝 Registro</h3>
    <input type="text" id="regUser" class="border p-2 w-full mb-4" placeholder="Usuario">
    <input type="email" id="regEmail" class="border p-2 w-full mb-4" placeholder="Correo">
    <input type="password" id="regPass" class="border p-2 w-full mb-4" placeholder="Contraseña">
    <button onclick="registerUser()" class="bg-green-600 text-white px-6 py-2 rounded-lg w-full">Registrarse</button>
  </div>
</div>

<!-- Modal Suscripción -->
<div id="payModal" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center">
  <div class="bg-white p-8 rounded-xl shadow-lg w-96 text-center relative">
    <button onclick="closePay()" class="absolute top-2 right-2 text-xl font-bold">❌</button>
    <h3 class="text-xl font-bold mb-4">⚠️ Límite alcanzado</h3>
    <p>Gratis hasta 2500 caracteres.</p>
    <p>Suscripción: <b>RD$0.99</b></p>
    <button onclick="closePay()" class="bg-green-600 text-white px-6 py-2 rounded-lg mt-4">Suscribirse</button>
  </div>
</div>
`;

function openLogin() { document.getElementById("loginModal").classList.add("active"); }
function closeLogin() { document.getElementById("loginModal").classList.remove("active"); }
function openRegister() { closeLogin(); document.getElementById("registerModal").classList.add("active"); }
function closeRegister() { document.getElementById("registerModal").classList.remove("active"); }
function closePay() { document.getElementById("payModal").classList.remove("active"); }

// --- Registro ---
function registerUser() {
  const email = document.getElementById("regEmail").value;
  localStorage.setItem("loggedUser", email);
  isLogged = email;
  alert("Registro exitoso. Verifica tu correo (simulado).");
  closeRegister();
}

// --- Login ---
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  if (email) {
    localStorage.setItem("loggedUser", email);
    isLogged = email;
    alert("Login exitoso: " + email);
    closeLogin();
  }
}

// --- Logout ---
function logout() {
  localStorage.removeItem("loggedUser");
  isLogged = null;
  alert("Sesión cerrada");
}
