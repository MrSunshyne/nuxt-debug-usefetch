// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', "nuxt-og-image"],
    runtimeConfig: {
        public: {
          siteUrl:
            process.env.VITE_APP_NUXT_PUBLIC_SITE_URL || "http://localhost:3000/"
        },
      },
})
