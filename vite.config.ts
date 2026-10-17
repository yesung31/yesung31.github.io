import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process'

let lastCommitDate = ''
try {
  lastCommitDate = execSync('git log -1 --format=%cI').toString().trim()
} catch {
  lastCommitDate = new Date().toISOString()
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  define: {
    __LAST_COMMIT_DATE__: JSON.stringify(lastCommitDate)
  },
  base: '/',
})
