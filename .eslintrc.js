module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@builder.io/mitosis", "react", "@typescript-eslint"],
  extends: ["plugin:@builder.io/mitosis/recommended", "eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    // Use this to configure rules individually
    "@builder.io/mitosis/css-no-vars": "error"
  }
};