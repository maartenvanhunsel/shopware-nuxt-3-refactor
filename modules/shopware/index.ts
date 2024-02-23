import {
  addImportsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from 'nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'shopware',
    configKey: 'shopware',
  },
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const { shopwareEndpoint, shopwareAccessToken } =
      nuxt.options.runtimeConfig.public.shopware;
    if (!shopwareEndpoint || !shopwareAccessToken) {
      console.error(
        'Make sure that shopwareEndpoint and shopwareAccessToken are settled in the configuration'
      );
      return;
    }

    // Auto import composables.
    addImportsDir(resolve('./runtime/composables'));
    addPlugin(resolve('./runtime/plugins/session'));

    // TODO: add custom shopware devtools tab.
  },
});
