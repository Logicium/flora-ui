<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {useFetch} from "@vueuse/core";

const quantity = ref(1);

const minus = function (){
  if (quantity.value > 1) quantity.value--;
}

const plus = function (){
  quantity.value++;
}

//let data = ref(null);
const route = useRoute()
const loadedData = ref(null);

const {isFetching, data} = useFetch('http://localhost:3000/product/'+route.params.id).json()
watch(data,(newData) => {
  loadedData.value = newData;
})

</script>

<template>

  <div v-if="!loadedData"> Loading... </div>
  <div v-else class="productCard">
    <div class="line"></div>
    <div class="price">$ {{loadedData.price}}</div>
    <div class="description">{{loadedData.description}}</div>
    <div class="quantity">QUANTITY</div>
    <div class="quantityWrap">
      <input type="number" :value="quantity" readonly="readonly"/>
      <div class="minus" @click="minus">
        <div>-</div>
      </div>
      <div class="plus" @click="plus">
        <div>+</div>
      </div>
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
  font-size: 1.2vw;
}

.price{
  margin-left: 1.5vw;
  margin-top: 1.5vw;
}

.description{
  margin-left: 1.5vw;
  margin-top: 1.5vw;
}

.quantity{
  margin-top: auto;
  margin-left: 1.5vw;
}

.minus{
  height: 3vw;
  width: 100%;
  border: solid black 1px;
  text-align: center;
  cursor: pointer;
  animation: unfade 0.5s forwards;
  align-content: center;
}

.plus{
  height: 3vw;
  width: 100%;
  border: solid black 1px;
  border-left: none;
  text-align: center;
  cursor: pointer;
  animation: unfade 0.5s forwards;
  align-content: center;
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
  margin-left: 1.5vw;
  margin-top: 1.5vw;
  width: 13vw;
  display: flex;
  justify-content: space-between;
}

.button{
  background-color: black;
  color: #f1f1f1;
  text-align: center;
  width: 13vw;
  height: 3vw;
  margin-top: 1.5vw;
  margin-left: 1.5vw;
  margin-bottom: 1.5vw;
  cursor: pointer;
  font-size: 1.2vw;
  align-content: center;
  font-weight: 500;
}

</style>