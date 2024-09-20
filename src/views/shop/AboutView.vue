<script setup lang="ts">

import InfoCard from "@/components/cards/InfoCard.vue";
import ImageCard from "@/components/cards/ImageCard.vue";
import Footer from "@/components/Footer.vue";
import NumberCard from "@/components/cards/NumberCard.vue";
import BannerCard from "@/components/cards/BannerCard.vue";
import data from "@/data/data";
import ParagraphCard from "@/components/cards/shop/ParagraphCard.vue";

</script>

<template>
  <div class="grid">
    <div class="titleWrap">
      <ParagraphCard class="box" title="HANDMADE CARDS WITH A STORY" :info="data.about"/>
    </div>
    <div class="imageWrap">
      <BannerCard title="ABOUT" image="/src/assets/images/flower5.jpg"/>
    </div>
    <NumberCard class="box" number="00" title="ZERO WASTE"/>
    <InfoCard class="box" title="LOCALLY GROWN FLOWERS PRESSED FOR ETERNITY"/>
    <InfoCard class="box" title="ECO-FRIENDLY AND SUSTAINABLE MATERIALS"/>
    <InfoCard class="box" title="UNIQUE GIFTS THAT CAPTURE THE BEAUTY OF NATURE"/>
    <Footer/>
  </div>
</template>

<style scoped>

.imageWrap{
  grid-row: 1/5;
  grid-column: 3/5;
}

.titleWrap{
  aspect-ratio: 1/1;
  grid-row: 3/5;
  grid-column: 1/3;
  white-space: pre-line;
}

</style>