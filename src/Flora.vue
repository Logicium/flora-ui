<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import {useProductStore} from "@/stores/ProductStore";
import Footer from "@/components/Footer.vue";

const productStore = useProductStore();
productStore.fill();

</script>

<template>
<div class="webapp">
  <NavBar/>
  <div class="row">
<!--    <transition name="fade">-->
<!--      <RouterView/>-->
<!--    </transition>-->

    <RouterView v-slot="{ Component, route }" appear>
      <transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </RouterView>

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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.row{
  display: flex;
  width: 80vw;
}

</style>