// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test : {
   
//   }
// })
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    // setupFiles: './src/test/setup.js',
    environment: 'happy-dom'
  },
})