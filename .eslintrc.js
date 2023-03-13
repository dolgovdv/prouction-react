module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:react/jsx-runtime',
        'plugin:storybook/recommended',
        'prettier',
    ],
    // parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', 'i18next', '@typescript-eslint', 'prettier', 'react-hooks'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'prettier/prettier': 'error',
        indent: 'off',
        '@typescript-eslint/indent': ['off', 4],
        '@typescript-eslint/naming-convention': ['off'],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['to', 'data-testid', 'size', 'text', 'title'],
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    globals: {
        __IS_DEV__: true,
    },
    root: true,
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
}

// '@typescript-eslint/naming-convention': 'warn',
// "error",
// {
//     leadingUnderscore:true,
//     trailingUnderscore: true,
//     allowDouble: true
// },
// ],
