const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const glob = require('glob-all')
require('laravel-mix-versionhash')
require('laravel-mix-purgecss')

mix.setPublicPath('./assets')

// Don't forget to add plugins when needed
mix.browserSync({
  proxy: 'http://localhost/octobersite',
  host: 'http://localhost/octobersite',
  notify: false,
  files: ['./assets/public/css/*.css', './**/*.htm'],
})

mix.js('./assets/resources/js/app.js', './assets/public/js')

mix.postCss('./assets/resources/css/styles.css', './assets/public/css/', [
  require('postcss-easy-import'),
  tailwindcss('./tailwind.config.js'),
  require('precss')(),
  require('postcss-combine-media-query')(),
  require('postcss-font-magician')({
    variants: {
      Roboto: {
        '100': [],
        '300': [],
        '500': [],
        '700': [],
      },
    },
  }),
])

if (mix.inProduction()) {
  mix.purgeCss({
    paths: () => glob.sync([path.join(__dirname, '**/*.htm')]),
  })
  mix.versionHash()
  mix.sourceMaps()
}
