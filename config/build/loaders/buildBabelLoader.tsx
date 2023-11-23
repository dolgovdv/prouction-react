import type webpack from 'webpack'

export const buildBabelLoader = (isDev: boolean): webpack.RuleSetRule => {
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                            // discardOldKeys: true,
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                            jsonSpace: 4,
                        },
                        isDev && require.resolve('react-refresh/babel'),
                    ].filter(Boolean),
                ],
            },
        },
    }
}
