<script setup lang="ts">
import { defineProps, PropType } from 'vue'

defineProps({
  fullRounded: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false
  },
  placeholder: {
    type: String as PropType<string>,
    required: false,
    default: ''
  }
})
</script>

<template>
  <input
    type="text"
    class="input"
    :class="{ 'input_full-rounded': fullRounded }"
    :placeholder="placeholder"
  />
</template>

<style scoped lang="scss">
.input {
  box-sizing: border-box;
  height: 50px;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 10px;
  text-align: left;
  color: #6a6a6a;
  background-color: #F6F6F6;

  &::placeholder {
    color: #BDBDBD;
  }

  &:focus {
    outline-color: #5DB075;
  }

  &_full-rounded {
    border-radius: 100px;
  }
}
</style>
