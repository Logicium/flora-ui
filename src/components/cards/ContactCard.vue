<script setup lang="ts">

import {ref} from "vue";

const fullname = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const checkForm = function (){

}

</script>

<template>
  <form class="contactCard" id="contact"  @submit="checkForm" action="http://localhost:3000/contact" method="post">
    <div class="line"></div>
    <div class="title">CONTACT US</div>
    <div class="inputWrap">
      <input class="text" type="text" placeholder="your name" v-model="fullname">
      <input class="text" type="email" placeholder="your email" v-model="email">
      <input class="text" type="text" placeholder="subject" v-model="subject">
      <textarea class="message" type="text" placeholder="message" v-model="message"/>
    </div>
    <input type="submit" class="button" value="SEND MESSAGE"/>
  </form>
</template>

<style scoped>

.contactCard{
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
}

.inputWrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  border-bottom: #b6b6b6 solid 2px;
  resize: none;
}

input.text,textarea{
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-bottom: 1.5vw;
  font-family: "Barlow",sans-serif;
  background-color: #f1f1f1;
  border: none;
  flex: 1;
  box-shadow: none;
  font-size: 1vw;
}

.text{
  border-bottom: #b6b6b6 solid 2px;
}

.button{
  background-color: black;
  color: #f1f1f1;
  text-align: center;
  width: 13vw;
  height: 3vw;
  margin-top: auto;
  margin-left: 1.5vw;
  margin-bottom: 1.5vw;
  font-family: "Barlow",sans-serif;
  border: none;
  cursor: pointer;
  font-size: 1.2vw;
  align-content: center;
  font-weight: 500;
}

.title {
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-top: 0.8vw;
  margin-bottom: 1.5vw;
  font-weight: 500;
}

input.text:focus,
textarea:focus{
  animation: inputFocus 0.5s forwards;
}
input.text:not(:focus),textarea:not(:focus){
  animation: inputDefocus 0.5s forwards;
}

</style>