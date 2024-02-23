<script setup lang="ts">
const {session} = useShopwareSession();
const {user, isLoggedIn} = useShopwareUser();
</script>

<template>
  <div>
    <DevOnly>
      <p>Current session:</p>
      <p>
        <b>isLoggedIn:</b> {{ isLoggedIn }}
        <span v-if="user?.email">({{ user?.email }})</span>
      </p>

      <p><b>Token:</b> <span>{{ session?.token }}</span></p>
    </DevOnly>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
