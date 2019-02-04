const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    // Permet de faire du HMR.
    new webpack.HotModuleReplacementPlugin(),
    // HMR shows correct file names in console on update.
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
});