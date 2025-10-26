// ==============================================
// ⏱ limiter.js - Control de límite de texto gratis
// ==============================================

// Este archivo se encarga de limitar las consultas gratuitas
// a 2500 caracteres antes de requerir una suscripción

export function limitCheck(text, email) {
  const FREE_LIMIT = 2500;

  // Si no hay usuario logueado (visitante)
  if (!email) {
    console.log("Usuario no registrado, aplicando límite de texto.");
    return text.length <= FREE_LIMIT;
  }

  // Si hay usuario registrado, permitir siempre por ahora
  // (en el futuro, aquí se integrará el control de suscripción)
  console.log(` Usuario ${email} autorizado. Longitud del texto: ${text.length}`);
  return true;
}
