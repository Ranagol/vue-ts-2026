<template>
    <div class="app-container">
        <nav class="navbar">
            <div class="navbar-brand">MyApp</div>
            <div class="nav-links">
                <RouterLink to="/" class="nav-link">Home</RouterLink>
                <RouterLink to="/counter" class="nav-link">Counter</RouterLink>
            </div>
        </nav>

        <main class="content">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

let data = reactive({
    count: 0
});
</script>

<style scoped>
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #f5f5f8 0%, #764ba2 100%);
}

.navbar {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    letter-spacing: 1px;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link.router-link-active {
    background: rgba(255, 255, 255, 0.3);
}

.nav-link.router-link-active::after {
    width: 100%;
}

.content {
    flex: 1;
    padding: 2rem;
}
</style>