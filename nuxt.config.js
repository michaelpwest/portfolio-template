import { defineNuxtConfig } from 'nuxt/config';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  build: {
    extractCSS: true,
    transpile: ['vuetify'],
  },
  buildDir: '../build',
  compatibilityDate: '2025-01-01',
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  nitro: {
    output: {
      dir: '../.output',
    },
  },
  rootDir: 'src',
  ssr: false,
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
