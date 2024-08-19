const globals = require('globals')
const pluginJs = require('@eslint/js')
const pluginJest = require('eslint-plugin-jest')
const pluginPrettier = require('eslint-plugin-prettier')

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.jest, // Adiciona suporte a globals do Jest
      },
    },
    plugins: {
      jest: pluginJest,
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
          semi: false,
        },
      ],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      // Remover a regra inconsistente que causou erro
    },
    settings: {
      jest: {
        version: 'detect', // Detecta automaticamente a versão do Jest
      },
    },
  },
]
