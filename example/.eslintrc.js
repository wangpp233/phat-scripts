module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:@typescript-eslint/recommended"
  ],
  // "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    // "@typescript-eslint"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "no-var": [
      "error"
    ],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": [
      "warn",
      "always"
    ]
  }
};
