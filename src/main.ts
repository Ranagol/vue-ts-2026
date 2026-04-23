import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'//Element Plus CSS must be before our CSS
import 'element-plus/theme-chalk/dark/css-vars.css'//Dark theme importing
import './style.css'// our custom CSS must be after Element Plus CSS
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
