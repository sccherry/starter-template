/* eslint-disable import/no-extraneous-dependencies */
const MarkdownIt = require('markdown-it');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const htmlMinifier = require('html-minifier');

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

md.renderer.rules.paragraph_open = (tokens, idx, options, env, renderer) => {
  const token = tokens[idx];

  if (idx === 0 && token.level === 0) {
    return `<${token.tag} class="lead">`;
  }

  return renderer.renderToken(tokens, idx, options);
};

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

  eleventyConfig.setLibrary('md', md);

  return {
    dataTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
