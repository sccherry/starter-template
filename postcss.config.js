const postcssImport = require('postcss-import');
const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');
const tailwind = require('tailwindcss');

module.exports = {
  plugins: [postcssImport, postcssNormalize, tailwind, postcssPresetEnv],
};
