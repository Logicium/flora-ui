<script setup lang="ts">
import Footer from "../components/Footer.vue";
import {useProductStore} from "../stores/ProductStore";
import ProductImageCard from "../components/cards/shop/ProductImageCard.vue";

import { ref, watch } from 'vue';
const searchQuery = ref('');
const productStore = useProductStore();
const searchResults = ref([]);

watch(searchQuery, (newQuery) => {
  searchResults.value = productStore.products.filter(
      product => product.name.toLowerCase().includes(newQuery.toLowerCase())
  );
});

</script>

<template>

  <div class="grid">
    <div class="search">
      <div class="line"></div>
      <div class="title">SEARCH</div>
      <div class="inputWrap">
        <input type="text" v-model="searchQuery">
      </div>
    </div>
    <template v-if="searchQuery">
      <ProductImageCard class="box" v-for="result in searchResults" :key="result.id" :data="result"/>
    </template>
    <Footer/>
  </div>

</template>

<style scoped>

.inputWrap{
  margin-top: auto;
  width: 100%;
  display: flex;
  margin-bottom: 1.5vw;
  position: relative;
}

input{
  background-color: #f1f1f1;
  font-family: "Barlow",sans-serif;
  font-size: 4vw;
  border: none;
  font-weight: 200;
  border-bottom: #b6b6b6 solid 2px;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  flex: 1;
}

.search{
  grid-row: 1/2;
  grid-column: 1/5;
  height: 16vw;
  background-color: #f1f1f1;
  font-weight: 500;
  font-size: 1.2vw;
  display: flex;
  flex-direction: column;
}

.title{
  margin-top: 0.8vw;
  margin-left: 1.5vw;
}

input:focus,
textarea:focus{
  animation: inputFocus 0.5s forwards;
}
input:not(:focus),textarea:not(:focus){
  animation: inputDefocus 0.5s forwards;
}


</style>