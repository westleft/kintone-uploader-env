import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    nodePolyfills(),
    dts({
      rollupTypes: true,
      entryRoot: 'src',
    }),
  ],
  build: {
    target: 'node16',
    rollupOptions: {
      external: [
        'child_process',
        'fs',
        'path',
      ],
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'iife',
      formats: ['es'],
      fileName: () => 'index.js',

    },
  },
})
