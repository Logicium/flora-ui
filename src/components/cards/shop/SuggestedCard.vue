<script setup lang="ts">
import {computed} from "vue";
// @ts-ignore
import router from "@/router";
import {useProductStore} from "../../../stores/ProductStore";

const productStore = useProductStore();
const index = Math.floor(Math.random() * productStore.products.length);
const data = productStore.products[index];

const imageUrl = computed(()=> 'url("'+data.image+'")').value;
const id = data.id;
const click = function (){
  router.push({ name: 'product', params: { id } })
}

</script>

<template>
  <div class="image" style="{ 'background-image': 'url(\'' + require(image) + '\')' }" @click="click()">
    <div class="line"></div>
    <div class="title">{{data.name}}</div>
    <div class="price">${{data.price}}</div>
  </div>
</template>

<style scoped>

.image {
  background-position: 100% 100%;
  background-size: cover;
  background-image: v-bind(imageUrl);
  display: flex;
  flex-direction: column;
  align-items: normal;
  cursor: pointer;
  width:100%;
  height: 100%;
  font-weight: 500;
}

.title {
  font-size: 1.2vw;
  margin-left: 1.5vw;
  text-align: left;
  margin-top: 0.8vw;
}

.price{
  margin-top: auto;
  margin-left: 1.5vw;
  margin-bottom: 1.5vw;
}

</style>