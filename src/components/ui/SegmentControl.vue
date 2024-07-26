<script setup lang="ts">
import { computed, defineProps, PropType, ref, defineModel } from 'vue'
import { SegmentControlTab } from '@/shared/types'

const props = defineProps({
  tabs: {
    type: Array as PropType<SegmentControlTab[]>,
    required: true
  }
})

const modelValue = defineModel()
const tabCount = computed(() => {
  return props.tabs.length
})

const backStyle = computed(() => {
  const tabIndex = props.tabs.findIndex((tab) => tab.value === modelValue.value)
  return {
    width: `${100 / tabCount.value}%`,
    transform: `translateX(${100 * (tabIndex === -1 ? 0 : tabIndex)}%)`
  }
})
</script>

<template>
  <div>
    <div class="control">
      <div
        v-for="tab in tabs"
        :key="tab.value"
        class="control__item"
        :class="{'control__item_active': modelValue === tab.value}"
      >
        <input
          type="radio"
          name="segmentControl"
          :id="`tab-${tab.value}`"
          :value="tab.value"
          @change="modelValue = tab.value"
        >
        <label :for="`tab-${tab.value}`">
          <span>{{tab.name}}</span>
        </label>
      </div>

      <div
        class="control__back"
        :style="backStyle"
      />
    </div>
  </div>

</template>

<style scoped lang="scss">
input {
  display: none;
}
.control{
  height: 50px;
  position: relative;
  display: flex;
  border: 1px solid #E8E8E8;
  background-color: #F6F6F6;
  border-radius: 100px;

  &__item{
    flex: 1;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #BDBDBD;
    transition: all 0.3s;

    & label{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &_active{
      color: #5DB075;
    }
  }

  &__back{
    position: absolute;
    background-color: #ffffff;
    border-radius: 50px;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    transition: 0.3s;
  }
}

</style>
