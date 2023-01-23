import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import cloudflare from '@astrojs/cloudflare'
import node from '@astrojs/node'
import vercel from '@astrojs/vercel/serverless'
import compress from 'astro-compress'
import prefetch from '@astrojs/prefetch'
import solidJs from '@astrojs/solid-js'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  site: 'https://angeloanan.xyz',
  integrations: [
    solidJs(),
    tailwind(),
    prefetch(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    partytown(),
    sitemap(),
    compress()
  ]
  // output: 'server',
  // adapter: vercel()
  // adapter: cloudflare({
  //   mode: 'advanced'
  // })
  // adapter: node({
  //   mode: 'standalone'
  // })
})
