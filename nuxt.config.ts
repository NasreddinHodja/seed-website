// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  css: ["@/assets/css/fonts.css", "@/assets/css/main.css"],
  imports: {
    dirs: ["types/**"],
  },
});
