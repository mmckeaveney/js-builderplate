import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify-es';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: pkg.main
    },
    {
      format: 'es',
      file: pkg.module
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ], 
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    typescript({
      // Use the most up to date typescript 
      // rather than the one bundled with the plugin
      typescript: require('typescript')
    })
  ]
}
