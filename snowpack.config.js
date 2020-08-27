module.exports = {
  mount: {
    dist: '/',
    'src/css': '/css',
    'src/js': '/js',
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-run-script',
      { cmd: 'eleventy --config eleventy.config.js', watch: '$1 --watch' },
    ],
    '@snowpack/plugin-babel',
    '@snowpack/plugin-postcss',
  ],
  devOptions: {
    out: 'dist',
  },
  buildOptions: {
    clean: true,
  },
};
