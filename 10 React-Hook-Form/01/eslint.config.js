import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    // rules: {
    //   ...reactHooks.configs.recommended.rules,
    //   'react-refresh/only-export-components': [
    //     'warn',
    //     { allowConstantExport: true },
    //   ],
    // },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable if using React 17+
      "react-hooks/rules-of-hooks": "error", // Enforces the rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Warns on missing dependencies
      "no-duplicate-imports": "error",
      "sort-imports": "off",
      "no-unused-vars": "off",
      "no-undef": "error",
      "no-extra-boolean-cast": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-unsafe-finally": "off",
      "no-unsafe-optional-chaining": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "source.fixAll.eslint": 0,
    },
    settings: {
      react: {
        version: "detect", // Automatically detects the version of React
      },
    },
  }
);
