const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js']
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  entry: {
    Callout: './src/Callout',
    Modal: './src/Modal',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  externals: {
    'react': 'React',
    'jquery': 'jQuery',
    'lodash': '_',
    'foundation-sites': 'Foundation',
    'classnames': 'classNames'
  },
  module: {
    rules: [
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',    // where the fonts will go
            publicPath: '../'       // override the default path
          }
        }]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        loader: 'tslint-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'awesome-typescript-loader',
          }
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  require('postcss-cssnext')()
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                // Related to: https://github.com/webpack-contrib/sass-loader/issues/351
                outputStyle: 'compact',
                includePaths: [
                  path.resolve(__dirname, 'node_modules/foundation-sites/scss'),
                  path.resolve(__dirname, 'node_modules'),
                  path.resolve(__dirname, 'node_modules/compass-mixins/lib')
                ]
              }
            },
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
  },
  devtool: 'source-map'
}
