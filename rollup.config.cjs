const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve').default;
const typescript = require('@rollup/plugin-typescript').default;
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const terser = require('@rollup/plugin-terser').default;
const packageJson = require('./package.json');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true, // Important for Emotion — uses browser fields
    }),
    commonjs({
      include: /node_modules/,
      // Handle default imports from CommonJS modules
      requireReturnsDefault: 'auto',
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    terser(),
  ],
};
