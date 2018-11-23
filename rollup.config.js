import cjs from "rollup-plugin-cjs-es";
import resolve from 'rollup-plugin-node-resolve';
import shim from "rollup-plugin-shim";
import {terser} from 'rollup-plugin-terser';

export default [
  config({
    output: {
      file: "dist/content-parser.js"
    }
  }),
  config({
    output: {
      file: "dist/content-parser.min.js"
    },
    plugins: [terser()]
  })
];

function config({output, plugins = []}) {
  return {
    input: 'bundle.js',
    output: {
      format: 'iife',
      name: "contentParser",
      sourcemap: true,
      ...output
    },
    plugins: [
      shim({
        boom: `export function badRequest(message) {
          return new Error(message);
        }`
      }),
      resolve(),
      cjs({nested: true}),
      ...plugins
    ]
  };
}
