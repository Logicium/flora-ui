<script setup lang="ts">

import BannerCard from "@/components/cards/BannerCard.vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import Footer from "@/components/Footer.vue";
import data from "@/data/data";
import FaqCard from "@/components/cards/FaqCard.vue";

</script>

<template>

  <div class="grid">
    <div class="imageWrap">
      <BannerCard title="FAQS" image="/src/assets/images/flower11.jpg"/>
    </div>
    <div class="faqs1 box"><FaqCard title="GENERAL QUESTIONS" :data="data.faq.generalQs"/></div>
    <div class="faqs2 box"><FaqCard title="ORDERS & RETURNS" :data="data.faq.orderQs"/></div>
    <Footer></Footer>
  </div>

</template>

<style scoped>
.imageWrap{
  grid-row: 1/5;
  grid-column: 3/5;
}

.faqs1 {
  grid-row: 1/3;
  grid-column: 1/3;
}

.faqs2 {
  grid-row: 3/5;
  grid-column: 1/3;
}

</style>

