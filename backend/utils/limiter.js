// -------------------------------------------------
// ⚙️ limiter.js
// Verifica si el usuario sobrepasó el límite gratuito
// -------------------------------------------------
export function limitCheck(text, email) {
  if (text.length > 2500) {
    console.log(`Usuario ${email || "no logueado"} superó el límite`);
    return false;
  }
  return true;
}
