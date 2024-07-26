import { defineStore } from 'pinia'
import { posts, user as userVal } from '@/stores/values'
import { computed, ref } from 'vue'
import { Post, User } from '@/shared/types'

const useUserStore = defineStore('user', () => {
  const allPosts = ref<Post[]>(posts)
  const user = ref<User>(userVal)

  const userPosts = computed(() => {
    return allPosts.value
      .filter(post => post.authorId === user.value.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 5)
  })

  const userPhotos = computed(() => {
    return allPosts.value
      .filter(post => post.authorId === user.value.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
  })

  return {
    user,
    userPosts,
    userPhotos
  }
})

export { useUserStore }
