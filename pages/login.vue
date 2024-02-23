<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['auth'],
});

const {login, isLoggedIn} = useShopwareUser();

const username = ref('shopware-test@test.nl');
const password = ref('password');
async function submit() {
  try {
    await login({username: username.value, password: password.value});
    navigateTo('/account');
  } catch (e) {
    console.log('error', e);
  }
}
</script>
<template>
  <div>
    <!--  Create form with v-model and username and password field -->
    <form @submit.prevent="submit">
      <input type="text" v-model="username" />
      <input type="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
