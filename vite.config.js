import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path");
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import '@/assets/styles/variables.scss';`
            },
            sass: {
                additionalData: `@import '@/assets/styles/variables.scss';`
            }
        }
    },
    server: {
        host: true,
        port: 3000,
        open: true,
    }
})

