import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
// import url from '@rollup/plugin-url';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';
import jsx from 'acorn-jsx';
import svg from 'rollup-plugin-svg'

export default {
  input: './index.js',
  output: {
    file: 'lib/jc-bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: /node_modules/,
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx']
    }), 
    postcss(),
    /* url({
      destDir: `./lib/assets`
    }), */
    css({ output: 'lib/jc-bundle.css' }),
  ],
  acornInjectPlugins: [jsx()],
  external: ['react'],
};