import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';

export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'jsdom',  // Asegura que usas jsdom como entorno de pruebas
        globals: true,         // Habilitar funciones globales como describe, it, etc.
        transformMode: {
            web: [/\.vue$/],      // Asegura que los archivos .vue se transformen correctamente
        },
        alias: {
            '@': join(__dirname, 'src'), // Asegúrate de tener un alias para '@' si lo usas en tus importaciones
        },
    },
});

