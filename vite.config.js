import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/mypage2/"  // هذا يجب أن يكون نفس اسم المستودع
})
