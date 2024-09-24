<script setup lang="ts">
import {useAuthStore} from "@/stores/AuthStore";
import {ref, watch} from "vue";
import {createFetch, useFetch} from "@vueuse/core";
import {useRoute} from "vue-router";
import Footer from "@/components/Footer.vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import router from "@/router";
import CartCard from "@/components/cards/shop/CartCard.vue";

const route = useRoute();
const authStore = useAuthStore();
const loadedData = ref(null);

const fetchOrder = createFetch({
  options: {
    async beforeFetch({ options }) {
      options.headers.Authorization = `Bearer ${authStore.token}`
      return { options }
    }
  }
})
const {isFetching,data} = fetchOrder('http://localhost:3000/order/'+route.params.id).json()
watch(data,(newData) => {loadedData.value = newData;})
const getDate = function (){
  return new Date(loadedData.value.createdOn).toLocaleString();
}

</script>

<template>
  <div v-if="loadedData" class="grid">
    <div class="orderWrap">
      <div class="line"/>
      <div class="headers">
        <div class="title">ORDER #0{{loadedData.id}} - {{loadedData.status}}</div>
        <div class="date">{{getDate()}}</div>
      </div>

      <div class="headers2">
        <div class="product">PRODUCT</div>
        <div class="price">PRICE</div>
        <div class="quantity">QUANTITY</div>
        <div class="total">TOTAL</div>
      </div>
      <div class="divider"/>
      <div class="products">
        <CartCard v-for="(product) in loadedData.products" :data="product"/>
      </div>

      <div class="line"/>
      <div class="headers5">
        <div class="title">SHIPPING ADDRESS</div>
        <div class="addr"><div>First Name</div><div>Test</div></div>
        <div class="addr"><div>Last Name</div><div>Lastley</div></div>
        <div class="addr"><div>Address 1</div><div>123 First Street</div></div>
        <div class="addr"><div>Address 2</div><div>Apt 11</div></div>
        <div class="addr"><div>City</div><div>Trinidad</div></div>
        <div class="addr"><div>State</div><div>CO</div></div>
        <div class="addr"><div>Zip</div><div>10240</div></div>
        <div class="addr"><div>Country</div><div>United States</div></div>
        <div class="addr"><div>Email</div><div>test@gmail.com</div></div>
        <div class="addr"><div>Phone</div><div></div></div>
      </div>
      <div class="line"/>
      <div class="headers5">
        <div class="title">BILLING ADDRESS</div>
        <div class="addr"><div>First Name</div><div>Test</div></div>
        <div class="addr"><div>Last Name</div><div>Lastley</div></div>
        <div class="addr"><div>Address 1</div><div>123 First Street</div></div>
        <div class="addr"><div>Address 2</div><div>Apt 11</div></div>
        <div class="addr"><div>City</div><div>Trinidad</div></div>
        <div class="addr"><div>State</div><div>CO</div></div>
        <div class="addr"><div>Zip</div><div>10240</div></div>
        <div class="addr"><div>Country</div><div>United States</div></div>
        <div class="addr"><div>Email</div><div>test@gmail.com</div></div>
        <div class="addr"><div>Phone</div><div></div></div>
      </div>
      <div class="divider"/>
      <div class="headers3">
        <div class="finaltotal1">SHIPPING - FIRST CLASS MAIL - 3-5 BUSINESS DAYS</div>
        <div class="finaltotal2">$6.00</div>
      </div>
      <div class="headers3">
        <div class="finaltotal1">TOTAL</div>
        <div class="finaltotal2">${{loadedData.total/100}}.00</div>
      </div>
      <div class="headers3">
        <div class="finaltotal1">PAYMENT</div>
        <div class="finaltotal2">XXXX-XXXX-XXXX-4242</div>
      </div>
      <div class="button">VIEW RECEIPT</div>
    </div>

    <InfoCard class="box click" title="VIEW ORDERS" @click="router.push('/orders')"/>
    <InfoCard class="box click" title="TRACK ORDER"/>
    <InfoCard class="box click" title="CANCEL ORDER"/>
    <InfoCard class="box click" title="RETURN ORDER"/>
    <Footer/>
  </div>
</template>

<style scoped>

.orderWrap{
  display: flex;
  grid-row: 1/3;
  grid-column: 1/5;
  background-color: #f1f1f1;
  flex-direction: column;
  font-weight: 500;
  font-size: 1.2vw;
  flex: auto;
}

.addr{
  display: flex;
  justify-content: space-between;
}

.headers{
  display: flex;
  justify-content: space-between;
  margin-top: 0.8vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
}

.title{
  margin-bottom: 0.8vw;
}

.headers2{
  display: flex;
  margin-top: 3vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
}

.headers3{
  display: flex;
  justify-content: space-between;
  margin-top: 1.5vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
}

.headers4{
  display: flex;
  justify-content: space-between;
  margin: 1.5vw;
  margin-top: 3vw;
}

.headers5{
  display: flex;
  flex-direction: column;
  margin-top: 0.8vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
}

.shipping{
  width: 50%;
}

.billing{
  width: 50%;
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