module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "semi": [0],
    "no-console": 0,
    "no-multiple-empty-lines": [1, {"max": 2}],
    "arrow-parens": 0,
    "func-names": 0,
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "global-require": 0,
    "import/no-dynamic-require": 0
  },
  "globals": {
    // 设置全局变量，false为不可重新赋值
    "G": false
  }
}
