import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/Tailwind_Css_Html-Gym-Web-Page/',
    plugins: [
        tailwindcss(),
    ],
})