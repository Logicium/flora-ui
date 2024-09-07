<script setup lang="ts">

</script>

<template>
  <div class="contactCard">
    <div class="line"></div>
    <div class="title">CONTACT US</div>
    <input type="text" placeholder="your name">
    <input type="email" placeholder="your email">
    <input type="text" placeholder="subject">
    <textarea type="text" placeholder="message" class="message"/>
    <div class="button">SEND MESSAGE</div>
  </div>
</template>

<style scoped>

.contactCard{
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.message{
  height: 12vw;
  flex: none;
  font-family: "Barlow",sans-serif;
  background-color: #f1f1f1;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-bottom: 1.5vw;
  border: none;
  border-bottom: black solid 2px;
  resize: none;
}

input{
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  font-family: "Barlow",sans-serif;
  background-color: #f1f1f1;
  border: none;
  border-bottom: black solid 2px;
  flex: 1;
  margin-bottom: 1vw;
}

.line{
  background-color: black;
  height: 4px;
  width: 3vw;
  margin-left: 1.5vw;
  margin-top: 1.5vw;
}

.button{
  background-color: black;
  color: #f1f1f1;
  text-align: center;
  width: 14vw;
  height: 3vw;
  margin-top: auto;
  margin-left: 1.5vw;
  margin-bottom: 1.5vw;
  cursor: pointer;
  font-size: 1.3vw;
  align-content: center;
  font-weight: 500;
}

.title {
  font-size: 1.3vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-top: 0.8vw;
  margin-bottom: 1.5vw;
  font-weight: 500;
}


</style>