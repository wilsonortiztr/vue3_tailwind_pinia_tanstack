<template>
  <header>
    <Navbar class="mb-3" />
    <!--     <Breadcrumb class="container mx-auto sm:px-6 lg:px-8" /> -->
  </header>

  <body class="container mx-auto sm:px-6 lg:px-8">
    <RouterView />
  </body>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarComponent.vue';
</script>

<style scoped></style>
