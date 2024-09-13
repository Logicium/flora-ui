<script setup lang="ts">

</script>

<template>
<form class="loginCard">
  <div class="line"/>
  <div class="inputWrap">
    <input placeholder="email" type="email">
    <input placeholder="password" type="password">
    <div class="forgot">forgot password?</div>
  </div>
  <div class="buttonWrap"><div class="button">LOG IN</div></div>
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
}

input{
  margin-top: 1.5vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  border: none;
  background-color: #f1f1f1;
  font-family: "Barlow",sans-serif;
  border-bottom: #b6b6b6 solid 2px;
  font-size: 1vw;
}

input:focus,
textarea:focus{
  animation: inputFocus 0.5s forwards;
}
input:not(:focus),textarea:not(:focus){
  animation: inputDefocus 0.5s forwards;
}

</style>