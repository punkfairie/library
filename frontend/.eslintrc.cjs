module.exports = {
    root: true,
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2020,
        parser: require.resolve('@typescript-eslint/parser'),
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:vue/vue3-recommended',
    ],
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'vue/multi-word-component-names': 'off',
                'vue/first-attribute-linebreak': 'off',
                'vue/max-attributes-per-line': 'off',
                'vue/html-self-closing': 'off',
                'vue/html-closing-bracket-newline': 'off',
                'vue/multiline-html-element-content-newline': ['error', {
                    'allowEmptyLines': true,
                }],
                'vue/singleline-html-element-content-newline': 'off',
                'vue/v-for-delimiter-style': ['error', 'in'],
                'vue/define-macros-order': ['error', {
                  'order': ["defineOptions", "defineProps", "defineEmits", 'defineSlots']
                }],
                "vue/no-useless-v-bind": ['error', {
                  "ignoreIncludesComment": false,
                  "ignoreStringEscape": true
                }]
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-unused-vars': 'off',
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.vue'],
            },
            alias: {
                extensions: ['.vue', '.js', '.scss'],
                map: [
                    ['@', './resources/js'],
                    ['@scss', './resources/sass'],
                ],
            },
        },
        messageSyntaxVersion: '^9.0.0',
    },
}
