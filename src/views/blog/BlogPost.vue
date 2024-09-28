<script setup lang="ts">

import ImageCard from "../../components/cards/ImageCard.vue";
import InfoCard from "../../components/cards/InfoCard.vue";
import NumberCard from "../../components/cards/NumberCard.vue";
import BannerCard from "../../components/cards/BannerCard2.vue";
import Footer from "../../components/Footer.vue";

const props = defineProps({
  image:  { type: String, default: '/images/flower3.jpg'},
  title:  { type: String, default: 'NEW PLANT DROP THIS MONTH' },
  body: { type: String, default: 'Article body' },
})

</script>

<template>
  <div class="grid">
    <div class="title"><BannerCard :image=image :title=title /></div>
    <NumberCard class="box" number="07" title="09/07/2024"/>
    <InfoCard class="box" title="DESCRIPTION"/>
    <InfoCard class="box" title="AUTHOR" info="Kisora Thomas"/>
    <InfoCard class="box" title="TAGS" info="#newplants #shippingdates #announcement"/>
    <div class="content"><InfoCard :info="body"/></div>
    <Footer/>
  </div>
</template>

<style scoped>

.title{
  aspect-ratio: 2/1;
  grid-row: 1/3;
  grid-column: 1/5;
  display: flex;
}

.content{
  aspect-ratio: 2/1;
  grid-row: 4/6;
  grid-column: 1/5;
  height: 100%;
  width: 100%;
  display: flex;
}

</style>