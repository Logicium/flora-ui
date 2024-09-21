<script setup lang="ts">

import {computed} from "vue";
import router from "@/router";

const props = defineProps({
  data: { type: Object, default: ()=>{}},
})

const imageUrl = computed(()=> 'url("'+props.data.products[0].image+'")').value;
const getDate = function (){
  return new Date(props.data.createdOn).toLocaleString();
}
const getItems = function(){
  let totalItems = 0;
  for(const product of props.data.products){
    console.log(product);
    totalItems += product.quantity;
  }
  return totalItems;
}

</script>

<template>
  <div class="orderCard">
    <div class="imageWrap"><div class="image" @click="router.push('/order/'+data.id)"></div></div>
    <div class="orderNum">ORDER #0{{data.id}}</div>
    <div class="status">{{data.status}}</div>
    <div class="date">{{getDate()}}</div>
    <div class="items">{{data.products.length}}</div>
    <div class="total">${{data.total / 100}}.00</div>
  </div>
  <div class="divider"></div>
</template>

<style scoped>

.orderCard{
  display: flex;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
  justify-content: space-between;
  align-items: center;
  height: 8vw;
}
.imageWrap{
  width: 20%;
  height: 100%;
}

.image{
  background-position: 100% 100%;
  background-size: cover;
  background-image: v-bind(imageUrl);
  width: 13vw;
  height: 100%;
  cursor: pointer;
}
.orderNum{
  width: 25%;
}
.status{
  width: 25%;
}

.items, .total, .date{
  width: 10%;
}

.items{
  text-align: center;
}

.total{
  text-align: right;
}

.divider{
  height: 1px;
  background-color: #b6b6b6;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
}

</style>