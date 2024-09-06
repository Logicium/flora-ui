<script setup lang="ts">

import NumberCard from "../components/NumberCard.vue";
</script>

<template>
  <div class="wrapper">
    <div class="box image big"></div>
    <div class="box"><NumberCard number="01" title='f l o w e r s'></NumberCard></div>
    <div class="box image big2"></div>
    <div class="box image"></div>
    <div class="box image"></div>
    <div class="box image"></div>
    <div class="box image"></div>
    <div class="box"><NumberCard number="02" title='s e e d s'></NumberCard></div>
    <div class="box image"></div>
    <div class="box image"></div>
  </div>

</template>

<style scoped>

.wrapper{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4,20vw);
  grid-template-rows: 20vw;
  column-gap: 4vw;
  row-gap: 4vw;
}


.big{
  grid-row-start: 1;
  grid-row-end:3;
  grid-column-start: 3;
  grid-column-end: 5;
}

.big2{
  grid-row-start: 3;
  grid-row-end:5;
  grid-column-start: 1;
  grid-column-end: 3;
}

.box{
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image{
  background-image: url("../assets/flower5.jpg");
  background-position: 100% 100%;
  background-size: cover;
}

</style>