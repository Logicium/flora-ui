<script setup lang="ts">
defineProps({
  title:  { type: String, default: '' },
  info: { type: Object, default: ()=>{}},
})
</script>

<template>
  <div class="paragraphCard">
    <div class="line"></div>
    <div class="title">{{title}}</div>
    <div class="paraWrap">
      <div class="paragraph">{{info.intro}}</div>
      <div class="paragraph">{{info.symbolism}}</div>
      <div class="paragraph">{{info.invitation}}</div>
    </div>
  </div>
</template>

<style scoped>

.paragraphCard{
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  width: 100%;
  height: 100%;
}

.title {
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 0.8vw;
  margin-bottom: 1.5vw;
}

.paragraph{
  height: 100%;
  max-height:100%;
  font-size: 1vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-bottom: 1.5vw;
  font-weight: 400;
  line-height: 2vw;
}

.paraWrap{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  text-align: justify;
}


</style>