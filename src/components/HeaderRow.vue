<template>
  <div class="container">
    <div>
      <img src="../assets/headshot.jpg" alt="headshot" class="headshot" />
    </div>
    <div class="right-side-cover">
      <div class="name">Audie Raymos</div>
      <div class="title">Marketing and Design</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  max-height: 300px;
  background: var(--color-khaki);
  div {
    width: 100%;
  }
  .headshot {
    width: 100%;
    height: 100%;
    object-fit: cover; // crop
    object-position: 25% 25%; // centering the crop
  }
  .right-side-cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
  .name {
    padding-bottom: 1.5rem;
    font-size: 3em;
    line-height: 0.8em;
  }
  .title {
    font-size: 1.5em;
  }
}
</style>
