<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import MainHeader from '@/components/ui/MainHeader.vue'
import BottomBar from '@/components/ui/BottomBar.vue'

import { bottomBarTabs as tabs, defaultHeaderValues as header } from '@/layouts/values'

const route = useRoute()

const isProfilePage = computed(() => route.name === 'profile')

const headerProps = computed(() => {
  return header[route.name]
})

const currentPage = computed(() => {
  if (route.name === 'post') {
    return '/feed'
  }
  return route.path
})

</script>

<template>
  <main class="layout" :class="{'layout_green': isProfilePage}">
    <main-header v-bind="headerProps"/>
    <slot />

    <bottom-bar style="margin-top: 20px;" :tabs="tabs" :active-tab="currentPage"/>
  </main>
</template>

<style lang="scss">
@import "@/assets/styles/layout.scss";
</style>
