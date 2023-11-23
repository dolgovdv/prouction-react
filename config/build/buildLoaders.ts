import type webpack from 'webpack'
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {type BuildOptions} from './types/config'
import {buildCssLoader} from './loaders/buildCssLoader'
import {buildBabelLoader} from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = buildBabelLoader(options.isDev)

    const assetsLoader = {
        test: /\.png/,
        type: 'asset/resource',
    }

    // const fileLoader = {
    //     test: /\.(png|jpe?g|gif)$/i,
    //     use: [
    //         {
    //             loader: 'file-loader',
    //         },
    //     ],
    // }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const typeScryptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
        // ReactRefreshWebpackPlugin
        // use: [
        //     {
        //         loader: require.resolve('babel-loader'),
        //         options: {
        //             plugins: [__IS_DEV__ && require.resolve('react-refresh/babel')].filter(Boolean),
        //         },
        //     },
        // ],
    }

    const cssLoaders = buildCssLoader(options.isDev)

    return [
        babelLoader,
        typeScryptLoader,
        cssLoaders,
        svgLoader,
        assetsLoader, // deprecated fileLoader,
    ]
}
