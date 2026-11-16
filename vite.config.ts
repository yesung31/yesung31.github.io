import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process'
import { seoPlugin } from './vite-plugin-seo'

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
    seoPlugin(),
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
    host: true,
    port: 5173,
  },
  base: '/',
})
