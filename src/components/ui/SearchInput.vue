<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import StandardInput from '@/components/ui/StandardInput.vue'

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
