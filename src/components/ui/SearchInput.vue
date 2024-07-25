<script setup lang="ts">
import StandardInput from '@/components/ui/StandardInput.vue'
import { defineProps, PropType } from 'vue'

defineProps({
  placeholder: {
    type: String as PropType<string>,
    required: false,
    default: ''
  }
})
</script>

<template>
 <standard-input :placeholder="placeholder" full-rounded/>
</template>

<style scoped lang="scss">

</style>
