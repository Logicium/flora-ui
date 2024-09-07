<script setup lang="ts">

import SearchIcon from "../components/icons/SearchIcon.vue";
import ShopIcon from "../components/icons/ShopIcon.vue";
import UserIcon from "../components/icons/UserIcon.vue";
import router from "../router";

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
        <div class="icon"><SearchIcon></SearchIcon></div>
        <div class="icon"><ShopIcon></ShopIcon></div>
        <div class="icon"><UserIcon></UserIcon></div>
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
}

.text{
  align-self: center;
  cursor: pointer;
  display: inline-block;
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
  display: flex;
  align-items: center;
  width: 76vw;
  height:6vw;
  font-size: 1.2vw;
  margin: 0 auto;
  font-weight: 500;
}


</style>