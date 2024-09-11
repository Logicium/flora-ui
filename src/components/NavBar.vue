<script setup lang="ts">

import SearchIcon from "@/assets/icons/SearchIcon.vue";
import ShopIcon from "@/assets/icons/ShopIcon.vue";
import UserIcon from "@/assets/icons/UserIcon.vue";
import router from "../router";
import {useCartStore} from "@/stores/CartStore";

const cartStore = useCartStore();
const route = function (route:string){
  router.push(route);
}

</script>

<template>
  <div class="navWrapper">
    <div class="navbar row">
      <div class="title">
        <div class="text" @click="route('/')">F L O R A</div>
      </div>
      <div class="content">
        <div class="text" @click="route('/blog')">B L O G</div>
        <div class="text" @click="route('/about')">A B O U T</div>
        <div class="text" @click="route('/contact')">C O N T A C T</div>
        <div class="icon" @click="route('/search')"><SearchIcon/></div>
        <div class="icon" @click="route('/cart')">
          <div v-if="cartStore.cart.length>0" class="indicator"/><ShopIcon/>
        </div>
        <div class="icon" @click="route('/account')"><UserIcon/></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.navWrapper{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  background-color: white;
  z-index: 10;
}

.text{
  align-self: center;
  cursor: pointer;
  display: inline-block;
}

.indicator{
  height: 0.5vw;
  width: 0.5vw;
  background-color: black;
  position: absolute;
  top:50%;
  transform: translateX(200%);
}

.indicatorWrap{
  position: relative;
  width: 30%;
}
.title{
  width: 50%;
}

.icon{
  cursor: pointer;
}

.content{
  justify-content: space-between;
  display: flex;
  width: 50%;
}

.navbar{
  position: relative;
  display: flex;
  align-items: center;
  width: 76vw;
  height:6vw;
  font-size: 1.2vw;
  margin: 0 auto;
  font-weight: 500;
}


</style>