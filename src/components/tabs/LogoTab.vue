<template>
  <div>
    <div class="container">
      <div v-for="logo in logos" :key="logo.title" class="logo">
        <div class="title">{{ logo.title }}</div>
        <img class="image" :src="`images/${logo.src}.jpg`" :alt="logo.src" />
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = [
  { title: "Some Title", src: "headshot" },
  { title: "Another Title", src: "headshot" },
];
</script>

<style lang="scss" scoped>
.container {
  display: flex;

}
.logo {
  margin: 10px;
}
.image {
  width: 200px;
}
</style>
