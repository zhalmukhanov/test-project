<script setup lang="ts">

import { defineProps, PropType } from 'vue'
import { BottomBarTab } from '@/shared/types'

defineProps({
  tabs: {
    type: Array as PropType<BottomBarTab[]>,
    required: true
  },
  activeTab: {
    type: String as PropType<string>,
    required: true
  }
})

</script>

<template>
  <div class="wrapper">
    <div class="bottom-bar">
      <router-link
        v-for="tab in tabs"
        :key="tab.link"
        :to="tab.link"
        class="bottom-bar__tab"
        :class="{ 'bottom-bar__tab_active': tab.link === activeTab }"
      />
    </div>
  </div>

</template>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.bottom-bar {
  background-color: #FAFAFA;
  height: 83px;
  padding-top: 14px;

  display: flex;
  justify-content: space-around;

  &__tab {
    background-color: #E8E8E8;
    height: 32px;
    width: 32px;
    border-radius: 50%;

    &_active {
      background-color: #5DB075;
    }
  }
}
</style>
