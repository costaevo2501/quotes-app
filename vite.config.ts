import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/quotes-app/',
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'  // Allows access from other devices on the network
  }
});
