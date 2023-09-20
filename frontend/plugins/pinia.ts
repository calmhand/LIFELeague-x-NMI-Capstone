import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
export default defineNuxtPlugin( nuxtApp => {
    pinia.use(piniaPluginPersistedstate)
})