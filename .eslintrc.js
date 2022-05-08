module.exports = {
    env: {
            browser: true,
            es2021: true,
            node: true,
            // The Follow config only works with eslint-plugin-vue v8.0.0+
        'vue/setup-compiler-macros': true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        'prettier'
    ],
    parser: 'vue-eslint-parser',

    parserOptions: { parser: '@typescript-eslint/parser' },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/no-multiple-template-root': 'off', //模板根只需要一个元素。【Vue2的Templata只支持一个根标签Vue3的Templata支持多个根标签】
        'vue/html-self-closing': 'off'
    }
};
