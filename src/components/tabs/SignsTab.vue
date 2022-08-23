<template>
  <div>
    <div class="container">
      <div v-for="sign in signs" :key="sign.title" class="sign">
        <div class="title">{{ sign.title }}</div>
        <img class="image" :src="`images/${sign.src}.jpg`" :alt="sign.src" />
      </div>
    </div>
  </div>
</template>

<script setup>
const signs = [
  { title: "Some Title", src: "headshot" },
  { title: "Another Title", src: "headshot" },
];
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.sign {
  margin: 10px;
}
.image {
  width: 200px;
}
</style>
