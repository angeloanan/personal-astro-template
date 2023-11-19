import type { Props as SEOProps } from 'astro-seo'

const defaultSEO: SEOProps = {
  title: "Angelo's Astro Template",
  titleTemplate: '%s | Astro Template',

  description:
    'An Astro template that helps you to focus on programming your site, rather than setting up your toolkits!',

  openGraph: {
    basic: {
      type: 'website',
      title: "Angelo's Astro Template",
      image: ''
    }
  },

  twitter: {}
}

export default defaultSEO
