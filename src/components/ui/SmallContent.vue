<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { Content } from '@/shared/types'
import { getPassedTime } from '@/shared/helpers'


defineProps({
  content: {
    type: Object as PropType<Content>,
    required: true
  }
})
</script>

<template>
<div class="content">
  <div class="content__img"/>
  <div class="content__body">
    <div class="content__body_header">
      <h4 class="content__body_header_title">{{ content.title }}</h4>
      <span class="content__body_header_info">{{ getPassedTime(content.time) }}</span>
    </div>
    <p class="content__body_text">{{ content.text }}</p>
  </div>
</div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: start;
  gap: 16px;

  &__img {
    min-width: 50px;
    height: 50px;
    background-color: #F6F6F6;
    border-radius: 8px;
  }

  &__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid #E8E8E8;

    &_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;

      &_title {
        padding: 0;
        margin: 0;

        font-size: 16px;
        font-weight: 600;
        line-height: 19.36px;
        text-align: left;
      }

      &_info {
        font-size: 14px;
        font-weight: 400;
        line-height: 16.94px;
        text-align: right;

        color: #BDBDBD;
      }
    }

    &_text {
      padding: 0;
      padding-right: 8px;
      margin: 0;

      font-size: 14px;
      font-weight: 400;
      line-height: 16.94px;
      text-align: left;

      color: #000000;
    }
  }
}
</style>
