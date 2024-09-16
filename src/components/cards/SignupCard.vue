<script setup lang="ts">

import {ref} from "vue";
import router from "@/router";
import {useAccountStore} from "@/stores/AccountStore";
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
    if (response.status != 201) {
      buttonText.value = 'INVALID INPUT';
      setTimeout(() => buttonText.value = "SIGN UP", 2000);
    } else {
      const json = await response.json();
      authStore.token = json.token;
      await accountStore.fill(json.token);
      await router.push({ name: 'account' });
    }
  })
}

</script>

<template>
  <form class="signupCard" id="login" @submit.prevent="onSubmit" action="http://localhost:3000/auth/signup" method="post">
    <div class="line"/>
    <div class="inputWrap">
      <input name="email" placeholder="email" type="email">
      <input name="password" placeholder="password" type="password">
      <input name="password2" placeholder="password check" type="password">
    </div>
    <div class="alertsWrap">
      <div class="alert">EMAIL ALERTS</div>
      <input type="checkbox">
    </div>
    <div class="termsWrap">
      <div class="terms">TERMS OF SERVICE AGREEMENT</div>
      <input type="checkbox">
    </div>
    <div class="buttonWrap"><button class="button">SIGN UP</button></div>
  </form>
</template>

<style scoped>

.signupCard{
  font-size: 1.2vw;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  font-weight: 500;
}

.alertsWrap{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
}
.termsWrap{
  display: flex;
  justify-content: space-between;
  width: 100%;

}
.alert{
  margin-left: 1.5vw;
  margin-top: 1.5vw;
}

.terms{
  margin-left: 1.5vw;
  margin-top: 1.5vw;
  cursor: pointer;
}

.inputWrap{
  display: flex;
  flex-direction: column;
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

.button{
  background-color: black;
  font-family: "Barlow",sans-serif;
  color: #f1f1f1;
  text-align: center;
  width: 13vw;
  height: 3vw;
  margin-top: 1.5vw;
  margin-left: 1.5vw;
  cursor: pointer;
  font-size: 1.2vw;
  align-content: center;
  font-weight: 500;
}

.buttonWrap{
  margin-bottom: 1.5vw;
}

input:not([type="submit"]):focus{
  animation: inputFocus 0.5s forwards;
}
input:not([type="submit"]):not(:focus){
  animation: inputDefocus 0.5s forwards;
}

</style>