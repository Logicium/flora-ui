<script setup lang="ts">
// @ts-ignore
import router from "@/router";
import {computed, ref} from "vue";
import {useCartStore} from "../../../stores/CartStore";

const props = defineProps({
  index: {type:Number},
  data: { type: Object, default: ()=>{}},
})

const cartStore = useCartStore();

const calcTotal = function (){
  props.data.total = props.data.price * props.data.quantity;
}

const plus = function (){
  props.data.quantity++;
  calcTotal();
}

const minus = function (){
  if(props.data.quantity>1){props.data.quantity--;}
  else{cartStore.cart.splice(props.index,1);}
  calcTotal();
}

const route = function (id:string){
  router.push(`/product/${id}`);
}

const imageUrl = computed(()=> 'url("'+props.data.image+'")').value;

</script>

<template>

  <div class="cartCard">
    <div class="image" @click="route(data.id)"/>
    <div class="product">{{data.name}}</div>
    <div class="price">${{data.price}}</div>
    <div class="quantity">
      <input type="number" :value="data.quantity" readonly="readonly"/>
      <div class="minus" @click="minus">-</div>
      <div class="plus" @click="plus">+</div>
    </div>
    <div class="total">${{ data.total }}</div>
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
.quantity{
  width: 10%;

}
.total{
  width: 10%;
  text-align: right;
}

.minus{
  width: 2vw;
  border: solid black 1px;
  text-align: center;
  cursor: pointer;
  margin-left: -5px;
  animation: unfade 0.5s forwards;
}

.plus{
  width:2vw;
  border: solid black 1px;
  border-left: none;
  text-align: center;
  cursor: pointer;
  margin-left: -5px;
  animation: unfade 0.5s forwards;
}

.plus:hover, .minus:hover{
  animation:fade 0.5s forwards;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.quantity{
  justify-content: space-evenly;
  display: flex;
}

</style>