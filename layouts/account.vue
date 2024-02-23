<script setup lang="ts">
const {logout: _logout} = useShopwareUser();
const {user} = useShopwareUser();

async function logout() {
    try {
        await _logout();
        navigateTo('/login');
    } catch (e) {
        console.log(e);
    }
}
</script>

<template>
      <main>
          <!-- Temporarily add <Suspense> because of bug: https://github.com/nuxt/nuxt/issues/21901 -->
          <Suspense>
              <slot />
          </Suspense>

        <button type="button" @click="logout">Logout</button>
      </main>
</template>
