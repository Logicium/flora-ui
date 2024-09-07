<script setup lang="ts">

import {computed} from "vue";
import InfoCard from "@/components/InfoCard.vue";
import ImageCard from "@/components/ImageCard.vue";
import NumberCard from "@/components/NumberCard.vue";
import Footer from "@/components/Footer.vue";
import SocialCard from "@/components/SocialCard.vue";

const props = defineProps({
  image:  { type: String, default: '/src/assets/flower7.jpg'},
  title:  { type: String, default: 'PRODUCT 00' },
  price: { type: String, default: '$4' },
})
const imageUrl = computed(()=> 'url("'+props.image+'")').value;

</script>

<template>
  <div class="productWrap">
    <div class="nameWrap"><ImageCard :image=image :title=title /></div>
    <div class="priceWrap"><InfoCard/></div>
    <NumberCard class="box" number="01" title="RELATED"/>
    <InfoCard class="box"/>
    <InfoCard class="box"/>
    <SocialCard class="box" title="SHARE"/>
    <Footer/>
  </div>
</template>

<style scoped>

.productWrap{
  display: grid;
  grid-template-columns: repeat(4,16vw);
  grid-template-rows: 16vw;
  column-gap: 4vw;
  row-gap: 4vw;
  width: 76vw;
}

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