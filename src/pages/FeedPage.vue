<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { usePosts } from '@/composables/posts'

import SmallContent from '@/components/ui/SmallContent.vue'
import LargeContent from '@/components/ui/LargeContent.vue'
import SearchInput from '@/components/ui/SearchInput.vue'

const router = useRouter()
const { newPosts, posts, getPosts, nextPage } = usePosts()
const scrollComponent = ref(null)

const openPost = (id: number) => {
  router.push(`/post/${id}`)
}

const handleScroll = () => {
  const element = scrollComponent.value

  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    nextPage()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  getPosts()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="wrapper" ref="scrollComponent">
    <search-input placeholder="Search"/>
    <div class="posts">
      <small-content
        v-for="post in newPosts"
        :key="post.id"
        :post="post"
        @click="openPost(post.id)"
      />
    </div>

    <div class="posts">
      <large-content
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @click="openPost(post.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding-bottom: 100px;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
