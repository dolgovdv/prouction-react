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
    overrides: [],
    // parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        'react',
        'i18next'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: 'off',
        '@typescript-eslint/naming-convention': ['off'],
        '@typescript-eslint/indent': 'warn',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }]
    },
    globals: {
        __IS_DEV__: true
    }
}

// '@typescript-eslint/naming-convention': 'warn',
// "error",
// {
//     leadingUnderscore:true,
//     trailingUnderscore: true,
//     allowDouble: true
// },
// ],
