module.exports = {
  env: {
    browser: true,
    es6: true
  },
  plugins: ['prettier'],
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  rules: {
    eqeqeq: 'warn',
    quotes: ['warn', 'single']
  }
}
