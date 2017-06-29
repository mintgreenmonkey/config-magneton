module.exports = {
  env: {
    mocha: true,
    es6: true,
	node: true
  },
  extends: ['eslint:recommended'],
  globals: {
    driver:true,
    browser:true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
    }
  },
  plugins: [
    'chai-expect'
  ],
  rules: {
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'chai-expect/missing-assertion': 1,
    'chai-expect/terminating-properties': 1,
    'chai-expect/no-inner-compare': 1
  },
};
