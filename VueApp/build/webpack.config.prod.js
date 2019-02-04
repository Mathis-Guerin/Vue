const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

module.exports = merge(baseConfig, {
  mode: 'production',

  // TODO : Afficher un hash pour le fichier d'output en prod (pour éviter les problème de cache)
  /* 
 */

  module: {
  },

  plugins: [
  ]
});