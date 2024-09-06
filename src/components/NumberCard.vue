<script setup lang="ts">
defineProps(['number','title'])
</script>

<template>
  <div class="numberCard">
    <div class="number">{{number}}</div>
    <div class="title">{{title}}</div>
  </div>
</template>

<style scoped>
  .numberCard{
    width: 100%;
    height: 100%;
    border: solid black 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .number{
    width: 100%;
    text-align: right;
    font-size: 8vw;
  }
  .title {
    font-size: 2vw;
    text-align: left;
    margin-top: auto;
  }
</style>