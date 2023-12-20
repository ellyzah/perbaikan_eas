<template>
  <div>
    <RouterLink
      to="/"
      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    >
      Form
    </RouterLink>

    <RouterLink
      to="/announcement"
      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    >
      Login
    </RouterLink>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style></style>
