<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { MainHeaderLinks } from '@/shared/types'

defineProps({
  links: {
    type: Object as PropType<MainHeaderLinks>,
    required: true
  },
  text: {
    type: String as PropType<string>,
    required: true
  }
})

</script>

<template>
  <div class="header">
    <router-link class="header__libk" :to="links.right.link">Home</router-link>
    <span class="header__title">{{text}}</span>
    <router-link class="header__libk" :to="links.left.link">About</router-link>
  </div>

</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  &__libk {
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    text-align: left;
    text-decoration: none;
    color: #5DB075;
  }

  &__title {
    font-size: 30px;
    font-weight: 600;
    line-height: 36.31px;
    text-align: center;
  }
}
</style>
