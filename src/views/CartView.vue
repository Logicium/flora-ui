<script setup lang="ts">

import SocialCard from "@/components/SocialCard.vue";
import InfoCard from "@/components/InfoCard.vue";
import NumberCard from "@/components/NumberCard.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="cartWrap">
    <div class="cart">
      <div class="line"/>
      <div class="title">SHOPPING CART</div>
      <div class="headers">
        <div>PRODUCT</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
        <div>TOTAL</div>
      </div>
      <div class="divider"></div>
    </div>
    <NumberCard class="box" number="01" title="SUGGESTED"/>
    <InfoCard class="box"/>
    <InfoCard class="box"/>
    <SocialCard class="box" title="SHARE"/>
    <Footer/>
  </div>
</template>

<style scoped>
.cartWrap{
  display: grid;
  grid-template-columns: repeat(4,16vw);
  grid-template-rows: 16vw;
  column-gap: 4vw;
  row-gap: 4vw;
  width: 76vw;
}

.divider{
  height: 1px;
  background-color: #b6b6b6;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
}

.headers{
  display: flex;
  justify-content: space-between;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 1.5vw;
}

.cart{
  grid-row: 1/3;
  grid-column: 1/5;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  min-height: 36vw;
  font-weight: 500;
}

.title{
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-top: 0.8vw;
  margin-bottom: 1.5vw;
}

.box{
  aspect-ratio: 1/1;
  display: flex;
}

.line{
  background-color: black;
  height: 4px;
  width: 3vw;
  margin-left: 1.5vw;
  margin-top: 1.5vw;
}

</style>