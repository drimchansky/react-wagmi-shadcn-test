import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginTypeScript from 'typescript-eslint'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

export default [
  {
    ignores: ['**/dist/', '**/.history/', '**/vite.config.ts']
  },
  ...compat.extends('eslint-config-standard'),
  ...compat.extends('eslint-config-prettier'),
  {
    plugins: {
      perfectionist: eslintPluginPerfectionist
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          specialCharacters: 'keep',
          internalPattern: ['^@/.+'],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 'always',
          maxLineLength: undefined,
          groups: [
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown'
          ]
        }
      ]
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: eslintPluginTypeScript.parser,
      parserOptions: {
        project: true
      }
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript.plugin
    },
    rules: {
      ...eslintPluginTypeScript.configs.recommended.rules
    }
  }
]
