// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  telemetry: false,
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt3',
      meta: [
        { name: 'description', content: 'shushuTab' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=0'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [{ src: 'https://at.alicdn.com/t/c/font_4217729_71n5ajhgn4h.js' }]
    }
  }
})
