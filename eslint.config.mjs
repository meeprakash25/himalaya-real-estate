import { FlatCompat } from "@eslint/eslintrc"
import { defineConfig, globalIgnores } from "eslint/config"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss"

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url))
})

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...compat.extends("standard"),
  eslintPluginTailwindcss.configs["flat/recommended"] ||
    eslintPluginTailwindcss.configs.recommended,
  {
    settings: {
      tailwindcss: {
        cssConfigPath: "./app/globals.css"
      }
    }
  },
  {
    rules: {
      "tailwindcss/no-unnecessary-arbitrary-value": "off"
    }
  },
  eslintConfigPrettier,

  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-undef": "off"
    }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "components/ui/**"
  ])
])

export default eslintConfig
