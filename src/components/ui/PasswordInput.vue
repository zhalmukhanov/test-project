<script setup lang="ts">
import { computed, defineProps, PropType, ref } from 'vue'
import StandartInput from '@/components/ui/StandardInput.vue'

defineProps({
  placeholder: {
    type: String as PropType<string>,
    required: false,
    default: ''
  }
})

const isPasswordVisible = ref(false)

const inputType = computed(() => isPasswordVisible.value ? 'text' : 'password')

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
  <div class="password">
    <standart-input
      :placeholder="placeholder"
      :type="inputType"
      class="password__input"
    />
    <span
      class="password__btn"
      @click="togglePasswordVisibility">
      {{ isPasswordVisible ? 'Hide' : 'Show' }}
    </span>
  </div>

</template>

<style scoped lang="scss">
.password {
  display: inline-block;
  position: relative;

  &__input {
    width: 100%;
  }
  &__btn {
    position: absolute;
    top: 14px;
    right: 16px;
    font-size: 16px;
    font-weight: 500;
    color: #5DB075;
    cursor: pointer;

    &:hover {
      color: #509a67;
    }
  }
}

</style>
