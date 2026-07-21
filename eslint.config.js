import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: { js, "@stylistic": stylistic },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "no-const-assign": "error",
      "no-empty": "error",
      "@stylistic/no-extra-semi": ["error"],
      "@stylistic/array-bracket-spacing": ["error"],
      "@stylistic/arrow-spacing": ["error"],
    },
  },
]);
