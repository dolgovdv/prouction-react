import path from 'path'
import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { type RuleSetRule } from 'webpack'

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  // FIXME
  // eslint-disable-next-line no-param-reassign,@typescript-eslint/ban-ts-comment
  // @ts-expect-error
  config?.module?.rules = config?.module?.rules?.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config?.module?.rules?.push({ test: /\.svg$/, use: ['@svgr/webpack'] })
  config?.module?.rules?.push(buildCssLoader(true))

  config?.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  return config
}
