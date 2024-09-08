<script setup lang="ts">

import {computed} from "vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import ImageCard from "@/components/cards/ImageCard.vue";
import NumberCard from "@/components/cards/NumberCard.vue";
import Footer from "@/components/Footer.vue";
import SocialCard from "@/components/cards/SocialCard.vue";

const props = defineProps({
  image:  { type: String, default: '/src/assets/images/flower7.jpg'},
  title:  { type: String, default: 'PRODUCT 00' },
  price: { type: String, default: '$4' },
})
const imageUrl = computed(()=> 'url("'+props.image+'")').value;

</script>

<template>
  <div class="grid">
    <div class="nameWrap"><ImageCard :image=image :title=title /></div>
    <div class="priceWrap"><InfoCard/></div>
    <NumberCard class="box" number="01" title="SUGGESTED"/>
    <InfoCard class="box"/>
    <InfoCard class="box"/>
    <SocialCard class="box" title="SHARE"/>
    <Footer/>
  </div>
</template>

<style scoped>

.nameWrap{
  aspect-ratio: 2/1;
  grid-row: 1/3;
  grid-column: 1/5;
  display: flex;
}

.priceWrap{
  aspect-ratio: 2/1;
  grid-row: 3/5;
  grid-column: 1/5;
  display: flex;
  background-color: #f1f1f1;
}

.box{
  aspect-ratio: 1/1;
  display: flex;
}

</style>