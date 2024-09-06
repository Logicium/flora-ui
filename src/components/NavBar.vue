<script setup lang="ts">

import SearchIcon from "@/components/icons/SearchIcon.vue";
import ShopIcon from "@/components/icons/ShopIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
</script>

<template>
  <div class="navWrapper">
    <div class="navbar row">
      <div class="title">F L O R A</div>
      <div class="content">
        <div>B L O G</div>
        <div>A B O U T</div>
        <div>C O N T A C T</div>
        <div><SearchIcon></SearchIcon></div>
        <div><ShopIcon></ShopIcon></div>
        <div><UserIcon></UserIcon></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.navWrapper{
  position: fixed;
  top:0px;
  left:0px;
  width: 100%;
}

.title{
  width: 50%;
}

.content{
  justify-content: space-between;
  display: flex;
  width: 50%;
}

.navbar{
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  width: 92vw;
  height:6vw;
  font-size: 1.5vw;
  margin: 0 auto;
}


</style>