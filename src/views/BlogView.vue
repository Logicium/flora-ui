<script setup lang="ts">

import ImageCard from "@/components/ImageCard.vue";
import NumberCard from "@/components/NumberCard.vue";
import InfoCard from "@/components/InfoCard.vue";
import BannerCard from "@/components/BannerCard2.vue";
import Footer from "@/components/Footer.vue";
import router from "@/router";

const route = function (id:string){
  router.push({ name: 'blog', params: { id } });
}

</script>

<template>
  <div class="blogWrap">
    <div class="box image1" @click="route('01')">
      <BannerCard image="/src/assets/flower3.jpg" title="NEW PLANT DROP THIS MONTH" price=""/>
    </div>
    <NumberCard class="box" number="07" title="09/07/2024"/>
    <InfoCard class="box" title="DESCRIPTION"/>
    <InfoCard class="box" title="AUTHOR" info="Kisora Thomas"/>
    <InfoCard class="box" title="TAGS" info="#newplants #shippingdates #announcement"/>

    <div class="box image2">
      <BannerCard image="/src/assets/flower4.jpg" title="HOW TO GROW DESERT ROSE" price=""/>
    </div>
    <NumberCard class="box" number="03" title="09/03/2024"/>
    <InfoCard class="box" title="DESCRIPTION"/>
    <InfoCard class="box" title="AUTHOR" info="Kisora Thomas"/>
    <InfoCard class="box" title="TAGS" info="#plantcare #wateringguide #flowers"/>

    <div class="box image3">
      <BannerCard image="/src/assets/flower5.jpg" title="ALL ORDERS SHIPPING NOW" price=""/>
    </div>
    <NumberCard class="box" number="21" title="08/21/2024"/>
    <InfoCard class="box" title="DESCRIPTION"/>
    <InfoCard class="box" title="AUTHOR" info="Kisora Thomas"/>
    <InfoCard class="box" title="TAGS" info="#smallbusiness #shippingdates #announcement"/>

    <Footer/>

  </div>
</template>

<style scoped>

.blogWrap{
  width: 76vw;
  display: grid;
  grid-template-columns: repeat(4,16vw);
  grid-template-rows: 16vw;
  column-gap: 4vw;
  row-gap: 4vw;
}

.image1{
  grid-row: 1/3;
  grid-column: 3/5;
}

.image2{
  grid-row: 3/5;
  grid-column: 3/5;
}

.image3{
  grid-row: 5/7;
  grid-column: 3/5;
}


.box{
  aspect-ratio: 1/1;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}


</style>