import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import node from '@astrojs/node'
import solidJs from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import robots from 'astro-robots'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  site: 'https://angeloanan.xyz',
  prefetch: {
    // defaultStrategy: 'viewport',
    prefetchAll: true
  },
  integrations: [solidJs(), tailwind(), sitemap(), robots()],

  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  })
  // adapter: cloudflare({
  //   mode: 'advanced',
  //   routes: {
  //     strategy: 'auto',
  //     include: [],
  //     exclude: []
  //   },
  //   imageService: 'compile'
  // })
})
