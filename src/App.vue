<template>
  <app-layout>
    <transition name="page">
      <router-view/>
    </transition>
  </app-layout>
</template>

<style lang="scss">
  @import "@/assets/styles/main";

  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.2s ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
</script>
