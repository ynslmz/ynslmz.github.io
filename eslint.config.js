import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import vueTsConfig from '@vue/eslint-config-typescript';
import globals from 'globals';

export default [
  {
    ignores: ['docs/**', 'node_modules/**', 'dist/**'],
  },
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  ...vueTsConfig(),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];
