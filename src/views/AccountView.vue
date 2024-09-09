<script setup lang="ts">

import ImageCard from "@/components/cards/ImageCard.vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import NumberCard from "@/components/cards/NumberCard.vue";
import Footer from "@/components/Footer.vue";
import AddressCard from "@/components/cards/AddressCard.vue";
</script>

<template>
  <div class="grid">
    <div class="box title"><ImageCard title="ACCOUNT" image="/src/assets/images/flower7.jpg"/></div>
    <div class="box shipping"><AddressCard title="SHIPPING INFO"/></div>
    <div class="box billing"><AddressCard title="BILLING INFO"/></div>
    <InfoCard class="box click" title="YOUR ORDERS"/>
    <NumberCard class="box" title="# OF ORDERS" number="03"/>
    <InfoCard class="box click" title="CONTACT PREFERENCES"/>
    <InfoCard class="box click" title="LOGOUT"/>
    <Footer/>
  </div>
</template>

<style scoped>

.title{
  grid-row: 1/3;
  grid-column: 1/3;
}

.shipping{
  grid-row: 3/5;
  grid-column: 1/3;
}

.billing{
  grid-row: 3/5;
  grid-column: 3/5;
}

.box{
  aspect-ratio: 1/1;
  display: flex;
}

</style>