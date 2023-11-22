import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {type BuildOptions} from './types/config'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

/**
 * массив плагинов webpack
 * @param paths
 * @param isDev
 * @param apiUrl
 * @param project
 */
export function buildPlugins({
    paths,
    isDev,
    apiUrl,
    project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const arrPlugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ]
    if (isDev) {
        arrPlugins.push(new ReactRefreshWebpackPlugin())
        arrPlugins.push(new webpack.HotModuleReplacementPlugin())
        arrPlugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}))
    }

    return arrPlugins
}
