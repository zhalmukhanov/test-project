<script setup lang="ts">
import { useUserStore } from '@/stores/user-store'
import { storeToRefs } from 'pinia'
import SmallContent from '@/components/ui/SmallContent.vue'
import LargeContent from '@/components/ui/LargeContent.vue'

const store = useUserStore()

const { userPhotos } = storeToRefs(store)
</script>

<template>
  <div class="wrapper">
    <large-content
      v-for="post in userPhotos"
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
