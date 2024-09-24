<script setup lang="ts">
import {useAuthStore} from "@/stores/AuthStore";
import Footer from "@/components/Footer.vue";
import router from "../../router";
import {useAccountStore} from "@/stores/AccountStore";
import OrderCard from "@/components/cards/shop/OrderCard.vue";
const authStore = useAuthStore();
const accountStore = useAccountStore();
console.log(accountStore.user);
const init = async function (){
  if(authStore.token) await accountStore.fill(authStore.token);
}
init();

</script>

<template>

  <div v-if="authStore.token" class="grid">
    <div class="orders">
      <div class="line"></div>
      <div class="title">YOUR ORDERS</div>
      <div class="headers">
        <div class="status">ORDER</div>
        <div class="date">DATE</div>
        <div class="items">ITEM(S)</div>
        <div class="total">TOTAL</div>
      </div>
      <div class="divider"></div>
      <div v-if="!accountStore.user.orders">NO ORDERS</div>
      <template v-else>
        <OrderCard v-for="order in accountStore.user.orders" :data="order"/>
      </template>
    </div>
    <Footer/>
  </div>
  <template v-else>
    {{router.push('/login')}}
  </template>

</template>

<style scoped>

.orders{
  grid-row: 1/3;
  grid-column: 1/5;
  height: auto;
  background-color: #f1f1f1;
  font-weight: 500;
  font-size: 1.2vw;
  padding-bottom: 1.5vw;
}

.title{
  margin-top: 0.8vw;
  margin-left: 1.5vw;
}

.headers{
  display: flex;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 3vw;
}

.status{
  width: 70%
}

.date{
  width: 10%;
}

.items {
  width: 10%;
  text-align: center;
}

.total{
  width: 10%;
  text-align: right;
}

</style>