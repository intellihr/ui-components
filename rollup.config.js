import fs from 'fs'
import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import nodeResolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import ts from 'typescript'
import { terser } from 'rollup-plugin-terser'
import externals from 'rollup-plugin-node-externals'
import progress from 'rollup-plugin-progress'

const isProduction = process.env.BUILD === 'production'

const domainPath = path.resolve(__dirname, 'src', 'domain')
const input = fs.readdirSync(domainPath)
  .filter((name) => fs.existsSync(path.resolve(domainPath, name, 'index.ts')))
  .reduce(
    (acc, name) => {
      acc[name] = path.resolve(domainPath, name, 'index.ts')

      return acc
    },
    {
      index: path.resolve(__dirname, 'src', 'index.ts'),
      common: path.resolve(__dirname, 'src', 'common', 'index.ts'),
      domain: path.resolve(__dirname, 'src', 'domain', 'index.ts')
    }
  )

const commonPlugins = [
  !isProduction && progress(),
  sourceMaps(),
  externals({
    deps: true
  }),
  json(),
  nodeResolve({
    preferBuiltins: true
  }),
  typescript({
    typescript: ts,
    tsconfigOverride: {
      compilerOptions: {
        declaration: false
      }
    }
  }),
  commonjs({
    include: /node_modules/,
    namedExports: {
      'body-scroll-lock': ['disableBodyScroll', 'enableBodyScroll'],
      'prop-types': [
        'array',
        'bool',
        'func',
        'number',
        'object',
        'string',
        'symbol',
        'any',
        'arrayOf',
        'element',
        'elementType',
        'instanceOf',
        'node',
        'objectOf',
        'oneOf',
        'oneOfType',
        'shape',
        'exact'
      ],
      'react-dates': ['DateRangePicker', 'SingleDatePicker']
    },
    sourceMap: false
  }),
  postcss({
    extract: true,
    modules: {
      scopeBehaviour: 'global'
    },
    use: ['sass'],
    minimize: isProduction,
    sourceMap: true
  }),
  isProduction && terser()
].filter(Boolean)

const configBase = {
  input,
  plugins: commonPlugins
}

export default [
  {
    ...configBase,
    output: {
      dir: path.resolve(__dirname, 'dist', 'esm'),
      format: 'esm',
      sourcemap: true
    }
  }
]
