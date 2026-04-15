# Vue 3 + TypeScript + Vite

## Start the app
You can run this app in two ways:
1. 
Run app without Docker: npm run dev
Dev with Docker Compose: docker compose up --build (on http://localhost:5173/)

2. 
Run app with Docker, production build (Nginx):
docker build -t vue-ts-2026 .
docker run -p 8080:80 vue-ts-2026
App will be at http://localhost:8080.

## Projects

### Counter

Simple counter for practising basic Vue features.

### Users CRUD with fake backend

This app is used for practising TypeScript. The goal is to create a basic CRUD system, that displays users from baseURL: 'https://jsonplaceholder.typicode.com/'.
https://jsonplaceholder.typicode.com/. This api will return automatically users, contacts, companies. Nice for playing around.

### Todo list
Lists can be CRUD. Lists are also stored in localStorage, so when the page is refreshed, they stay
'remembered'.