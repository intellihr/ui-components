const webpackConfig = require('./webpack.config');
const TRANSFORMS_FOR_IE11 = {
  test: /\.jsx?$/,
  include: /node_modules\/(?=(acorn-jsx|regexpu-core|unicode-match-property-ecmascript|unicode-match-property-value-ecmascript|react-dev-utils|ansi-styles|ansi-regex|chalk|strip-ansi)\/).*/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              ie: '11'
            }
          }
        ]
      ]
    }
  }
};
webpackConfig.module.rules = [
  TRANSFORMS_FOR_IE11,
  ...webpackConfig.module.rules
];


module.exports = {
  components: 'src/index.ts',
  outputPath: 'dist/playroom',
  webpackConfig: () => webpackConfig,
  typeScriptFiles: [
    'src/components/**/*.{ts,tsx}',
    '!**/node_modules'
  ]

  // Optional:
  // title: 'My Awesome Library',
  // themes: './src/themes',
  // snippets: './playroom/snippets.js',
  // frameComponent: './playroom/FrameComponent.js',
  // widths: [320, 375, 768, 1024],
  // port: 9000,
  // openBrowser: true,
  // exampleCode: `
  //   <Button>
  //     Hello World!
  //   </Button>
  // `,
}
