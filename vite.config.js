import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    fs: {
      allow: [
        '.',
        'C:/Users/GU301-40/.gemini/antigravity-ide/brain/e5fba533-5414-44fc-addf-86afbda7c33b/.user_uploaded',
      ],
    },
  },
})
