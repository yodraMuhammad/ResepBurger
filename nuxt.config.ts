// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
    app: {
        head: {
          link: [
            { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
          ],
          script: [{ src: 'https://unpkg.com/aos@2.3.1/dist/aos.js' }],
        },
      },
})
