import path from 'path'
import type webpack from 'webpack'
import {type BuildPaths} from '../build/types/config'
import {buildCssLoader} from '../build/loaders/buildCssLoader'
import {DefinePlugin, type RuleSetRule} from 'webpack'

export default ({config}: {config: webpack.Configuration}): webpack.Configuration => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    // FIXME
    // eslint-disable-next-line
    // @ts-ignore
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line
        if (/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i}
        }
        return rule
    })
    config?.module?.rules?.push({test: /\.svg$/, use: ['@svgr/webpack']})
    config?.module?.rules?.push(buildCssLoader(true))
    config?.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        })
    )

    return config
}
