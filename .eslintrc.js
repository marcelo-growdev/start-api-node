module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:jest/all'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'class-methods-use-this': 'off',
    'jest/lowercase-name': 'off',
    'no-param-reassign': 'off',
  },
};
