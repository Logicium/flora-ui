<script setup lang="ts">

import Footer from "@/components/Footer.vue";

import {useProductStore} from "@/stores/ProductStore";

const productStore = useProductStore();

</script>

<template>

  <div class="grid">
    <div class="search">
      <div class="line"></div>
      <div class="title">SEARCH</div>
      <div class="inputWrap">
        <input type="text" placeholder="search here">
      </div>
      <div class="searchResults">
        {{productStore.products}}
      </div>
    </div>
    <Footer/>
  </div>

</template>

<style scoped>

.inputWrap{
  width: 100%;
  display: flex;
}
input{
  background-color: #f1f1f1;
  font-family: "Barlow",sans-serif;
  border: none;
  border-bottom: #b6b6b6 solid 2px;
  margin-top: 1.5vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  flex: 1;
}

.search{
  grid-row: 1/3;
  grid-column: 1/5;
  height: 36vw;
  background-color: #f1f1f1;
  font-weight: 500;
  font-size: 1.2vw;
}

.title{
  margin-top: 0.8vw;
  margin-left: 1.5vw;
}

</style>