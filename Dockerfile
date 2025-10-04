# ====== Build ======
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# Gera build de produção (Vite)
RUN npm run build

# ====== Runtime (Nginx) ======
FROM nginx:alpine
# Nginx com gzip e fallback para SPA (Vite/React)
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
# Copia o build
COPY --from=build /app/dist /usr/share/nginx/html
# Ajuste de permissões (não-privileged)
RUN adduser -D -H -u 10001 www && \
    chown -R www:www /usr/share/nginx/html && \
    sed -i 's/user  nginx;/user  www;/' /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
