<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { ButtonType } from '@/shared/types'

defineProps({
  color: {
    type: String as PropType<ButtonType>,
    default: 'primary'
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})

</script>

<template>
  <button
    class="button"
    :class="`button_${color}`"
    type="button"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  border: none;
  padding: 16px 32px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;
  text-align: center;
  transition: all 0.2s, color 0.2s;

  &_primary {
    background-color: #5DB075;
    color: #FFFFFF;
  }

  &_secondary {
    background-color: #F6F6F6;
    color: #4B9460;
  }

  &:hover {
    background-color: #4A8C68;
    color: #FFFFFF;
  }

  &:disabled {
    background-color: #F6F6F6;
    color: #BDBDBD;
  }
}

</style>
