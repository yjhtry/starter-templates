import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_USE_DEV_MOCK, VITE_BASE_URL } = loadEnv(mode, process.cwd())
  const plugins = [react(), TanStackRouterVite()]

  if (VITE_USE_DEV_MOCK === 'true')
    plugins.push(mockDevServerPlugin())

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins,
    server: {
      proxy: {
        '^/mock_api': '',
      },
    },
    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom',
    },
  }
})
