import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/**
 * 6 step: import the router from /router/index.ts
 */
import router from '@/router/index';

createApp(App)
    .use(router)
    .mount('#app')
