import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue'], // <-- ref, reactive, computed, watch, etc.
            dts: true,        // generates auto-imports.d.ts (recommended)
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': `${__dirname}/src`,
        },
    },
})
