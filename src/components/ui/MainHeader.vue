<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { MainHeaderLinks } from '@/shared/types'

defineProps({
  links: {
    type: Object as PropType<MainHeaderLinks>,
    required: false
  },
  title: {
    type: String as PropType<string>,
    required: true
  },
  display: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: true
  },
  light: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false
  }
})

</script>

<template>
  <div v-if="display" class="header" :class="{'header-light': light}">
    <span class="header__libk header__libk_left">
      <router-link
        v-if="links?.left"
        :to="links.left.link"
      >
        {{ links.left.name }}
      </router-link>
    </span>
    <span class="header__title">{{title}}</span>

    <span class="header__libk header__libk_right">
      <router-link
        v-if="links?.right"
        :to="links.right.link"
      >
        {{ links.right.name }}
      </router-link>
    </span>
  </div>
  <div v-else/>

</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  &__libk {
    width: 70px;
    display: flex;

    & a {
      font-size: 16px;
      font-weight: 500;
      line-height: 19.36px;
      text-align: left;
      text-decoration: none;
      color: #5DB075;
    }

    &_left {
      justify-content: start;

    }

    &_right {
      justify-content: end;
    }
  }

  &__title {
    font-size: 30px;
    font-weight: 600;
    line-height: 36.31px;
    text-align: center;
  }
}

.header-light {
   color: white;

  & a {
    color: white;
  }
}
</style>
