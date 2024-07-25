<script setup lang="ts">

import StandardInput from '@/components/ui/StandardInput.vue'
import PasswordInput from '@/components/ui/PasswordInput.vue'
import StandardButton from '@/components/ui/StandardButton.vue'
</script>

<template>
  <div class="wrapper">
    <div class="login-form">
      <standard-input placeholder="Email"/>
      <password-input placeholder="Password"/>
    </div>
    <div class="footer">
      <standard-button full-width>Log ISn</standard-button>
      <router-link :to="'/forgot-password'" class="link-text">Forgot your password?</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/login";
</style>'
