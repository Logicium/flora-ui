<script setup lang="ts">
import {computed, ref} from "vue";
import router from "@/router";

const props = defineProps({
  data: { type: Object, default: ()=>{}},
})

const quantity = ref(props.data.quantity);
const total = ref(props.data.price * props.data.quantity)

const calcTotal = function (){
  const newTotal = props.data.price * quantity.value;
  total.value = newTotal;
  props.data.total = newTotal;
}

const plus = function (){
  quantity.value++;
  calcTotal();
}

const minus = function (){
  if(quantity.value>0) quantity.value--;
  calcTotal();
}

const route = function (id:string){
  router.push(`/product/${id}`);
}

const imageUrl = computed(()=> 'url("'+props.data.image+'")').value;

</script>

<template>

  <div class="cartCard">
    <div class="image" @click="route(data.productId)"></div>
    <div class="product">{{data.name}}</div>
    <div class="price">${{data.price}}</div>
    <div class="quantity">
      <input type="number" :value="quantity" min="0" max="20"/>
      <div class="minus" @click="minus">-</div>
      <div class="plus" @click="plus">+</div>
    </div>
    <div class="total">${{ total }}</div>
  </div>
  <div class="divider"></div>

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

.quantity{
  justify-content: space-evenly;
  display: flex;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}


</style>