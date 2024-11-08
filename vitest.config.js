import { defineConfig } from 'vitest/config'
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'jsdom', // Esto es necesario para que el DOM se simule correctamente en las pruebas
        globals: true, // Habilita las funciones globales de pruebas como `describe`, `it`, etc.
    },
})

