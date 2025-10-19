<template>
  <HeaderCommerce />
  <main>
    <router-view />
  </main>
  <FooterCommerce />
</template>

<script setup>
import FooterCommerce from './components/FooterCommerce.vue'
import HeaderCommerce from './components/HeaderCommerce.vue'
</script>
