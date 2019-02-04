const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const path = require('path')


module.exports = merge(baseConfig, {
  mode: 'production',

  // TODO : Afficher un hash pour le fichier d'output en prod (pour éviter les problème de cache)
  /* 
 */

  module: {
  },

  plugins: [
  /* // Extract imported CSS into own file
    new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
    // Minify JS
    new UglifyJsPlugin({
      sourceMap: false,
      compress: true,
    }),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }), */
  ]
});