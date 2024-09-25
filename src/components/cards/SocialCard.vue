<script setup lang="ts">
import UserIcon from "../../assets/icons/UserIcon.vue";
import ShopIcon from "../../assets/icons/ShopIcon.vue";
import InstaIcon from "../../assets/icons/InstaIcon.vue";
import FacebookIcon from "../../assets/icons/FacebookIcon.vue";
import ShareIcon from "../../assets/icons/ShareIcon.vue";

defineProps(['title'])
</script>

<template>
<div class="socialCard">
  <div class="line"></div>
  <div class="title">{{ title }}</div>
  <div class="socialRow">
    <div class="icon"><ShareIcon></ShareIcon></div>
    <div class="icon"><FacebookIcon></FacebookIcon></div>
    <div class="icon"><InstaIcon></InstaIcon></div>
  </div>
</div>
</template>

<style scoped>

.socialCard{
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-weight: 500;
}

.socialRow{
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 1.5vw;
  margin-right: 1.5vw;
}

.icon{
  cursor: pointer;
}

.title {
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 0.8vw;
}

</style>