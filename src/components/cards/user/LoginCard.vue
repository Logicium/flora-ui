<script setup lang="ts">

import {useAccountStore} from "@/stores/AccountStore";
import router from "@/router";
import {ref} from "vue";
import {useAuthStore} from "@/stores/AuthStore";
const accountStore = useAccountStore();
const authStore = useAuthStore();
const buttonText = ref('LOG IN');

const onSubmit = function (e:any){
  const form = e.target;
  const formData = new FormData(form);
  const entries = Object.fromEntries(formData.entries())
  fetch(form.action, {
    method: form.method,
    body: JSON.stringify(entries),
    headers: { "Content-Type": "application/json" }
  }).then(async response => {
    if (response.status != 200) {
      buttonText.value = 'INVALID INPUT';
      setTimeout(() => buttonText.value = "LOG IN", 2000);
    } else {
      const json = await response.json();
      authStore.token = json.token;
      await accountStore.fill(json.token);
      await router.push('/account');
    }
  })
}

</script>

<template>
<form class="loginCard" id="login" @submit.prevent="onSubmit" action="http://localhost:3000/auth/login" method="post">
  <div class="line"/>
  <div class="inputWrap">
    <input name="email" placeholder="email" type="email">
    <input name="password" placeholder="password" type="password">
    <div class="forgot">forgot password?</div>
  </div>
  <div class="buttonWrap"><input type="submit" class="button" :value="buttonText"/></div>
</form>
</template>

<style scoped>

.loginCard{
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
}

.forgot{
  margin-left: 1.5vw;
  color: #b6b6b6;
  margin-top: 1.5vw;
  font-size: 1vw;
  cursor: pointer;
}

.inputWrap{
  display: flex;
  flex-direction: column;
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
  border: none;
  font-family: "Barlow",sans-serif;
}

input:not([type="submit"]){
  margin-top: 1.5vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  border: none;
  background-color: #f1f1f1;
  font-family: "Barlow",sans-serif;
  border-bottom: #b6b6b6 solid 2px;
  font-size: 1vw;
}

input:not([type="submit"]):focus,
textarea:focus{
  animation: inputFocus 0.5s forwards;
}
input:not([type="submit"]):not(:focus),textarea:not(:focus){
  animation: inputDefocus 0.5s forwards;
}

</style>