module.exports = {
  "extends": ["eslint:recommended"],
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      "pragma": "React", // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      {
        "property": "freeze",
        "object": "Object"
      },
      {
        "property": "myFavoriteWrapper"
      }
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {
        "name": "Link",
        "linkAttribute": "to"
      }
    ]
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": 2,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-catch-shadow": 2,
    "no-labels": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-undef-init": 2,
    "no-underscore-dangle": 2,
    "no-unused-expressions": 2,
    "no-use-before-define": 2,
    "no-with": 2,
    "camelcase": 2,
    "comma-spacing": 2,
    "consistent-return": 2,
    "curly": [2, "all"],
    "dot-notation": [2, {
      "allowKeywords": true
    }],
    "eol-last": 2,
    "no-extra-parens": [2, "functions"],
    "eqeqeq": 2,
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }],
    "new-cap": 2,
    "new-parens": 2,
    "quotes": [2, "double"],
    "semi": 2,
    "semi-spacing": [2, {
      "before": false,
      "after": true
    }],
    "space-infix-ops": 2,
    "keyword-spacing": 2,
    "space-unary-ops": [2, {
      "words": true,
      "nonwords": false
    }],
    "strict": [2, "global"],
    "yoda": [2, "never"],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};