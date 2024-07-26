<script setup lang="ts">
import { useRouter } from 'vue-router'

import StandardInput from '@/components/ui/StandardInput.vue'
import StandardButton from '@/components/ui/StandardButton.vue'
import PasswordInput from '@/components/ui/PasswordInput.vue'
import StandardCheckbox from '@/components/ui/StandardCheckbox.vue'

const router = useRouter()

const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="wrapper">
    <div class="login-form">
      <standard-input placeholder="Name"/>
      <standard-input placeholder="Email"/>
      <password-input placeholder="Password"/>

      <standard-checkbox class="checkbox" label="I would like to receive your newsletter and other promotional information."/>
    </div>
    <div class="footer">
      <standard-button full-width @click="goToLogin()">Sign Up</standard-button>
      <router-link :to="'/forgot-password'" class="link-text">Forgot your password?</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/login.scss";
</style>'
