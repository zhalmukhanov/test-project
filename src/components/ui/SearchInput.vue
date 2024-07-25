<script setup lang="ts">

import StandartInput from '@/components/ui/StandartInput.vue'
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
 <standart-input :placeholder="placeholder" full-rounded/>
</template>

<style scoped lang="scss">

</style>
