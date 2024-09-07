<script setup lang="ts">

import InfoCard from "@/components/InfoCard.vue";
import ImageCard from "@/components/ImageCard.vue";
import Footer from "@/components/Footer.vue";
import NumberCard from "@/components/NumberCard.vue";
import BannerCard from "@/components/BannerCard.vue";
</script>

<template>
  <div class="aboutWrap">
    <div class="titleWrap">
      <InfoCard title="Flora is a company based out of Trinidad, CO."/>
    </div>
    <div class="imageWrap">
      <BannerCard title="ABOUT" image="/src/assets/flower5.jpg"/>
    </div>
    <NumberCard class="box" number="01" title="HANDMADE"/>
    <InfoCard class="box" title="About text"/>
    <InfoCard class="box" title="About text"/>
    <InfoCard class="box" number="02" title="ZERO WASTE"/>
    <Footer/>

  </div>
</template>

<style scoped>

.aboutWrap{
  width: 76vw;
  display: grid;
  grid-template-columns: repeat(4,16vw);
  grid-template-rows: 16vw;
  column-gap: 4vw;
  row-gap: 4vw;
}

.imageWrap{
  grid-row: 1/5;
  grid-column: 3/5;
}

.titleWrap{
  aspect-ratio: 1/1;
  grid-row: 3/5;
  grid-column: 1/3;
}

.box{
  display: flex;
  aspect-ratio: 1/1;
}

</style>