module.exports = {
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 140,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": true,
        "arrowParens": "always"
      }
    ]
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2015
  }
}
