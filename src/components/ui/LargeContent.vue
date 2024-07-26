<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { Post } from '@/shared/types'
import { getPassedTime } from '@/shared/helpers'

defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true
  }
})

</script>

<template>
<div class="content">
  <div class="content__img"/>
  <div class="content__body">
    <h4 class="content__body_title">{{post.title}}</h4>
    <p class="content__body_text">{{post.content}}</p>
    <span class="content__body_info">{{ getPassedTime(post.time) }}</span>
  </div>
  <div class="content__footer">
    <div v-for="i in 3" :key="i" class="content__footer_item" :class="{'content__footer_item_active': i === 1}"/>
  </div>
</div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;

  &__img {
    width: 100%;
    height: 240px;
    background-color: #F6F6F6;
    border-radius: 8px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;

    &_title {
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-weight: 600;
      line-height: 19.36px;
      color: #000000;
    }

    &_text {
      margin: 0;
      padding: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      text-align: start;
      color: #000000;
    }

    &_info {
      margin: 0;
      padding: 0;
      font-size: 12px;
      font-weight: 400;
      line-height: 14.52px;
      color: #BDBDBD;
    }
  }

  &__footer {
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 8px;

    &_item {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #BDBDBD;
    }

    &_item_active {
      background-color: #5DB075;
    }
  }
}

</style>
