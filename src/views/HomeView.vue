<script setup lang="ts">

import NumberCard from "../components/cards/NumberCard.vue";
import InfoCard from "../components/cards/InfoCard.vue";
import Footer from "../components/Footer.vue";
import Section1 from "../components/Section1.vue";
import ContactCard from "../components/cards/ContactCard.vue";
import SocialCard from "../components/cards/SocialCard.vue";
import ProductImageCard from "../components/cards/shop/ProductImageCard.vue";
import {useProductStore} from "../stores/ProductStore";

const productStore = useProductStore();

</script>

<template>
  <div v-if="!productStore.products">Loading... </div>
  <div v-else class="grid">
    <div class="banner"><Section1/></div>
    <div class="box"><NumberCard number="01" title='FLOWER CARDS'></NumberCard></div>
    <ProductImageCard class="box big" :data="productStore.products[0]"/>
    <ProductImageCard class="box big2" :data="productStore.products[1]"/>
    <ProductImageCard class="box" :data="productStore.products[2]"/>
    <ProductImageCard class="box" :data="productStore.products[3]"/>
    <ProductImageCard class="box" :data="productStore.products[4]"/>
    <ProductImageCard class="box" :data="productStore.products[5]"/>
    <div class="box"><NumberCard number="02" title='FLOWER SEEDS'></NumberCard></div>
    <ProductImageCard class="box" :data="productStore.products[6]"/>
    <ProductImageCard class="box" :data="productStore.products[7]"/>
    <InfoCard class="box" title="LOCATION" info="PO.256, Trinidad, CO 81082, United States"></InfoCard>
    <InfoCard class="box" title="EMAIL" info="sales@florashop.com"></InfoCard>
    <InfoCard class="box" title="PHONE" info="+1 720.000.0271"></InfoCard>
    <SocialCard class="box" title="SOCIAL"/>
    <ContactCard class="box big3"/>
    <Footer></Footer>
  </div>
</template>

<style scoped>

.banner{
  grid-row: 1 / 3;
  grid-column: 1 / 5;
}

.big{
  grid-row: 3 / 5;
  grid-column: 3 / 5;
}

.big2{
  grid-row: 5 / 7;
  grid-column: 1 / 3;
}

.big3{
  grid-row: 7 / 9;
  grid-column: 3 / 5;
}

</style>