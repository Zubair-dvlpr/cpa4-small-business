import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cpa4-small-business/',
  plugins: [react()],
})
