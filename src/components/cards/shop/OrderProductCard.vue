<script setup lang="ts">
import {computed, ref} from "vue";
import router from "@/router";
import {useCartStore} from "@/stores/CartStore";

const props = defineProps({
  data: { type: Object, default: ()=>{}},
})

console.log(props.data)

const route = function (id:string){
  router.push(`/product/${id}`);
}

const imageUrl = computed(()=> 'url("'+props.data.image+'")').value;

</script>

<template>

  <div class="cartCard">
    <div class="image" @click="route(data.id)"/>
    <div class="product">{{data.name}}</div>
    <div class="price">${{parseFloat(data.lineItem.price.unit_amount/100).toFixed(2)}}</div>
    <div class="quantity">
      {{data.lineItem.quantity}}
    </div>
    <div class="total">${{ parseFloat(data.lineItem.amount_subtotal/100).toFixed(2) }}</div>
  </div>
  <div class="divider"/>

</template>

<style scoped>

.cartCard{
  display: flex;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
  justify-content: space-between;
  align-items: center;
  height: 8vw;
}

.divider{
  height: 1px;
  background-color: #b6b6b6;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
}

input{
  width: 2vw;
  border: none;
  font-family: "Barlow",sans-serif;
  cursor: default;
  font-size: 1.2vw;
}

.image{
  background-position: 100% 100%;
  background-size: cover;
  background-image: v-bind(imageUrl);
  width: 13vw;
  height: 100%;
  cursor: pointer;
}

.product{
  width: 50%;
  margin-left: 1.5vw;
}

.price{
  width: 10%;
}

.total{
  width: 10%;
  text-align: right;
}

.quantity{
  justify-content: space-evenly;
  display: flex;
  width: 10%;
}

</style>