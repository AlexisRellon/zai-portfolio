// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@formkit/auto-animate',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    'nuxt-aos'
  ],

  aos: {
    global: true,
    disable: false,
    startEvent: 'DOMContentLoaded',
    once: true,
    useClassNames: true,
    initClassName: 'aos-init',
    duration: 800,
    easing: 'ease-in-out',
    offset: 120,
    delay: 300,
    mirror: true,
    anchorPlacement: 'top-bottom',
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#005C45',
            secondary: '#4A8A79',
            neutral: '#8C8A88',
            background: '#FEFFFF',
          }
        }
      }
    }
  }
})
