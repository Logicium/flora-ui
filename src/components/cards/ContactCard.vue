<script setup lang="ts">

import {ref} from "vue";
import api from "@/router/api";

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const buttonText = ref('SEND MESSAGE');
const checkForm = function (e:any){
  //e.preventDefault();
}

const onSubmit = function (e:any){
  const form = e.target;
  const formData = new FormData(form);
  const entries = Object.fromEntries(formData.entries())
  fetch(form.action, {
    method: form.method,
    body: JSON.stringify(entries),
    headers: { "Content-Type": "application/json" }
  })
  buttonText.value = 'MESSAGE SENT';
  setTimeout(() => buttonText.value = "SEND MESSAGE", 1000);
}

</script>

<template>
  <form class="contactCard" id="contact"  @submit.prevent="onSubmit" :action="api.email.contact" method="post">
    <div class="line"/>
    <div class="title">CONTACT US</div>
    <input class="text" type="text" name="name" placeholder="your name" v-model="name"/>
    <input class="text" type="email" name="email" placeholder="your email" v-model="email"/>
    <input class="text" type="text" name="subject" placeholder="subject" v-model="subject"/>
    <textarea class="message" type="text" name="message" placeholder="message" v-model="message"/>
    <input type="submit" class="button" :value="buttonText"/>
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

}

.message{
  height: 12vw;
  flex: none;
  font-family: "Barlow",sans-serif;
  background-color: #f1f1f1;
  margin-top: auto;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-bottom: 1.5vw;
  font-size: 1vw;
  border: none;
  border-bottom: #b6b6b6 solid 2px;
  resize: none;
}

input.text{
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