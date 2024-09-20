<script setup lang="ts">

import router from "@/router";
import {computed} from "vue";

const props = defineProps({
  index: {type:Number},
  data: { type: Object, default: ()=>{}},
})
const imageUrl = computed(()=> 'url("'+props.data.image+'")').value;
const route = function (id:string){
  router.push(`/product/${id}`);
}

</script>

<template>
  <div class="checkoutCard">
    <div class="image" @click="route(data.id)"></div>
    <div class="product">{{data.name}}</div>
    <div class="price">${{data.price}}</div>
  </div>
</template>

<style scoped>

.checkoutCard{
  display: flex;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
  justify-content: space-between;
  align-items: center;
  height: 8vw;
}


.image{
  background-position: 100% 100%;
  background-size: cover;
  background-image: v-bind(imageUrl);
  width: 13vw;
  height: 100%;
  cursor: pointer;
}

</style>