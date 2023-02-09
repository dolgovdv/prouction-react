import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          // TODO: добавить вынос с учетом namespace
          ['i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }

          ]
        ]
      }

    }
  }

  const assetsLoader = {
    test: /\.png/,
    type: 'asset/resource'
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
    use: ['@svgr/webpack']
  }

  const typeScryptLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader'
    // ReactRefreshWebpackPlugin
    // use: [
    //     {
    //         loader: require.resolve('babel-loader'),
    //         options: {
    //             plugins: [_IS_DEV_ && require.resolve('react-refresh/babel')].filter(Boolean),
    //         },
    //     },
    // ],
  }

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:3]' : '[hash:base64:5]'
          }

        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  return [
    babelLoader,
    typeScryptLoader,
    cssLoaders,
    svgLoader,
    assetsLoader // deprecated fileLoader,
  ]
}
