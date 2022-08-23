<template>
  <div class="container">
    <div class="tabs">
      <!-- <span
        v-for="tab in tabs"
        :key="tab"
        @click="routeTabs(tab.route)"
        class="tab"
      > -->
      <router-link v-for="tab in tabs"
        :key="tab"
        @click="routeTabs(tab.route)"
        class="tab" :to="`${tab.route}`"> {{tab.title}} </router-link>
      <!-- </span> -->
    </div>

     <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
  { title: "Logos", route: "/logos" },
  { title: "Maps", route: "/maps" },
  { title: "Signs", route: "/signs" },
  { title: "Social Media", route: "/social-media" },
]);

function routeTabs(route) {
  return console.log("route", route);
}
</script>

<style lang="scss" scoped>
.container {
  background: var(--color-gray);
  height: 50vh;
}
.tabs {
  display: flex;
  margin: 0 auto;
  padding: 1rem;
  width: 60%;
  justify-content: space-around;
  text-decoration: underline;
}
</style>
