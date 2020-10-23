/* eslint-disable import/no-extraneous-dependencies */
const pluginTypography = require('@tailwindcss/typography');

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['src/**/*.{html,njk}'],
  },
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [pluginTypography],
};
