import { FlatCompat } from "@eslint/eslintrc"
import { defineConfig, globalIgnores } from "eslint/config"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url))
})

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...compat.extends("standard", "plugin:tailwindcss/recommended","prettier"),
  {
    rules: {
      quotes: ["error", "double", { avoidEscape: true }]
    }
  },
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
