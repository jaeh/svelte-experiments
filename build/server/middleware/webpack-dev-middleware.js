import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'

import webpackConfig from '../../config/webpack.config.js'
import devMiddlewareConfig from '../../config/webpack.devmiddleware.config.js'

const compiler = webpack(webpackConfig)

export const devMiddleware = webpackDevMiddleware(compiler, devMiddlewareConfig)
export const hotMiddleware = webpackHotMiddleware(compiler)

export default {
  devMiddleware,
  hotMiddleware,
}
