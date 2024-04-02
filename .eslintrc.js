module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  globals: {
    uni: true,
    wx: true,
    getCurrentPages: true,
    getApp: true,
    program: true,
    App: true,
    Page: true,
    UniApp: true,
    UniHelper: true,
    requirePlugin: true, // 兼容微信插件的引入方式
    plus: true, // HTML5+接口，http://www.html5plus.org/doc/h5p.html
    VO: 'readonly',
    NodeJS: 'readonly',
    uniCloud: 'readonly',
  },
  rules: {
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/multi-word-component-names': ['error', {
      ignores: ['Index', 'index'],
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'vue/comment-directive': 'off',
    'no-unused-vars': ['off'],
    'no-redeclare': ['off'],
    'no-undef': ['off'],
    'vue/require-default-prop': ['off'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'vue/no-v-html': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
  },
}
