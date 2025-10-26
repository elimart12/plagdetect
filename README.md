#  PlagDetect – Detección de Plagio y Herramientas Académicas con IA
**Proyecto Final - Grupo 5 | ITLA**

---

##  Descripción General

**PlagDetect** es una aplicación web educativa impulsada por inteligencia artificial, diseñada para ayudar a estudiantes, docentes e investigadores a **detectar plagio**, **analizar código fuente**, **resumir textos**, y **transcribir contenido de audio a texto**.  
Además, ofrece un **dashboard visual**, un **sistema de suscripción** y una **gestión centralizada de archivos**.

> 🔹 Proyecto modular dividido en Frontend (HTML/CSS/JS) y Backend (Node.js/Express).  
> 🔹 Actualmente en **Avance 2**: primeros módulos funcionales, conexión parcial con backend y UI completa.

---

##  Módulos Actuales (Avance 2)

| Módulo | Estado | Descripción |
|--------|--------|-------------|
|  Gestión de Archivos | UI lista | Permite subir y gestionar archivos (en simulación). |
|  Análisis de Texto |  Funcional | Conexión con backend y simulación de IA. |
|  Análisis de Código Fuente | UI lista | Permitirá detectar similitud entre códigos. |
|  Resumidor de Textos | UI lista | Interfaz para resumen automático (pendiente IA real). |
|  Transcriptor | UI lista | Convertirá audio a texto (pendiente IA real). |
|  Reportes | UI lista | Mostrará resultados generados. |
|  Dashboard | UI lista | Visualización de métricas y estadísticas. |

---

## ⚙️ Tecnologías Utilizadas

### **Frontend**
- HTML5, CSS3 (TailwindCSS)
- JavaScript (modular)
- Diseño UX/UI responsivo
- Sistema de login y suscripción simulado

### **Backend**
- Node.js + Express.js
- Controladores (textController.js)
- Simulación de IA (`analyzeTextWithAI`)
- Utilidades: limitador de caracteres (`limiter.js`)
- Soporte para futuras integraciones de IA con Python/Flask o OpenAI API

### **Infraestructura**
- Docker y Docker Compose (configurado)
- Servidor local automatizado (`start.sh`)
- Soporte para despliegue en **GitHub Pages**

---

## 📁 Estructura del Proyecto

