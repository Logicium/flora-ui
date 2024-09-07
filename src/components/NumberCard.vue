<script setup lang="ts">
defineProps(['number','title'])
</script>

<template>
  <div class="numberCard">
    <div class="number">{{number}}</div>
    <div class="line"></div>
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
  .line{
    background-color: black;
    height: 4px;
    width: 3vw;
    margin-left: 1vw;
    margin-top: auto;
  }
  .number{
    width: 100%;
    text-align: right;
    font-size: 5vw;
  }
  .title {
    font-size: 1.3vw;
    text-align: left;
    margin-left: 1vw;
    margin-top:1vw;
    margin-bottom: 1vw;
  }
</style>