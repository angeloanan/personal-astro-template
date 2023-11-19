import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import node from '@astrojs/node'
import prefetch from '@astrojs/prefetch'
import solidJs from '@astrojs/solid-js'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import robots from 'astro-robots'

// https://astro.build/config
export default defineConfig({
  site: 'https://angeloanan.xyz',
  integrations: [
    solidJs(),
    tailwind(),
    prefetch({
      selector: 'a',
      throttle: 10
    }),
    partytown(),
    sitemap(),
    robots()
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
})
