// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
  ],
  plugins: [
    '~/plugins/axios',
    '~/plugins/pinia'
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
