module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    // Prettier
    'prettier/prettier': ['error'],

    'no-console': 'error',
    'no-loop-func': 'error',
    'no-new-wrappers': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-with': 'error',
    'no-promise-executor-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable-loop': 'error',
    'func-call-spacing': 'error',
    'default-case': 'warn',
    'no-else-return': 'error',
    'default-case-last': 'error',
    'no-fallthrough': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-const-assign': 'error',
    'require-atomic-updates': 'warn',
    'no-undef': 'error',
    'constructor-super': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'no-undefined': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'no-extra-parens': 'warn',
    'no-undef-init': 'warn',
    eqeqeq: 'warn',
    'no-empty': 'warn',
    'guard-for-in': 'warn',
    'no-extra-bind': 'warn',
    'no-global-assign': 'warn',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'no-prototype-builtins': 'warn',
    'no-useless-escape': 'warn',
    'no-this-before-super': 'warn',
    'valid-typeof': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // Styling
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreStrings: true,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    curly: 'error',
    yoda: 'error',
    complexity: ['warn', 20],
    'max-classes-per-file': ['error', 1],
    'dot-location': ['error', 'property'],
    'computed-property-spacing': ['error', 'never'],
    'no-trailing-spaces': ['error'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: 'return',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
    ],
    'no-multiple-empty-lines': ['error'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'max-lines': ['warn', 1000],
    'max-lines-per-function': ['warn', 50],
    'max-nested-callbacks': ['warn', 4],
  },
};
