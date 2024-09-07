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
      <InfoCard class="box" title="HANDMADE CARDS WITH A STORY" info="Nestled in the heart of Trinidad, Colorado, our small business is dedicated to crafting unique and heartfelt handmade cards featuring pressed flowers grown right here in our community. Every bloom is lovingly pressed, preserving its delicate colors and textures for eternity.

      Each pressed flower tells a unique story, adding a special meaning to every card. A vibrant rose may symbolize love and passion, while a delicate daisy can represent innocence and purity. The symbolism of each flower is carefully considered to enhance the message you wish to convey.

      Whether you're sending a birthday greeting, expressing gratitude, or sharing a token of affection, our handmade creations offer a touch of natural elegance and warmth. We invite you to explore our collection and discover the perfect card to convey your message."/>
    </div>
    <div class="imageWrap">
      <BannerCard title="ABOUT" image="/src/assets/flower5.jpg"/>
    </div>
    <NumberCard class="box" number="00" title="ZERO WASTE"/>
    <InfoCard class="box" title="LOCALLY GROWN FLOWERS PRESSED FOR ETERNITY"/>
    <InfoCard class="box" title="ECO-FRIENDLY AND SUSTAINABLE MATERIALS"/>
    <InfoCard class="box" title="UNIQUE GIFTS THAT CAPTURE THE BEAUTY OF NATURE"/>
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
  white-space: pre-line;
}

.box{
  display: flex;
  aspect-ratio: 1/1;
}

</style>