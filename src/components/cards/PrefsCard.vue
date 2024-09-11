<script setup lang="ts">

import {ref} from "vue";
import BackIcon from "@/assets/icons/BackIcon.vue";

const show = ref(false);
const togglePref = function (){
  show.value = !show.value;
}

</script>

<template>

  <div class="prefsWrap">
    <div class="prefsCard click" @click="togglePref()">
      <div class="line"></div>
      <div class="title">CONTACT PREFERENCES</div>
    </div>
    <transition name="slide">
      <div v-if="show" class="prefs box">
        <div class="line"></div>
        <div class="iconWrap click" @click="togglePref()"><BackIcon/></div>
        <div class="emailWrap">
          <div class="email">EMAIL ALERTS</div>
          <input type="checkbox">
        </div>
        <input type="text" placeholder="email">
        <div class="button">SAVE CHANGES</div>
      </div>
    </transition>
  </div>
</template>

<style scoped>

.iconWrap{
  margin-left: 1.5vw;
  margin-top: 0.8vw;
}

.prefsWrap{
  position: relative;
  height: 100%;
  overflow:hidden;
}
.emailWrap{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.8vw;
}
.email{
  margin-left: 1.5vw;
  margin-top: 0.8vw;
}
.emailWrap input{
  margin-top: 0.8vw;
}

input[type="text"]{
  margin-top: auto;
}

input{
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  font-family: "Barlow",sans-serif;
  font-size: 1vw;
  background-color: #f1f1f1;
  border: none;
  border-bottom: #b6b6b6 solid 2px;

}

.prefsCard{
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  height: 100%;
  width: 100%;
}

.title {
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 0.8vw;
}

.prefs{
  position: absolute;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 1.2vw;
  width:100%;
  height:100%;
}


.button{
  background-color: black;
  color: #f1f1f1;
  text-align: center;
  width: 13vw;
  height: 3vw;
  margin-top: 1.5vw;
  margin-left: 1.5vw;
  margin-bottom: 1.5vw;
  cursor: pointer;
  font-size: 1.2vw;
  align-content: center;
  font-weight: 500;
}


.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0%);
}


</style>