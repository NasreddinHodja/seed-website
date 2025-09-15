// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/eslint", "@nuxt/image"],
  css: ["@/assets/css/fonts.css", "/assets/css/main.css"],
  image: {
    format: ["webp"],
    domains: [
      "https://seed-r2-worker.seedworker.workers.dev/",
      "https://postimg.cc",
    ],
  },
});
