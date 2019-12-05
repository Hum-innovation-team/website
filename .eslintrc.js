module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  plugins: ["import"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
}
