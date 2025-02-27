import globals from "globals";
import jsLint from "@eslint/js";
import tsLint from "typescript-eslint";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    plugins: {
      // key "simple-import-sort" is the plugin namespace
      "simple-import-sort": pluginSimpleImportSort,
      '@stylistic': stylistic,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
      ]
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,jsx,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module"
      }
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  jsLint.configs.recommended,
    ...tsLint.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
    braceStyle: "1tbs",
    commaDangle: "always-multiline",
    arrayBracketSpacing: true,
    quoteProps: "as-needed",
    arrowParens: "always",
    blockSpacing: true,
  }),
];
