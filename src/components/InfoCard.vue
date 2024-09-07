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
  height: 100%;
  font-weight: 500;
}

.line{
  background-color: black;
  height: 4px;
  width: 3vw;
  margin-left: 1.5vw;
  margin-top: 1.5vw;
}

.title {
  font-size: 1.3vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-top: 0.8vw;
}

.info{
  margin-top: auto;
  font-size: 1.1vw;
  margin-left: 1.5vw;
  margin-bottom: 1.5vw;
}

</style>