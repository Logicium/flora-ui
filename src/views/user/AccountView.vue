<script setup lang="ts">

import ImageCard from "@/components/cards/ImageCard.vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import NumberCard from "@/components/cards/NumberCard.vue";
import Footer from "@/components/Footer.vue";
import AddressCard from "@/components/cards/user/AddressCard.vue";
import router from "@/router";
import PrefsCard from "@/components/cards/user/PrefsCard.vue";
import {useAccountStore} from "@/stores/AccountStore";
import LoginView from "@/views/user/LoginView.vue";
import {ref, watch} from "vue";
import {useFetch} from "@vueuse/core";
import {useAuthStore} from "@/stores/AuthStore";

const authStore = useAuthStore();
const accountStore = useAccountStore();
const orderCount = ref(0);

console.log(accountStore.user);
console.log(authStore.token);

const init = async function (){
  if(authStore.token) {
    await accountStore.fill(authStore.token);
    orderCount.value = accountStore.user.orders.length;
  }
}
init();
const route = function (route:string){
  router.push(route);
}


</script>

<template>
  <div v-if="authStore.token" class="grid">
    <div class="box title"><ImageCard title="ACCOUNT" image="/src/assets/images/flower10.jpg"/></div>
    <div class="box shipping"><AddressCard title="SHIPPING INFO"/></div>
    <div class="box billing"><AddressCard title="BILLING INFO"/></div>
    <InfoCard class="box click" @click="route('/orders')" title="YOUR ORDERS"/>
    <NumberCard class="box" title="# OF ORDERS" :number="'0'+orderCount"/>
    <PrefsCard class="box" :data="accountStore"/>
    <InfoCard class="box click" @click="route('/logout')" title="LOGOUT"/>
    <Footer/>
  </div>
  <template v-else>
    {{router.push('/login')}}
  </template>
</template>

<style scoped>

.title{
  grid-row: 1/3;
  grid-column: 1/3;
}

.shipping{
  grid-row: 3/5;
  grid-column: 1/3;
}

.billing{
  grid-row: 3/5;
  grid-column: 3/5;
}

.box{
  aspect-ratio: 1/1;
  display: flex;
}

</style>