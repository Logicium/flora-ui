<script setup lang="ts">
defineProps({
  title:  { type: String },
  data: { type: Array },
})
</script>

<template>
  <div class="faqCard">
    <div class="line"></div>
    <div class="title">{{title}}</div>
    <div class="qaWrap">
      <div v-for="qa in data" class="qa">
        <div class="question">{{qa.question.toUpperCase()}}</div>
        <div class="answer">{{qa.answer}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.faqCard{
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  width: 100%;
  height: 100%;
}

.answer{
  margin-top: 0.8vw;
  font-size: 1vw;
  font-weight: 400;
  line-height: 1.5vw;
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
  line-height: 2vw;
}

.qaWrap{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  text-align: justify;
  margin-left: 1.5vw;
  margin-bottom: 1.5vw;
  margin-right: 1.5vw;
}


</style>