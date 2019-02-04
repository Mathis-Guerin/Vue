const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development',

  // Permet d'utiliser webpack avec un live reload.
  devServer: {
    // hot permet le HMR. Il est nécessaire d'inclure également
    // le plugin webpack.HotModuleReplacementPlugin()
    hot: true,
    watchOptions: {
      poll: true
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Permet de faire du HMR.
  ]
});