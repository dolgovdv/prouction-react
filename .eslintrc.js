module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:react/jsx-runtime'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        'react'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: 'off',
        '@typescript-eslint/indent': 'warn',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-var-requires': 'off'
    },
    globals: {
        _IS_DEV_: true
    }
}
