module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:react/jsx-runtime', 'plugin:storybook/recommended'],
    // parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: ['react', 'i18next', '@typescript-eslint'],
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
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['to']
        }]
    },
    globals: {
        __IS_DEV__: true
    },
    root: true,
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }]
}

// '@typescript-eslint/naming-convention': 'warn',
// "error",
// {
//     leadingUnderscore:true,
//     trailingUnderscore: true,
//     allowDouble: true
// },
// ],
