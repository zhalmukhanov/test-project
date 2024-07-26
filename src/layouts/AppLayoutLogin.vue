<script setup lang="ts">
import { useRoute } from 'vue-router'
import MainHeader from '@/components/ui/MainHeader.vue'
import { computed } from 'vue'
import { loginHeaderValues as header } from '@/layouts/values'

const route = useRoute()

const headerProps = computed(() => {
  return header[route.name]
})
</script>

<template>
    <main class="layout">
      <main-header v-bind="headerProps"/>
      <slot />
    </main>
</template>

<style scoped lang="scss">
@import "@/assets/styles/layout.scss";
</style>
