<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { usePostsStore } from '@/stores/post-store'
import type { Post } from '@/shared/types'

const route = useRoute()
const store = usePostsStore()

const postID = route.params.id as string
const post = ref<Post|null>(null)

const getPost = () => {
  post.value = store.getPostById(parseInt(postID))
}

onMounted(() => {
  getPost()
})
</script>

<template>
  <div class="wrapper">
    <div class="post-img"/>
    <div class="post-content">
      <h1 class="post-content__title">{{ post?.title }}</h1>
      <span class="post-content__author">{{ post?.author}}</span>
      <p class="post-content__content">{{ post?.longContent }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.post-img {
  width: 100%;
  height: 196px;
  border-radius: 8px;
  background-color: #f0f0f0;
}

.post-content {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__title {
    font-size: 24px;
    font-weight: 500;
    line-height: 29.05px;
    text-align: left;
    margin: 0;
  }

  &__author {
    font-size: 16px;
    font-weight: 600;
    line-height: 19.36px;
    text-align: left;

  }

  &__content {
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    text-align: left;
    color: #666666;
    margin: 0;
    margin-top: 8px;
  }
}
</style>
