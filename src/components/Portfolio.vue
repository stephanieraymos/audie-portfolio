<template>
  <div class="container">
    <div class="tabs">
      <span
        v-for="tab in tabs"
        :key="tab"
        @click="routeTabs(tab.route)"
        class="tab"
      >
        {{ tab.title }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
  { title: "Logos", route: "logos" },
  { title: "Maps", route: "maps" },
  { title: "Signs", route: "signs" },
  { title: "Social Media", route: "social" },
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
  padding: 4px;
  width: 60%;
  justify-content: space-around;
  text-decoration: underline;
}
</style>
