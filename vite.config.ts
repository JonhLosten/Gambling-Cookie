import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        allowedHosts: [
            'f1cad847a962.ngrok-free.app'
        ]
    }
})
