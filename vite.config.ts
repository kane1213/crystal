import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mpa from 'vite-plugin-mpa'

import path from 'path'

// console.log(mpa)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), mpa.default()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  // base: '/crystal/',
  base: './'
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: 'index.html',
  //       about: 'index.html'
  //       // index: 'src/pages/Home/index.tsx',
  //       // about: 'src/pages/About/index.tsx',
  //       // contact: 'src/pages/Contact/index.tsx',
  //     },
  //   },
  // },
})
