<template>
  <div>
    <header-row />
    <about-me />
    <portfolio />
  </div>
</template>

<script setup>
import AboutMe from "./components/AboutMe.vue";
import HeaderRow from "./components/HeaderRow.vue";
import Portfolio from "./components/Portfolio.vue";
</script>

<style scoped>
body {
  height: 100vh;
}
:root {
}
</style>
