import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import node from '@astrojs/node'
import solidJs from '@astrojs/solid-js'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import robots from 'astro-robots'

// https://astro.build/config
export default defineConfig({
  site: 'https://angeloanan.xyz',
  prefetch: {
    // defaultStrategy: 'viewport',
    prefetchAll: true
  },
  integrations: [solidJs(), tailwind(), partytown(), sitemap(), robots()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
})
