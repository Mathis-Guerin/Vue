'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {

  // Point d'entrée, fichier qui sera lu.
  entry: [
    './src/main.js'
  ],

  resolve: {
    // Permet de changer les endroit ou webpack va chercher les modules
    // lors des import.
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },

  module: {
    rules: [
      {
        // Permet d'écrire du js, du scss, ou d scss à l'intérieur 
        // de nos Single file components .Vue, et de charger d'autres 
        // loader correspondants à ces langages.
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        // Permet de compliler de scss en css, puis de charger le scss 
        // écrit à l'intérieur de nos composants .Vue.
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        // Permet de linter nos fichiers js et vue.
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        // enforce permet de vérifier les fichiers sources (avant qu'ils 
        // soient modifiés par d'autres loaders (babel) ).
        enforce: 'pre'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            // Permet d'utiliser les URL des fichier partout dans le code
            // Ex: import url from './file.png' => <img src={url}>
            loader: 'file-loader',
            options: {
                outputPath: 'static/img'
            },
          },
        ],
      },
      {
        // Pour tous les fichiers se terminant par .js, on charge le loader babel.
        test: /\.js$/,
        //TODO: exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // VueLoaderPlugin permet de cloner tous ce qui est dans nos fichier .vue dans leur langage correspondant
    // Du coup, le code à l'intérieur des balises <script> sera inteprété comme du .js.
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // Permet de copier des répertoire entier du code source dans le répoertorie de sortie.
    
  ]
}