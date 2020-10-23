/* eslint-disable import/no-extraneous-dependencies */
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const htmlMinifier = require('html-minifier');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('./src/admin/*.{js,yml}');
  eleventyConfig.addPassthroughCopy('./src/img');

  eleventyConfig.addTransform('html-minifier', (content, outputPath) => {
    if (
      process.env.ELEVENTY_ENV === 'production' &&
      outputPath.endsWith('.html')
    ) {
      const minified = htmlMinifier.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  });

  return {
    dataTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
