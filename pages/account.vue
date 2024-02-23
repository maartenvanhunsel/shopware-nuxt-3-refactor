<script setup>
definePageMeta({
  layout: 'account',
  middleware: ['auth'],
});

const {user} = useShopwareUser();
</script>

<template>
  <div>
    <span>Hallo,</span>
    <h1>
      {{ user?.firstName }} {{ user?.lastName }}
    </h1>
  </div>
</template>
