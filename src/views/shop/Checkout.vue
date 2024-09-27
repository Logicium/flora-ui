<script setup lang="ts">

import Footer from "../../components/Footer.vue";
import {ref, onMounted, watch} from "vue";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutCard from "../../components/cards/shop/CheckoutCard.vue";
import {useCartStore} from "../../stores/CartStore";
// @ts-ignore
import router from "@/router";
import api from "@/router/api";

const cartStore = useCartStore();
initialize();

// Create a Checkout Session
async function initialize() {
  const stripe = await loadStripe("pk_test_51PyniU06xeklz4GneyDhf6oXawMJNXhtQWr56O6nMB6BQHMtln15gA55EFWlXdQw8hdSLmepkVpOVfTly52moTHV00kp0rL6wq");
  const fetchClientSecret = async () => {
    const response = await fetch(api.order.checkout, {
      method: "POST",
      body: JSON.stringify(cartStore.cart),
      headers: { "Content-Type": "application/json" }
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });
  checkout.mount('#checkout')
}

</script>

<template>
  <div class="grid">
    <div class="summaryWrap">
      <div class="line"></div>
      <div class="title">CHECKOUT</div>
      <div class="checkoutCardWrap"><CheckoutCard v-for="(cartItem,index) in cartStore.cart" :index="index" :data="cartItem"/></div>
      <div class="buttonWrap"><div class="button" @click="router.push('/cart')">BACK TO CART</div></div>
    </div>
    <div class="checkoutWrap">
      <div class="summary"></div>
      <div id="checkout"></div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>

.summaryWrap{
  display: flex;
  grid-column: 1/3;
  grid-row: span 2;
  background-color: #f1f1f1;
  font-weight: 500;
  font-size: 1.2vw;
  flex-direction: column;
  flex: auto;
}

.title{
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-top: 0.8vw;
  margin-bottom: 1.5vw;
  font-weight: 500;
}

.checkoutCardWrap{
  background-color: #f1f1f1;
}

.checkoutWrap{
  grid-row: 1/3;
  grid-column: 3/5;
  display: flex;
  flex-direction: column;
  flex: auto;
}

.buttonWrap{
  margin-top: auto;
  background-color: #f1f1f1;
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