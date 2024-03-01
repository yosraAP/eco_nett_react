# Utilise une image officielle de Node.js comme base
FROM node:14

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie le fichier package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

# Construit l'application pour la production
RUN npm run build

# Utilise une image légère pour servir l'application
FROM nginx:alpine

# Copie les fichiers de build vers le répertoire de nginx pour être servis
COPY --from=0 /app/build /usr/share/nginx/html

# Expose le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
