<script setup lang="ts">
import UserIcon from "@/components/icons/UserIcon.vue";
import ShopIcon from "@/components/icons/ShopIcon.vue";
import InstaIcon from "@/components/icons/InstaIcon.vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import ShareIcon from "@/components/icons/ShareIcon.vue";

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
  margin-bottom: 1.5vw;
  margin-left: 1.5vw;
}

.icon{
  cursor: pointer;
}

.line{
  background-color: black;
  height: 4px;
  width: 3vw;
  margin-left: 1.5vw;
  margin-top: 1.5vw;
}

.title {
  font-size: 1.3vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 0.8vw;
}

</style>