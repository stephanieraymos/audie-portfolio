<template>
  <div class="container">
    <div class="tabs">
      <span
        v-for="tab in tabs"
        :key="tab"
        @click="routeTabs(tab.component)"
        class="tab"
      >
        {{ tab.title }}
      </span>
    </div>

    <component :is="activeTab" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import LogoTab from "./tabs/LogoTab.vue";
import MapsTab from "./tabs/MapsTab.vue";
import SignsTab from "./tabs/SignsTab.vue";
import SocialMediaTab from "./tabs/SocialMediaTab.vue";

const tabs = ref([
  { title: "Logos", component: LogoTab },
  { title: "Maps", component: MapsTab },
  { title: "Signs", component: SignsTab },
  { title: "Social Media", component: SocialMediaTab },
]);
const activeTab = ref(null);

function routeTabs(component) {
  activeTab.value = component;
  console.log("component", component);
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
