export default defineNuxtRouteMiddleware((to) => {
    console.log('[middleware:auth]');

    const {isLoggedIn} = useShopwareUser();

    if (to.meta.layout === 'auth' && isLoggedIn.value) {
        console.log('[middleware:auth] User already logged in, redirect user to account page');
        return navigateTo('/account');
    } else if (to.meta.layout === 'account' && !isLoggedIn.value) {
        console.log('[middleware:auth] User not logged in, redirect user to login page');
        return navigateTo('/login');
    }
});
