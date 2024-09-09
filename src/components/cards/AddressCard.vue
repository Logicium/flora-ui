<script setup lang="ts">

import { ref } from 'vue'
defineProps(['title'])
import data from "../../data/data";

const firstName = ref('');

</script>

<template>

  <div class="addressWrap">
    <div class="line"></div>
    <div class="title">{{title}}</div>
    <div class="inputWrap">
      <input placeholder="first name" v-model="firstName">
      <input placeholder="last name">
      <input placeholder="address 1">
      <input placeholder="address 2">
      <input placeholder="zipcode">
      <input placeholder="state" list="states"/>
      <datalist id="states">
        <option v-for="state in data.states" :key=state.label :value=state.value />
      </datalist>
      <input placeholder="email" type="email">
      <input placeholder="phone" type="tel">
    </div>
    <div class="buttonWrap"><div class="button">SAVE CHANGES</div></div>
  </div>
</template>

<style scoped>

.addressWrap{

  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  width: 100%;
}

input{
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  font-family: "Barlow",sans-serif;
  background-color: #f1f1f1;
  border: none;
  border-bottom: #b6b6b6 solid 2px;
  flex: 1;
}

.title {
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-top: 0.8vw;
  margin-bottom: 1.5vw;
  font-weight: 500;
}

.inputWrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 65%;
  margin-bottom: 1.5vw;
}

.buttonWrap{
  margin-top: auto;
  margin-bottom: 1.5vw;
}

.button{
  background-color: black;
  color: #f1f1f1;
  text-align: center;
  width: 13vw;
  height: 3vw;
  margin-top: auto;
  margin-left: 1.5vw;
  cursor: pointer;
  font-size: 1.2vw;
  align-content: center;
  font-weight: 500;
}

input:focus,
textarea:focus{
  animation: inputFocus 0.5s forwards;
}
input:not(:focus),textarea:not(:focus){
  animation: inputDefocus 0.5s forwards;
}

</style>