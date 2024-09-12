<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import {useProductStore} from "@/stores/ProductStore";

const productStore = useProductStore();
productStore.fill();

</script>

<template>
<div class="webapp">
  <NavBar/>
  <div class="row">
    <RouterView/>
  </div>
</div>
</template>

<style scoped>
.webapp{
  width: 76vw;
  font-family: "Barlow",sans-serif;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 6vw;
}
.row{
  display: flex;
  width: 80vw;
  margin: 4vw 0;
  aspect-ratio: 2/1;
}

</style>