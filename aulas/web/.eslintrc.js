module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "import/extensions": [1, {"tsx": "ignorePackages","svg": "ignorePackages"}],
    "import/no-unresolved": [2, {"ignore": ['.ts']}],
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
  }
};
