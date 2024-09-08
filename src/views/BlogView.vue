<script setup lang="ts">

import ImageCard from "@/components/cards/ImageCard.vue";
import NumberCard from "@/components/cards/NumberCard.vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import BannerCard from "@/components/cards/BannerCard2.vue";
import Footer from "@/components/Footer.vue";
import router from "@/router";

const route = function (id:string){
  router.push({ name: 'blog', params: { id } });
}

</script>

<template>
  <div class="grid">
    <div class="image1" @click="route('01')">
      <ImageCard image="/src/assets/images/flower3.jpg" title="NEW PLANT DROP THIS MONTH" price=""/>
    </div>
    <NumberCard class="box" number="07" title="09/07/2024"/>
    <InfoCard class="box" title="TAGS" info="#newplants #shippingdates #announcement"/>

    <div class="image2">
      <ImageCard image="/src/assets/images/flower4.jpg" title="HOW TO GROW DESERT ROSE" price=""/>
    </div>
    <NumberCard class="box" number="03" title="09/03/2024"/>
    <InfoCard class="box" title="TAGS" info="#plantcare #wateringguide #flowers"/>

    <div class="image3">
      <ImageCard image="/src/assets/images/flower5.jpg" title="ALL ORDERS SHIPPING NOW" price=""/>
    </div>
    <NumberCard class="box" number="21" title="08/21/2024"/>
    <InfoCard class="box" title="TAGS" info="#smallbusiness #shippingdates #announcement"/>

    <Footer/>

  </div>
</template>

<style scoped>

.image1{
  grid-row: 1/3;
  grid-column: 1/4;
}

.image2{
  grid-row: 3/5;
  grid-column: 1/4;
}

.image3{
  grid-row: 5/7;
  grid-column: 1/4;
}


.box{
  aspect-ratio: 1/1;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}


</style>