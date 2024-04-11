import { ServerOptions, defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';

const serverOptions: ServerOptions = {
  port: 3005,
  host: true,
};

export default defineConfig({
  server: serverOptions,
  plugins: [react(), eslint(), checker({ typescript: true })],
  resolve: {
    alias: {
      src: '/src/',
      widgets: '/src/widgets/',
      features: '/src/features/',
      shared: '/src/shared/',
      entities: '/src/entities',
    },
  },
});
