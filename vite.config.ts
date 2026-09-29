import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const pixelId = loadEnv(mode, process.cwd(), 'VITE_META_PIXEL_ID').VITE_META_PIXEL_ID?.trim();

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'meta-pixel-noscript',
        transformIndexHtml() {
          if (!pixelId || !/^[1-9]\d*$/.test(pixelId)) return [];

          return [{
            tag: 'noscript',
            // Uma imagem em <noscript> pertence ao body, não ao head.
            injectTo: 'body' as const,
            children: `<img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&amp;ev=PageView&amp;noscript=1">`,
          }];
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
