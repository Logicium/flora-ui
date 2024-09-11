<script setup lang="ts">

import ImageCard from "@/components/cards/ImageCard.vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="grid">
    <div class="box login"><ImageCard title="LOG IN" image="/src/assets/images/flower7.jpg"/></div>
    <div class="box loginForm"><InfoCard/></div>
    <div class="box signupForm"><InfoCard/></div>
    <div class="box signup"><ImageCard title="SIGN UP" image="/src/assets/images/flower6.jpg"/></div>
    <Footer/>
  </div>
</template>

<style scoped>

.login{
  grid-row: 1/3;
  grid-column: 1/3;
}

.loginForm{
  grid-row: 1/3;
  grid-column: 3/5;
}

.signupForm{
  grid-row: 3/5;
  grid-column: 1/3;
}

.signup{
  grid-row: 3/5;
  grid-column: 3/5;
}



</style>