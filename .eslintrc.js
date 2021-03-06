module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'react-hooks'],
  ignorePatterns: ['node_modules/'],
  rules: {},
  settings: {
    react: {
      version: 'latest', // "detect" automatically picks the version you have installed.
    },
  },
};
