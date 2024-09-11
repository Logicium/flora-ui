<script setup lang="ts">

import Footer from "@/components/Footer.vue";
</script>

<template>

  <div class="grid">
    <div class="search">
      <div class="line"></div>
      <div class="title">SEARCH</div>
    </div>
    <Footer/>
  </div>

</template>

<style scoped>

.search{
  grid-row: 1/3;
  grid-column: 1/5;
  height: 36vw;
  background-color: #f1f1f1;
  font-weight: 500;
  font-size: 1.2vw;
}

.title{
  margin-top: 0.8vw;
  margin-left: 1.5vw;
}

</style>