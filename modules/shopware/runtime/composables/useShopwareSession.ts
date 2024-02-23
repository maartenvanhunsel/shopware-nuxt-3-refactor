/**
 * Composable for session management.
 * @see https://github.com/shopware/frontends/blob/main/packages/composables/src/useSessionContext.ts
 */

// const useSessionState = () => useState<UserSession | undefined>('shopware-session', () => undefined);
const sessionState = ref(undefined);

export function useShopwareSession() {
    const {apiClient} = useShopwareClient();
    // const sessionState = useSessionState();

    async function refreshSessionContext() {
        sessionState.value = await apiClient.value.invoke('readContext get /context');
    }

    return {
        refreshSessionContext,
        session: sessionState,
    };
}
