import {createAPIClient} from '@shopware/api-client';
import {useRuntimeConfig} from '#imports';

const apiClient: any = ref(null);

/**
 * Composable for api Client.
 * @see https://github.com/shopware/frontends/blob/main/packages/nuxt3-module/plugin.ts
 */

export function useShopwareClient() {
    const runtimeConfig = useRuntimeConfig();
    const {shopwareEndpoint, shopwareAccessToken} = runtimeConfig.public.shopware;

    const cookie = useCookie('sw-context-token', {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
    });

    // Create new API client if it's not created yet
    apiClient.value ||= createAPIClient({
        baseURL: shopwareEndpoint,
        accessToken: shopwareAccessToken,
        contextToken: cookie.value,
        onContextChanged(newContextToken) {
            cookie.value = newContextToken;
        },
    });

    return {
        apiClient,
    };
}
