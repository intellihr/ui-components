module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(foundation-sites)/)'
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/assetsTransformer.js'
  },
  testRegex: './src/.*\\.test.(ts|tsx)$',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: [
    'text',
    'html'
  ],
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/style.tsx',
    '!**/examples/**'
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig-jest.json',
      useBabelrc: true
    }
  },
  setupTestFrameworkScriptFile: './setupTest.ts',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
    '^@Domain/(.+)$': '<rootDir>/src/domain/$1',
    '^@Common/(.+)$': '<rootDir>/src/common/$1'
  }
}
