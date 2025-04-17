// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default withNuxt(
  // Prettier integration
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error', // Treat Prettier issues as ESLint errors
    },
  },
  // Add custom rules here if needed
  {
    rules: {
      // Example: Disable a specific rule
      'vue/multi-word-component-names': 'off',
    },
  }
);
