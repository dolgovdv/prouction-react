import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'
import { buildResolvers } from './buildResolves'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
