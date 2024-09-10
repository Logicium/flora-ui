<script setup lang="ts">

import router from "@/router";

const route = function (route:string){
  router.push(route);
}

</script>

<template>
  <div class="footer">
    <div class="title">©flora 2024. made by kisora thomas</div>
    <div class="content">
      <div class="text" @click="route('/blog')">blog</div>
      <div class="text" @click="route('/faqs')">faqs</div>
      <div class="text">orders</div>
      <div class="text" @click="route('/contact')">contact</div>
    </div>
  </div>
</template>

<style scoped>

.title{
  width:70%;
  align-self: center;
}

.text{
  cursor: pointer;
}

.content{
  justify-content: space-between;
  display: flex;
  width: 30%;
  align-self: center;
}

.footer{
  width: 76vw;
  height:6vw;
  display: flex;
  font-size: 1vw;
}
</style>