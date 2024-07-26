import { usePostsStore } from '@/stores/post-store'
import { ref } from 'vue'
import { Post } from '@/shared/types'

export const usePosts = () => {
  const store = usePostsStore()

  const page = ref<number>(1)
  const posts = ref<Post[]>([])

  const getPosts = () => {
    posts.value.push(...store.getPostByPage(page.value))
  }

  const nextPage = () => {
    if (page.value < store.maxPage) {
      page.value++
      getPosts()
    }
  }

  return {
    newPosts: store.newPosts(),
    posts,
    getPosts,
    nextPage
  }
}
