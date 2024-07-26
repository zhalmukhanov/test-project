<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <transition :name="'page'">
    <component :is="route.meta.layoutComponent">
      <slot />
    </component>
  </transition>
</template>

<style scoped>
</style>
