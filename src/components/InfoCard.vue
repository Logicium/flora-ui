<script setup lang="ts">
defineProps(['title','info'])
</script>

<template>

  <div class="infoCard">
    <div class="line"></div>
    <div class="title">{{title}}</div>
    <div class="info">{{info}}</div>
  </div>

</template>

<style scoped>

.infoCard{
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: normal;
}

.line{
  background-color: black;
  height: 4px;
  width: 3vw;
  margin-left: 1vw;
  margin-top: 2vw;
}

.title {
  font-size: 1.3vw;
  text-align: left;
  margin-left: 1vw;
  margin-top: 1vw;
}

.info{
  margin-top: auto;
  font-size: 1.1vw;
  margin-left: 1vw;
  margin-bottom: 1vw;
}

</style>