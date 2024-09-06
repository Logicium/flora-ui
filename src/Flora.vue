<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Section1 from "@/views/Section1.vue";
import Section2 from "@/views/Section2.vue";
import Section3 from "@/views/Section3.vue";
import GridView from "@/views/GridView.vue";
</script>

<template>
<div class="webapp">
  <NavBar></NavBar>
  <Section1></Section1>
  <div class="row">
    <GridView></GridView>
<!--    <div class="sec2Col column">-->
<!--      <Section2></Section2>-->
<!--    </div>-->
<!--    <div class="sec3Col column">-->
<!--      <Section3></Section3>-->
<!--    </div>-->
  </div>
</div>
</template>

<style scoped>
.webapp{
  width: 92vw;
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
.sec2Col{
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  aspect-ratio: 1/1;
}
.sec3Col{
  width: 50%;
}

</style>