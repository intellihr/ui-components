const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js']
  },
  module: {
    rules: [
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
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                "outDir": "./",
                "jsx": "react",
              }
            }
          }
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          'url-loader'
        ]
      }
    ]
  },
  devtool: 'source-map'
}
