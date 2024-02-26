import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_USE_DEV_MOCK, VITE_BASE_URL } = loadEnv(mode, process.cwd())
  const plugins = [
    react(),
    TanStackRouterVite(),
    AutoImport({
      imports: [
        'react',
        {
          antd: [
            'Table',
            'Form',
            'Input',
            'Space',
            'Button',
            'Dropdown',
            'Menu',
            'Layout',
            'theme',
            'Tag',
            'Tooltip',
            'Modal',
            'Divider',
            'message',
            'Select',
            'Card',
            'Progress',
            'Popover',
            'Typography',
            ['Image', 'AntImage'],
            ['Upload', 'AntUpload'],
            ['List', 'AntList'],
            ['Switch', 'AntSwitch'],
          ],
        },
        {
          '@ant-design/pro-components': ['ProSkeleton', 'ProTable', 'BetaSchemaForm'],
        },
        { nprogress: [['default', 'NProgress']] },
        { '@tanstack/react-router': ['Link', 'createFileRoute', 'Outlet'] },
        {
          from: '@ant-design/pro-components',
          imports: ['ActionType', 'ProColumns', 'ProFormColumnsType', 'ProFormInstance'],
          type: true,
        },
        {
          // fix dayjs export type error
          from: './src/lib/dayjs',
          imports: ['Dayjs'],
          type: true,
        },
      ],

      dts: true,
      dirs: [
        './src/lib',
        './src/components',
      ],
    }),
  ]

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
