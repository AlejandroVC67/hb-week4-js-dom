const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/series/main.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {

    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader?sourceMap'
          ]
        })
      }

    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        beautify: false,
        ecma: 6,
        compress: true,
        comments: false
      }
    }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: './src/series/index.html'
    })
  ]
}
