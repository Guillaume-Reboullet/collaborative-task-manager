import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import jest from 'eslint-plugin-jest'

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly', // ✅ Fix: Allows `process.env` in server files
        module: 'readonly',
        __dirname: 'readonly',
        require: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      prettier,
      '@typescript-eslint': ts,
      jest,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': ['error'],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      'no-undef': 'off', // ✅ Fix: Prevents ESLint from flagging `process`
    },
  },
  {
    files: ['**/__tests__/**', '**/*.test.ts', '**/*.spec.ts'],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
  },
  {
    ignores: [
      'node_modules/',
      'web/node_modules/',
      'web/.next/',
      'dist/',
      'build/',
      '.turbo/',
      'coverage/',
      'public/',
      '.cache/',
      'out/',
      '**/*.min.js',
      '**/vendor/**',
    ],
  },
]
