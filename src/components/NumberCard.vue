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
    font-weight: 500;
    cursor: default;
  }
  .line{
    background-color: black;
    height: 4px;
    width: 3vw;
    margin-left: 1.4vw;
    margin-top: auto;
  }
  .number{
    text-align: right;
    font-size: 4vw;
    margin-right: 1.4vw;
  }
  .title {
    font-size: 1.2vw;
    text-align: left;
    margin-left: 1.4vw;
    margin-top:0.8vw;
    margin-bottom: 1.4vw;
  }
</style>