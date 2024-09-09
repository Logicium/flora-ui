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
  font-weight: 500;
  width: 100%;
}

.title {
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 0.8vw;
}

.info{
  max-height:100%;
  font-size: 1vw;
  margin-top: auto;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-bottom: 1.5vw;
}

</style>