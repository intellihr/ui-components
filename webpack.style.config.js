const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: ['.scss']
  },
  plugins: [
    new ExtractTextPlugin('[name].scss')
  ],
  entry: {
    base: './src/sass/app.scss'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: '@epegzz/sass-vars-loader',
              options: {
                files: [
                  path.resolve(__dirname, 'src/sass/colours/index.js')
                ]
              }
            }
          ]
        })
      }
    ]
  }
}
