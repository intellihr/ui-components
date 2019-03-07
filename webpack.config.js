const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
    alias: {
      '@Common': path.resolve(__dirname, 'src/common'),
      '@Domain': path.resolve(__dirname, 'src/domain')
    }
  },
  plugins: [
    new WebpackBar(),
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'src/common/sass'),
      to: path.resolve(__dirname, 'dist/sass')
    }])
  ],
  entry: {
    index: './src/index.ts',
    'ui-components': './src/common/sass/app.scss'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/' // where the fonts will go
          }
        }]
      },
      {
        test: /\.tsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),

          // Manual hacks for packages which don't support ie11
          path.resolve(__dirname, 'node_modules/foundation-sites'),
          path.resolve(__dirname, 'node_modules/react-styleguidist'),
          path.resolve(__dirname, 'node_modules/ansi-styles'),
          path.resolve(__dirname, 'node_modules/chalk'),
          path.resolve(__dirname, 'node_modules/react-dev-utils'),
          path.resolve(__dirname, 'node_modules/strip-ansi')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/react-dates/lib/css")
        ],
        use: [
          'style-loader',
          'css-loader'
        ]
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
            }
          ]
        })
      }
    ]
  }
}