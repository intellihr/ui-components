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
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  testRegex: './src/.*\\.test.(ts|tsx)$',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig-jest.json',
      babelConfig: {
        presets: ['@babel/preset-env']
      }
    }
  },
  setupFilesAfterEnv: ['./setupTest.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
    '^@Domain/(.+)$': '<rootDir>/src/domain/$1',
    '^@Common/(.+)$': '<rootDir>/src/common/$1'
  }
}
