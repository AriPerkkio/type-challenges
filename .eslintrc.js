module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['prettier'],
    extends: ['@antfu/eslint-config-ts', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 'error',
        'import/first': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
    },
};
