<script setup lang="ts">
import { defineProps, PropType } from 'vue'

defineProps({
  label: {
    type: String as PropType<string>,
    required: false,
    default: ''
  }
})
</script>

<template>
  <label class="checkbox">
    <input type="checkbox">
    <span class="checkbox__checkmark">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
        <path d="M1 3.75L3.33333 6L7.3 0.75" stroke="#FFFFFF" stroke-linecap="round"/>
      </svg>
    </span>

    <span
      v-if="Boolean(label)"
      class="checkbox__label"
    >
      {{ label }}
    </span>
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &__checkmark {
    position: absolute;
    top: 2px;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #F6F6F6;
    border: solid 1px #E8E8E8;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
      transform: scale(1.3);
      display: none;
    }
  }

  & input:checked ~ .checkbox__checkmark {
    background-color: #5DB075;
    border-color: #4B9460;
    & svg {
      display: block;
      stroke: #FFFFFF;
    }
  }

  &__label {
    display: block;
    margin-left: 25px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #666666;
  }
}

</style>
