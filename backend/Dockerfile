# -------------------------------
# 🐳 DOCKERFILE - Backend PlagDetect
# Autor: Elizabeth Marte | Grupo 5
# Descripción:
#   Este archivo construye una imagen Docker
#   que ejecuta el servidor Node.js (API REST)
# -------------------------------

# 1️⃣ Imagen base oficial de Node.js (versión estable)
FROM node:18-alpine

# 2️⃣ Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3️⃣ Copiar archivos de dependencias (para instalación optimizada)
COPY package*.json ./

# 4️⃣ Instalar dependencias de backend
RUN npm install

# 5️⃣ Copiar el resto del código fuente al contenedor
COPY . .

# 6️⃣ Exponer el puerto en el que corre tu backend
EXPOSE 4000

# 7️⃣ Comando para iniciar el servidor
CMD ["npm", "run", "dev"]
