<script setup lang="ts">
defineProps(['title'])
</script>

<template>
  <div class="addressWrap">
    <div class="line"></div>
    <div class="title">{{title}}</div>
    <input placeholder="first name">
    <input placeholder="last name">
    <input placeholder="address 1">
    <input placeholder="address 2">
    <input placeholder="zipcode">
    <input placeholder="state" list="states"/>
    <datalist id="states">
      <option>Colorado</option>
      <option>New Mexico</option>
    </datalist>
    <input placeholder="email">
    <input placeholder="phone">
    <div class="button">SAVE CHANGES</div>
  </div>
</template>

<style scoped>

.addressWrap{
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.line{
  background-color: black;
  height: 4px;
  width: 3vw;
  margin-left: 1.5vw;
  margin-top: 1.5vw;
}

input{
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-bottom: 1.5vw;
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

.button{
  background-color: black;
  color: #f1f1f1;
  text-align: center;
  width: 13vw;
  height: 3vw;
  margin-top: auto;
  margin-left: 1.5vw;
  margin-bottom: 1.5vw;
  cursor: pointer;
  font-size: 1.2vw;
  align-content: center;
  font-weight: 500;
}

</style>