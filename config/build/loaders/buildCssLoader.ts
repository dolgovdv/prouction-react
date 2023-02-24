import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'

export const buildCssLoader = (isDev: boolean): webpack.RuleSetRule => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:3]' : '[hash:base64:5]'
          }

        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }
}
