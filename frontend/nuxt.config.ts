// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
  ],
  plugins: [
    '~/plugins/axios'
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL
    }
  }
  
})
