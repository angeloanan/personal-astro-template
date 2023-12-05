# personal-astro-template

This is my personal template for an [Astro](https://astro.build) project.

It uses the following stack:

* [pnpm](https://pnpm.io)
* [SolidJS](https://solidjs.org)
* [TailwindCSS](https://tailwindcss.com)

## Getting Started

To get started, click the "Use this template" button above, or run the following command:

```bash
pnpx degit github:angeloanan/personal-astro-template my-astro-project
```

Then, install the dependencies:

```bash
cd my-astro-project
pnpm install
```

## Pre-production Checklist

Must do:

- [ ] Whitelabel package.json with your project information (enable `private: true` if needed)
- [ ] Lock dependencies version to major version
- [ ] Replace `site` on [astro.config.mjs](./astro.config.mjs) with your site URL (sitemap)
- [ ] Replace SEO configurations at [src/default-seo.ts](./src/default-seo.ts)
  - [ ] Replace your favicon
  - [ ] Optimize your robots.txt entry to account for [Verified Bots](https://radar.cloudflare.com/traffic/verified-bots)
- [ ] Setup CI/CD that'll automatically deploy the app on update
  - [ ] Docker: Double check for dependencies vs dev-dependencies requirements

Should do:

- [astro.config.mjs](./astro.config.mjs)
  - [ ] Adjust Astro's [prefetching strategy](https://docs.astro.build/en/guides/prefetch/#prefetch-configuration) to your likings
