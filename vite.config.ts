import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process'

const getCommitDate = () => {
  try {
    return execSync('git log -1 --format=%cI').toString().trim()
  } catch {
    return new Date().toISOString()
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'live-git-date',
      configureServer(server) {
        server.middlewares.use('/api/last-commit-date', (_, res) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ date: getCommitDate() }))
        })
      },
    },
  ],
  define: {
    __LAST_COMMIT_DATE__: JSON.stringify(getCommitDate()),
  },
  server: {
    host: true, // Listen on all network addresses (0.0.0.0) for local Wi-Fi network access
    port: 5173,
  },
  base: '/',
})
