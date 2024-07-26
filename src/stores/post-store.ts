import { defineStore } from 'pinia'
import { posts } from '@/stores/values'
import { computed, ref } from 'vue'
import { Post } from '@/shared/types'

const NEW_POST_LIMIT = 5
const POSTS_PER_PAGE = 5

const usePostsStore = defineStore('posts', () => {
  const allPosts = ref<Post[]>(posts)
  const maxPage = computed<number>(() => Math.ceil((allPosts.value.length - NEW_POST_LIMIT) / POSTS_PER_PAGE))

  const newPosts = () => computed(() =>
    allPosts.value
      .sort((a, b) =>
        new Date(b.time).getTime() - new Date(a.time).getTime())
      .slice(0, NEW_POST_LIMIT))

  const getPostByPage = (page: number) => {
    const allPostWithoutNew = allPosts.value.slice(NEW_POST_LIMIT)

    const start = (page - 1) * POSTS_PER_PAGE
    const end = start + POSTS_PER_PAGE

    return allPostWithoutNew.slice(start, end)
  }

  const getPostById = (id: number) => {
    return allPosts.value.find(post => post.id === id)
  }

  return {
    newPosts,
    maxPage,
    getPostByPage,
    getPostById
  }
})

export { usePostsStore }
