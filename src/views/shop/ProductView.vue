<script setup lang="ts">

import {ref, watch} from "vue";
import ImageCard from "../../components/cards/ImageCard.vue";
import NumberCard from "../../components/cards/NumberCard.vue";
import Footer from "../../components/Footer.vue";
import SocialCard from "../../components/cards/SocialCard.vue";
import ProductCard from "../../components/cards/shop/ProductCard.vue";
import {useRoute} from "vue-router";
import {useFetch} from "@vueuse/core";
import SuggestedCard from "../../components/cards/shop/SuggestedCard.vue";
import api from "@/router/api";

const route = useRoute()
const loadedData = ref(null);
const {isFetching, data} = useFetch(api.product+'/'+route.params.id).json()
watch(data,(newData) => {loadedData.value = newData;})

</script>

<template>
  <div v-if="!loadedData"> Loading... </div>
  <div v-else class="grid">
    <div class="nameWrap"><ImageCard :image=loadedData.image :title=loadedData.name /></div>
    <div class="priceWrap"><ProductCard :data="loadedData"/></div>
    <NumberCard class="box" number="01" title="SUGGESTED"/>
    <SuggestedCard class="box"/>
    <SuggestedCard class="box"/>
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

</style>