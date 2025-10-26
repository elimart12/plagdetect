// =====================================
//  emailService.js
// Servicio para envío de correos (simulado)
// =====================================
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Configuración del transporte
export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Función de envío de correo
export async function sendConfirmationEmail(to) {
  try {
    const info = await transporter.sendMail({
      from: `"PlagDetect" <${process.env.MAIL_USER}>`,
      to,
      subject: "Confirmación de registro - PlagDetect",
      text: "Gracias por registrarte en PlagDetect. Tu cuenta ha sido creada exitosamente.",
      html: "<h3>Gracias por registrarte en <b>PlagDetect</b>.</h3><p>Tu cuenta ha sido creada exitosamente.</p>",
    });

    console.log(`Correo enviado a: ${to}`);
    console.log(`ID de mensaje: ${info.messageId}`);
  } catch (error) {
    console.error(" Error al enviar correo:", error.message);
  }
}
