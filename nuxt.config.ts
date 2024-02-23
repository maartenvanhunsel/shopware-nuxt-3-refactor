// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      shopware: {
        shopwareEndpoint: process.env.NUXT_PUBLIC_SHOPWARE_ENDPOINT || 'https://demo-frontends.shopware.store/store-api/',
        shopwareAccessToken: process.env.NUXT_PUBLIC_SHOPWARE_ACCESS_TOKEN || 'SWSCBHFSNTVMAWNZDNFKSHLAYW',
      },
    },
  },
  modules: ['@/modules/shopware'],
});
