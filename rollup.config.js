import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve'
export default {
  input: './index.js',
  plugins: [
    babel({ 
      runtimeHelpers: true,
      plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
      babelrc: false,
      presets: ["@babel/preset-env"],
    }),
    commonjs(),
    resolve(),
  ],
  output: {
    file: './build/minivue.js',
    format: 'es',
    name: 'MiniVue'
  }
};