import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT : Remplacez 'NOM_DE_VOTRE_DEPOT' par le nom de votre projet sur GitHub
  base: '/portfolio-lancelot-cavalec/', 
})
