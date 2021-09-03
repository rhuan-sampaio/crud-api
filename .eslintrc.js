module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/first': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};
