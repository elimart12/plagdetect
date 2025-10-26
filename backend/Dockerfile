# -------------------------------
#  DOCKERFILE - Backend PlagDetect
# Autor: | Grupo 5
# Descripción:
#   Este archivo construye una imagen Docker
#   que ejecuta el servidor Node.js (API REST)
# -------------------------------

# 1️ Imagen base oficial de Node.js (versión estable)
FROM node:20-alpine

# 2️ Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3️ Copiar archivos de dependencias (para instalación optimizada)
COPY package*.json ./

# 4️ Instalar dependencias de backend
RUN npm install

# 5️ Copiar el resto del código fuente al contenedor
COPY . .

# 6️ Exponer el puerto en el que corre tu backend
EXPOSE 4000

# 7️ Comando para iniciar el servidor
CMD ["npm", "run", "dev"]
