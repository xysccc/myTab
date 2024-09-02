// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  telemetry: false,
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt3',
      meta: [{ name: 'description', content: 'Nuxt3' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [{ src: 'https://at.alicdn.com/t/c/font_4217729_71n5ajhgn4h.js' }]
    }
  }
  // plugins:[src:'']
})
