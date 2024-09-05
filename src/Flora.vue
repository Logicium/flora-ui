<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Section1 from "@/components/Section1.vue";
import Section2 from "@/components/Section2.vue";
import Section3 from "@/components/Section3.vue";
</script>

<template>
<div class="webapp">
  <NavBar></NavBar>
  <Section1></Section1>
  <div class="row">
    <div class="sec2Col">
      <Section2></Section2>
    </div>
    <div class="sec3Col">
      <Section3></Section3>
    </div>
  </div>
  <div class="spacer"></div>
</div>
</template>

<style scoped>
.webapp{
  font-family: "Barlow",sans-serif;
}
.spacer{
  height: 800px;
}
.row{
  display: flex;
  align-items: center;
  margin: 2vw 0;
}
.sec2Col{
  display: flex;
  align-items: center;
  width: 50%;
}
.sec3Col{

  width: 50%;
}

</style>