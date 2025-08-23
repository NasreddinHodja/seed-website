// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    ignores: [
      ".github",
      ".nuxt",
      ".output",
      ".vscode",
      "android",
      "assets",
      "coverage",
      "css",
      "cypress",
      "dist",
      "node_modules",
      "resources",
      "app/static",
    ],
    rules: {
      "vue/html-self-closing": "off",
      "vue/no-v-html": "off",
    },
  }
);
