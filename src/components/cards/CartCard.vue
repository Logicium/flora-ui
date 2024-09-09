<script setup lang="ts">
defineProps({
  data: { type: Object, default: ()=>{}},
})
const getTotal = function (price:number,quantity:number){
  return price * quantity;
}

</script>

<template>

  <div class="cartCard">
    <div class="product">{{data.name}}</div>
    <div class="price">${{data.price}}</div>
    <input type="number" class="quantity" :value="data.quantity"/>
    <div class="total">${{getTotal(data.price,data.quantity)}}</div>
  </div>

</template>

<style scoped>

.cartCard{
  display: flex;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
  justify-content: space-between;
}

.product{
  width: 50%;
}
.price{
  width: 15%;
}

</style>