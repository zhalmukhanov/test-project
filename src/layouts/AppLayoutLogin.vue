<script setup lang="ts">
import { useRoute } from 'vue-router'
import MainHeader from '@/components/ui/MainHeader.vue'
import { computed } from 'vue'
import { headerValues } from '@/layouts/values'

const route = useRoute()

const headerProps = computed(() => {
  return headerValues[route.name]
})
</script>

<template>
    <main class="login-layout">
      <main-header v-bind="headerProps"/>
      <slot />
    </main>
</template>

<style scoped lang="scss">
.login-layout {
  box-sizing: border-box;
  padding: 16px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
