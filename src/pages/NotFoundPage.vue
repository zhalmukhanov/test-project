<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <h1>404</h1>
    <p>Page not found</p>
    <router-link :to="'/feed'">Go to Home</router-link>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 20px;

  h1 {
    font-size: 100px;
    margin: 0;
    margin-top: 100px;
  }

  p {
    margin: 0;
  }

  a {
    margin-top: 150px;
    color: #5DB075;
    text-decoration: none;
  }
}
</style>
