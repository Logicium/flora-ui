<script setup lang="ts">

import Footer from "../components/Footer.vue";
import SocialCard from "../components/cards/SocialCard.vue";
import InfoCard from "../components/cards/InfoCard.vue";
import NumberCard from "../components/cards/NumberCard.vue";
import ImageCard from "../components/cards/ImageCard.vue";

</script>

<template>
  <div class="grid">
    <div class="logout">
      <ImageCard title="PAGE NOT FOUND" image="/src/assets/images/flower12.jpg"/>
    </div>
    <InfoCard class="box"/>
    <NumberCard class="box" number="01" title="SUGGESTED"/>
    <InfoCard class="box"/>
    <SocialCard class="box" title="SHARE"/>
    <Footer/>
  </div>
</template>

<style scoped>

.logout{
  grid-row: 1/3;
  grid-column: 1/3;
  height: 36vw;
  background-color: #f1f1f1;
  text-align: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.2vw;
}

</style>