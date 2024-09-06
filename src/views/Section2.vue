<script setup lang="ts">

import NumberCard from "../components/NumberCard.vue";
</script>

<template>
  <div class="sec2row1">
    <div class="image top2"><NumberCard></NumberCard></div>
    <div class="image top"><img alt="" src="../assets/flower5.jpg"></div>
  </div>
  <div class="sec2row2">
    <div class="image left"><img alt="" src="../assets/flower4.jpg"></div>
    <div class="image right"><img alt="" src="../assets/flower6.jpg"></div>
  </div>
</template>

<style scoped>

.image.top2{
  aspect-ratio: 1/1;
  width: 50%;
  margin-bottom:2vw;
  margin-right:4vw;
}

.image.top{
  aspect-ratio: 1/1;
  width: 50%;
  margin-bottom:2vw;
  margin-right:4vw;
}

.image.left{
  aspect-ratio: 1/1;
  width: 50%;
  margin-right:4vw;
}

.image.right{
  aspect-ratio: 1/1;
  width: 50%;
  margin-right:4vw;
}

.sec2row1{
  width: 100%;
  display: flex;
  overflow-wrap: normal;
  aspect-ratio: 2/1;
}
.sec2row2{
  width: 100%;
  display: flex;
  overflow-wrap: normal;
  aspect-ratio: 2/1;
}
.sec2row2 img{
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

img{
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

</style>