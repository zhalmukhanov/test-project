<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user-store'

import SmallContent from '@/components/ui/SmallContent.vue'

const store = useUserStore()
const { userPosts } = storeToRefs(store)
</script>

<template>
  <div class="wrapper">
    <small-content
      v-for="post in userPosts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
