import path from 'path'
import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config?.module?.rules?.push(buildCssLoader(true))
  config?.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  return config
}
