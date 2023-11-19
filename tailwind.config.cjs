import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss/types').Config} */
const extendedTheme = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [import('@tailwindcss/forms')]
}

export default extendedTheme
