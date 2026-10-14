import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default [
  { ignores: ["dist/", ".astro/"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    // the measure script runs in Node and sends one function into the page
    files: ["scripts/**"],
    languageOptions: {
      globals: {
        URL: "readonly",
        console: "readonly",
        process: "readonly",
        WebSocket: "readonly",
        document: "readonly",
        innerWidth: "readonly",
      },
    },
  },
];
