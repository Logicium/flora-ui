<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {useFetch} from "@vueuse/core";
import {useCartStore} from "@/stores/CartStore";

const cartStore = useCartStore();
const quantity = ref(1);
const props = defineProps({ data: { type: Object, default: ()=>{}} })
const minus = function (){ if (quantity.value > 1) quantity.value--; }
const plus = function (){ quantity.value++; }


const buttonText = ref('ADD TO CART');
const toggleButton = ref(true);

const exists = function (id:number){
  return cartStore.cart.some(cartItem => cartItem.id === id);
}
const addCartItem = function(){
  let cartItem = Object.assign({},props.data);
  cartItem.quantity = quantity.value;
  cartItem.total = props.data.price * quantity.value;

  if(!exists(cartItem.id)){ cartStore.cart.push(cartItem); }
  else {
    const currentItem = cartStore.cart.find(cartItem => cartItem.id === props.data.id);
    currentItem.quantity += quantity.value;
    currentItem.total = currentItem.price * currentItem.quantity;
  }
  toggleButton.value = false;
  setTimeout(() => toggleButton.value = true, 1500);
}

</script>

<template>

  <div class="productCard">
    <div class="line"></div>
    <div class="price">${{data.price}}</div>
    <div class="description">{{data.description}}</div>
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
<!--    <div class="button" @click="addCartItem()">{{buttonText}}</div>-->
    <div class="buttonWrap">
      <div class="button" @click="addCartItem()">ADD TO CART</div>
      <Transition name="slide-up">
        <div v-if="!toggleButton" class="button">ITEM ADDED</div>
      </Transition>
    </div>
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
  margin-right: 1.5vw;
  margin-top: 1.5vw;
  line-height: 3vw;
  text-align: justify;
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
  font-size: 1.2vw;
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

.buttonWrap{
  width: 13vw;
  height: 3vw;
  position: relative;
  margin-top: 1.5vw;
  margin-left: 1.5vw;
  margin-bottom: 1.5vw;
  overflow: hidden;
}

.button{
  background-color: black;
  color: #f1f1f1;
  text-align: center;
  width: 13vw;
  height: 3vw;

  cursor: pointer;
  font-size: 1.2vw;
  align-content: center;
  font-weight: 500;
  position: absolute;
  z-index: 10;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}

.slide-up-enter-from {
  transform: translateY(3vw);
  opacity: 0;
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-3vw);
}
</style>