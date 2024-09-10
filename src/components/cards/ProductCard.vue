<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const quantity = ref(1);

const minus = function (){
  if (quantity.value > 1) quantity.value--;
}

const plus = function (){
  quantity.value++;
}

let data = ref({});
const route = useRoute()

onMounted(async () =>{
  try{
    const response = await fetch('http://localhost:3000/product/'+route.params.id)
    data = await response.json();
    console.log(data);
  }catch(error){
    console.log(error)
  }
})

</script>

<template>
  <div v-if="!data"> Loading... </div>
  <div v-else class="productCard">
    <div class="line"></div>
    <div class="price">{{data.price}}</div>
    <div class="description">{{data.description}}</div>
    <div class="quantity">QUANTITY</div>
    <div class="quantityWrap">
      <input type="number" :value="quantity" readonly="readonly"/>
      <div class="minus" @click="minus">-</div>
      <div class="plus" @click="plus">+</div>
    </div>
    <div class="button">ADD TO CART</div>
  </div>
</template>

<style scoped>

.productCard {
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  width: 100%;
}

.minus{
  height: 3vw;
  width: 4vw;
  border: solid black 1px;
  text-align: center;
  cursor: pointer;
  margin-left: -5px;
  animation: unfade 0.5s forwards;
}

.plus{
  height: 3vw;
  width:4vw;
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

input{
  width: 4vw;
  height: 3vw;
  border: none;
  font-family: "Barlow",sans-serif;
  cursor: default;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.quantityWrap{
  justify-content: space-evenly;
  display: flex;
}

.button{
  background-color: black;
  color: #f1f1f1;
  text-align: center;
  width: 13vw;
  height: 3vw;
  margin-top: auto;
  margin-left: 1.5vw;
  margin-bottom: 1.5vw;
  cursor: pointer;
  font-size: 1.2vw;
  align-content: center;
  font-weight: 500;
}

</style>