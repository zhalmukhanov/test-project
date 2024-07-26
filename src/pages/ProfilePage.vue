<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user-store'
import { storeToRefs } from 'pinia'

import SegmentControl from '@/components/ui/SegmentControl.vue'
import ProfilePosts from '@/components/profile/ProfilePosts.vue'
import ProfilePhoto from '@/components/profile/ProfilePhoto.vue'

import { SegmentControlTab } from '@/shared/types'

const segmentControlTabs: SegmentControlTab[] = [
  {
    name: 'Posts',
    value: '1'
  },
  {
    name: 'Photos',
    value: '2'
  }
]

const store = useUserStore()
const { user } = storeToRefs(store)

const tab = ref<string>('1')

const contentComponent = computed(() => {
  switch (tab.value) {
    case '1':
      return ProfilePosts
    case '2':
      return ProfilePhoto
    default:
      return ProfilePosts
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="header-bg"/>
    <div class="img img_wrapper">
      <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqN0Y9C1KZL_s4xm-l4uAJUEjF9jq5Wt8YzRGLs8dBSuTG5wXi" alt="profile image" class="img img_profile">
    </div>
    <div class="content">
      <div class="content__header">
        <h1 class="content__header_name">{{ user.name }}</h1>
        <p class="content__header_goals">{{ user.goals }}</p>
      </div>
      <div class="content__body">
        <segment-control
          v-model="tab"
          :tabs="segmentControlTabs"
        />
        <component :is="contentComponent"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}

.header-bg {
  position: absolute;
  width: 100%;
  height: 200px;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #5DB075;
}
.img {
  &.img_wrapper {
    box-sizing: border-box;
    width: 158px;
    height: 158px;

    background-color: #ffffff;
    border-radius: 50%;
    border: 4px solid #ffffff;
    overflow: hidden;
    box-shadow: 0 4px 20px 0 rgba(101, 101, 101, 0.15);
  }
}

.content {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &_name {
      font-size: 30px;
      font-weight: 600;
      line-height: 36.31px;
      text-align: center;
      margin: 0;
    }

    &_goals {
      font-size: 16px;
      font-weight: 600;
      line-height: 19.36px;
      text-align: center;
      margin: 0;
    }
  }

  &__body {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
