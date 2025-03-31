import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['.nuxt/', '.output/', 'build/', 'dist/', 'node_modules/'],
  },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], languageOptions: { globals: globals.browser } },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'eol-last': ['error', 'always'],
      'linebreak-style': ['error', 'unix'],
      'no-console': 'off',
      'no-trailing-spaces': ['error'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
]);
