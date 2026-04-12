# Vue 3 + TypeScript + Vite


You can run this app in two ways:
1. 
Run app without Docker: npm run dev
Dev with Docker Compose: docker compose up --build (on http://localhost:5173/)

2. 
Run app with Docker, production build (Nginx):
docker build -t vue-ts-2026 .
docker run -p 8080:80 vue-ts-2026
App will be at http://localhost:8080.