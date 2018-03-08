const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js']
  },
  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /(node_modules)/,
      //   enforce: 'pre',
      //   loader: 'tslint-loader',
      // },
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
        test: /\.scss$/,
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
                path.resolve(__dirname, 'src/styles/colours.js')
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map'
}
