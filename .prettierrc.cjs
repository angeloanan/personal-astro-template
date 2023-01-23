module.exports = {
  tabWidth: 2,
  useTabs: false,
  arrowParens: "always",
  jsxSingleQuote: true,
  singleQuote: true,
  semi: false,
  trailingComma: "none",
  printWidth: 100,
  pluginSearchDirs: false,
  plugins: [require.resolve('prettier-plugin-astro'), require.resolve('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}