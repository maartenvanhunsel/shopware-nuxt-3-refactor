import {defineNuxtPlugin, useShopwareSession} from '#imports';

export default defineNuxtPlugin({
    name: 'shopware-session-plugin',
    enforce: 'pre',
    async setup() {
        console.log('[plugin:session]');
        const {session, refreshSessionContext} = useShopwareSession();
        if (!session.value) {
            await refreshSessionContext();
        }
    },
});
