# personal-astro-template

This is my personal template for an [Astro](https://astro.build) project.

It uses the following stack:

* [pnpm](https://pnpm.io)
* [SolidJS](https://solidjs.org)
* [TailwindCSS](https://tailwindcss.com)

It also has some opiniated optimizations for UX/DX that you might miss in other templates:
* Prefetches all links and uses View Transitions by default for seamless navigation
* Autosorts HTML's `<head>` tags for [better performance and SEO](https://rviscomi.github.io/capo.js/)
* Optimizes Docker image output size for production

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

- [ ] Double check for any missing [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths) on pages with dynamic params.
- [ ] Whitelabel package.json with your project information (enable `private: true` if needed)
- [ ] Lock dependencies version to major version
- [ ] Replace `output` at [astro.config.mjs](./astro.config.mjs) with desired output target.
  - `server` is good for mostly server-rendered pages with few static / prerendered content.
  - `hybrid` is good for mostly static sites with a few dynamic routes.
  - Read more: https://docs.astro.build/en/guides/server-side-rendering/#configure-server-or-hybrid
  - [ ] If using `hybrid`, disable prerendering on unnecessary API routes
- [ ] Replace `site` on [astro.config.mjs](./astro.config.mjs) with your site URL (sitemap)
- [ ] Replace SEO configurations at [src/default-seo.ts](./src/default-seo.ts)
  - [ ] Replace your favicon
  - [ ] Optimize your robots.txt entry to account for [Verified Bots](https://radar.cloudflare.com/traffic/verified-bots)
- [ ] Setup CI/CD that'll automatically deploy the app on update
  - [ ] Docker: Double check for dependencies vs dev-dependencies requirements

Should do:

- [astro.config.mjs](./astro.config.mjs)
  - [ ] Adjust Astro's [prefetching strategy](https://docs.astro.build/en/guides/prefetch/#prefetch-configuration) to your likings
- [ ] Check if your content is compatible with light / dark mode


## Deployment

### Docker

To deploy the app using Docker, you can build and run the image just like any other Docker image:

To build the image, run the following command, replacing your username and app name:

```bash
docker build -t username/image-name .
```

Then, run the following command to deploy the app, replacing your port number:

```bash
docker run -p 4321:4321 username/image-name
```

### Cloudflare

To deploy the app using Cloudflare, you will need to replace the `output` at [astro.config.mjs](./astro.config.mjs) with `cloudflare`.  
By default, uncommenting the code will deploy the app using Cloudflare Workers.

You can import the app to your Cloudflare account by importing the Git repository via Cloudflare's web interface.
