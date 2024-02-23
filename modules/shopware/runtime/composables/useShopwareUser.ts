/**
 * Composable for user management.
 * @see https://github.com/shopware/frontends/blob/main/packages/composables/src/useUser.ts
 */

export function useShopwareUser() {
    const {apiClient} = useShopwareClient();
    const {session, refreshSessionContext} = useShopwareSession();

    // Get customer from session
    const user = computed(() => session.value?.customer);

    const isLoggedIn = computed(() => !!user.value?.id && !!user.value.active && !user.value.guest);
    const isCustomer = computed(() => !!user.value?.id && !user.value.guest);
    const isGuest = computed(() => !!user.value?.guest);

    // Login
    async function login({username, password}: {username: string; password: string}): Promise<void> {
        await apiClient.value.invoke('loginCustomer post /account/login', {
            username,
            password,
        });

        await refreshSessionContext();
        // refreshCart();
    }

    // Logout
    async function logout(): Promise<void> {
        await apiClient.value.invoke('logoutCustomer post /account/logout');
        await refreshSessionContext();
        // refreshCart();
    }

    // TODO: Implement register, refreshUser, loadCountry, loadSalutation, updatePersonalInfo, updateEmail, setDefaultPaymentMethod

    return {
        user,
        isLoggedIn,
        isCustomer,
        isGuest,
        login,
        logout,
    };
}
