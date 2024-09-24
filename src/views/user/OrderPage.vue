<script setup lang="ts">
import {useAuthStore} from "@/stores/AuthStore";
import {reactive, ref, watch} from "vue";
import {createFetch, useFetch} from "@vueuse/core";
import {useRoute} from "vue-router";
import Footer from "@/components/Footer.vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import router from "@/router";
import CartCard from "@/components/cards/shop/CartCard.vue";
import OrderProductCard from "@/components/cards/shop/OrderProductCard.vue";

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
const shipping = ref({});
const billing = ref({});
const payment = ref({});

const {isFetching,data} = fetchOrder('http://localhost:3000/order/'+route.params.id).json()
watch(data,(newData) => {
  loadedData.value = newData;
  shipping.value = (newData.shippingInfo);
  billing.value = (newData.billingInfo);
  payment.value = (newData.paymentMethod);
  let newProducts = [];
  for(let item of newData.lineItems){
    console.log(item);
    let newItem = newData.products.find( product => product.priceId.includes(item.price.id));
    newItem.lineItem = item;
    newProducts.push(newItem);
  }
  loadedData.value.products = newProducts;
})
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
        <OrderProductCard v-for="(product) in loadedData.products" :data="product"/>
      </div>

<!--      <div class="line"/>-->
      <div class="headers5">
        <div class="title">SHIPPING ADDRESS</div>
        <div class="addr"><div>Name</div><div>{{shipping.name}}</div></div>
        <div class="addr"><div>Address 1</div><div>{{shipping.address.line1}}</div></div>
        <div class="addr"><div>Address 2</div><div>{{shipping.address.line2}}</div></div>
        <div class="addr"><div>City</div><div>{{shipping.address.city}}</div></div>
        <div class="addr"><div>State</div><div>{{shipping.address.state}}</div></div>
        <div class="addr"><div>Zip</div><div>{{shipping.address.postal_code}}</div></div>
        <div class="addr"><div>Country</div><div>{{shipping.address.country}}</div></div>
        <div class="addr"><div>Email</div><div>{{shipping.email}}</div></div>
        <div class="addr"><div>Phone</div><div>{{shipping.phone}}</div></div>
      </div>
      <div class="divider"/>
      <div class="headers5">
        <div class="title">BILLING ADDRESS</div>
        <div class="addr"><div>Name</div><div>{{billing.name}}</div></div>
        <div class="addr"><div>Address 1</div><div>{{billing.address.line1}}</div></div>
        <div class="addr"><div>Address 2</div><div>{{billing.address.line2}}</div></div>
        <div class="addr"><div>City</div><div>{{billing.address.city}}</div></div>
        <div class="addr"><div>State</div><div>{{billing.address.state}}</div></div>
        <div class="addr"><div>Zip</div><div>{{billing.address.postal_code}}</div></div>
        <div class="addr"><div>Country</div><div>{{billing.address.country}}</div></div>
        <div class="addr"><div>Email</div><div>{{billing.email}}</div></div>
        <div class="addr"><div>Phone</div><div>{{billing.phone}}</div></div>
      </div>
      <div class="divider"/>
      <div class="headers3">
        <div>SHIPPING - FIRST CLASS MAIL - 3-5 BUSINESS DAYS</div>
        <div>${{parseFloat(loadedData.shippingCost/100).toFixed(2)}}</div>
      </div>
      <div class="headers3">
        <div>SUBTOTAL</div>
        <div>${{parseFloat(loadedData.subtotal/100).toFixed(2)}}</div>
      </div>
      <div class="headers3">
        <div>TAX</div>
        <div>${{parseFloat(loadedData.tax/100).toFixed(2)}}</div>
      </div>
      <div class="headers3">
        <div>TOTAL</div>
        <div>${{parseFloat(loadedData.total/100).toFixed(2)}}</div>
      </div>
      <div class="headers3">
        <div>PAYMENT</div>
        <div v-if="payment.type ==='card'">XXXX-XXXX-XXXX-{{payment.card.last4}}</div>
        <div v-else>{{payment.type.toUpperCase()}}</div>
      </div>
      <div class="button"><a :href="loadedData.receiptUrl">VIEW RECEIPT</a></div>
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

a{
  color: #f1f1f1;
  text-decoration: none;
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