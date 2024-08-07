// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['assets/css/main.css'],
  modules: [
    "@nuxt/ui",
    "@nuxtjs/supabase"
  ],
  app: {
    pageTransition: {name: 'page',mode:'out-in'}
  },
});