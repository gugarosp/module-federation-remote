import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { withZephyr } from 'vite-plugin-zephyr';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        withZephyr(),
        federation({
            name: 'remote_app',
            filename: 'remoteEntry.js',
            exposes: {
                './Header': './src/components/Header',
                './Button': './src/components/Button'
            },
            shared: ['react', 'react-dom']
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodesplit: false
    }
})
