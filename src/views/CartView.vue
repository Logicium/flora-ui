<script setup lang="ts">

import SocialCard from "@/components/cards/SocialCard.vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import NumberCard from "@/components/cards/NumberCard.vue";
import Footer from "@/components/Footer.vue";
import CartCard from "@/components/cards/CartCard.vue";
import {useCartStore} from "@/stores/CartStore";

const cartStore = useCartStore();

const calcTotal = function (){
  return cartStore.cart.reduce((total,item)=>total+item.total,0)
}

</script>

<template>
  <div class="grid">
    <div class="cart">
      <div class="line"/>
      <div class="title">SHOPPING CART</div>
      <div class="headers">
        <div class="product">PRODUCT</div>
        <div class="price">PRICE</div>
        <div class="quantity">QUANTITY</div>
        <div class="total">TOTAL</div>
      </div>
      <div class="divider"></div>
      <div class="cartWrap">
        <CartCard v-for="(cartItem, index) in cartStore.cart" :data="cartItem"/>
        <div class="empty" v-if="calcTotal()==0">
          <div>CART IS EMPTY</div>
        </div>
      </div>
      <div class="divider" v-if="calcTotal()==0"></div>
      <div class="headers">
        <div class="finaltotal1">TOTAL</div>
        <div class="finaltotal2">${{calcTotal()}}</div>
      </div>
      <div class="button" v-if="calcTotal()>0">CHECKOUT</div>
    </div>
    <NumberCard class="box" number="01" title="SUGGESTED"/>
    <InfoCard class="box"/>
    <InfoCard class="box"/>
    <SocialCard class="box" title="SHARE"/>
    <Footer/>
  </div>
</template>

<style scoped>

.divider{
  height: 1px;
  background-color: #b6b6b6;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
}

.top{
  margin-top: auto;
}

.bottom{
  margin-top: auto;
  height: 1px;
  background-color: #b6b6b6;
  margin-bottom: 1.5vw;
}

.empty{
  height:16vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
  text-align: center;
  align-content: center;
}

.finaltotal1{
  width: 50%;
  margin-bottom: 3vw;
}

.finaltotal2{
  width: 50%;
  text-align: right;
}
.product{

}

.headers{
  display: flex;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
}

.product{
  width: 70%
}

.price{
  width: 10%;
}

.quantity {
  width: 10%;
  text-align: center;
}

.total{
  width: 10%;
  text-align: right;
}

.cart{
  grid-row: 1/3;
  grid-column: 1/5;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 1.2vw;
  flex: auto;
}

.title{
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-top: 0.8vw;
  margin-bottom: 1.5vw;
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