import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "src/main.js",

  external: [
    'create-response',
    'http-request',
    'cookies',
    'text-encode-transform',
    'url-search-params',
    'streams',
    'log',
    'resolvable',
    'encoding',
    'crypto',
    'html-rewriter'
  ],

  output: {
    dir: "dist",
    format: "es",
    preserveModules: true
  },

  plugins: [
    commonjs(),
    resolve(),
    json()
  ]
};
