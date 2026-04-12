import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

/**
 * 6 step: import the router from /router/index.ts
 */
import router from '@/router/index';

createApp(App)
    .use(createPinia())
    .use(ElementPlus)
    .use(router)
    .mount('#app')
