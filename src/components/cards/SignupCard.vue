<script setup lang="ts">

</script>

<template>
  <form class="signupCard">
    <div class="line"/>
    <div class="inputWrap">
      <input placeholder="email" type="email">
      <input placeholder="password" type="password">
      <input placeholder="reenter password" type="password">
      <div class="alertsWrap">
        <div class="alert">EMAIL ALERTS</div>
        <input type="checkbox">
      </div>
    </div>
    <div class="buttonWrap"><div class="button">SIGN UP</div></div>
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
}
.alert{
  margin-left: 1.5vw;
  margin-top: 1.5vw;
}
.alertsWrap input{
  margin-top: 1.5vw;
}

.inputWrap{
  display: flex;
  flex-direction: column;
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

.button{
  background-color: black;
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
  margin-top: auto;
}

input:focus,
textarea:focus{
  animation: inputFocus 0.5s forwards;
}
input:not(:focus),textarea:not(:focus){
  animation: inputDefocus 0.5s forwards;
}

</style>