export default defineNuxtConfig({
  routeRules: {
    "/": { prerender: true },
    "/ssg": { prerender: true },
    "/mixed": { prerender: true },
    "/csr": { ssr: false }
  },
  app: {
    head: {
      title: "Nuxt SEO Test",
      meta: [{ name: "description", content: "Pruebas con Nuxt" }],
    },
  },
});


