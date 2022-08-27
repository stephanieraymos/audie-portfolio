<template>
  <div class="container">
    <div class="tabs">
      <span
        v-for="tab in tabs"
        :key="tab"
        @click="routeTabs(tab)"
        class="tab"
        :class="{ activeTab: tab.active }"
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

const tabs = ref([
  { title: "Logos", component: LogoTab, active: true },
  { title: "Maps", component: MapsTab, active: false },
  { title: "Signs", component: SignsTab, active: false },
]);
const activeTab = ref(LogoTab);

function routeTabs(tab) {
  tab.active = true;
  tabs.value.map((i) => {
    if (i !== tab) {
      i.active = false;
    }
  });
  activeTab.value = tab.component;
  console.log("component", tab);
}
</script>

<style lang="scss" scoped>
.container {
  background: var(--color-gray);
  // height: 50vh;
  padding-bottom: 2em;
}
.tabs {
  display: flex;
  margin: 0 auto 2em auto;
  width: 60%;
  justify-content: space-around;
}
.activeTab {
  background: var(--color-khaki);
  color: black;
}
.tab {
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
}
</style>
