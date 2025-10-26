// =========================
// UI.js - Maneja la interfaz
// =========================

// Renderizado dinámico de secciones comunes

// ----- NAVBAR -----
document.getElementById("navbar").innerHTML = `
<nav class="bg-indigo-700 text-white p-4 flex justify-between items-center">
  <span class="text-2xl font-bold"> PlagDetect</span>
  <div class="flex items-center space-x-6">
    <select class="text-black rounded p-1">
      <option>🌎 Español</option>
      <option>🇺🇸 English</option>
      <option>🇫🇷 Français</option>
    </select>
    <button class="bg-green-500 px-4 py-2 rounded-lg">Suscripción</button>
    <button onclick="openLogin()" class="bg-indigo-500 px-4 py-2 rounded-lg">Login</button>
    <button onclick="toggleMenu()" class="text-3xl">☰</button>
  </div>
</nav>
`;

// ----- HERO -----
document.getElementById("hero").innerHTML = `
<section class="bg-white text-center py-16 shadow-md">
  <h1 class="text-5xl font-extrabold text-indigo-700 mb-4">PlagDetect</h1>
  <p class="text-lg text-gray-600 mb-6">
    Suite con IA para detectar plagio, analizar código, resumir textos y transcribir contenido.
  </p>
  <a href="#main-content" class="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-indigo-500">
     Comenzar Ahora
  </a>
</section>
`;
// ----- MAIN CARDS -----
document.getElementById("main-content").innerHTML = `
<main class="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

  <div id="gestion" class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
    <h2 class="text-xl font-bold mb-4 text-indigo-700"> Gestión de Archivos</h2>
    <p class="text-gray-600">Sube y gestiona tus documentos.</p>
    <button onclick="checkLogin()" class="bg-indigo-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-indigo-500">Usar</button>
  </div>

  <div id="plagio-texto" class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
    <h2 class="text-xl font-bold mb-4 text-indigo-700"> Plagio en Texto</h2>
    <p class="text-gray-600">Analiza textos hasta 2500 caracteres.</p>
    <button onclick="checkLimit()" class="bg-indigo-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-indigo-500">Detectar</button>
  </div>

  <div id="plagio-codigo" class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
    <h2 class="text-xl font-bold mb-4 text-indigo-700"> Plagio en Código</h2>
    <p class="text-gray-600">Analiza similitud en programas.</p>
    <button onclick="checkLogin()" class="bg-indigo-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-indigo-500">Analizar</button>
  </div>

  <div id="resumidor" class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
    <h2 class="text-xl font-bold mb-4 text-indigo-700"> Resumidor</h2>
    <p class="text-gray-600">Genera resúmenes automáticos.</p>
    <button onclick="checkLimit()" class="bg-indigo-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-indigo-500">Resumir</button>
  </div>

  <div id="transcriptor" class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
    <h2 class="text-xl font-bold mb-4 text-indigo-700"> Transcriptor</h2>
    <p class="text-gray-600">Convierte audio a texto.</p>
    <button onclick="checkLogin()" class="bg-indigo-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-indigo-500">Transcribir</button>
  </div>

  <div id="reportes" class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
    <h2 class="text-xl font-bold mb-4 text-indigo-700"> Reportes</h2>
    <p class="text-gray-600">Consulta reportes generados y descárgalos en PDF.</p>
    <button onclick="checkLogin()" class="bg-indigo-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-indigo-500">Ver Reportes</button>
  </div>

  <div id="dashboard" class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
    <h2 class="text-xl font-bold mb-4 text-indigo-700"> Dashboard</h2>
    <p class="text-gray-600">Visualiza estadísticas y métricas.</p>
    <button onclick="checkLogin()" class="bg-indigo-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-indigo-500">Ver Dashboard</button>
  </div>

</main>
`;

// ----- SIDEBAR -----
document.getElementById("sidebar").innerHTML = `
<div class="sidebar fixed top-0 left-0 w-64 h-full bg-indigo-800 text-white p-6">
  <h2 class="text-xl font-bold mb-6">Menú</h2>
  <ul class="space-y-4">
    <li><a href="#gestion"> Gestión</a></li>
    <li><a href="#plagio-texto"> Plagio Texto</a></li>
    <li><a href="#plagio-codigo"> Plagio Código</a></li>
    <li><a href="#resumidor"> Resumidor</a></li>
    <li><a href="#transcriptor"> Transcriptor</a></li>
    <li><a href="#reportes"> Reportes</a></li>
    <li><a href="#dashboard"> Dashboard</a></li>
    <li><button onclick="logout()" class="bg-red-500 px-3 py-2 rounded w-full">🚪 Cerrar Sesión</button></li>
  </ul>
</div>
`;

function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}

// ----- FOOTER -----
document.getElementById("footer").innerHTML = `
<footer class="bg-indigo-800 text-white mt-12">
  <div class="max-w-6xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
    <div>
      <h3 class="font-bold mb-2">Compañía</h3>
      <ul>
        <li><a href="#">Sobre nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold mb-2">Servicios</h3>
      <ul>
        <li>Plagio Texto</li>
        <li>Plagio Código</li>
        <li>Resumidor</li>
        <li>Transcriptor</li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold mb-2">Legal</h3>
      <ul>
        <li><a href="#">Privacidad</a></li>
        <li><a href="#">Términos</a></li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold mb-2">Recursos</h3>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Ayuda</a></li>
      </ul>
    </div>
  </div>
  <div class="text-center border-t border-indigo-600 py-4">
    <p>© ${new Date().getFullYear()} Grupo 5 - Proyecto Final ITLA | PlagDetect</p>
  </div>
</footer>
`;
