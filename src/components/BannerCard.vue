<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  image:  { type: String, default: ''},
  title:  { type: String, default: '' }
})
const imageUrl = computed(()=> 'url("'+props.image+'")').value;

</script>

<template>
  <div class="image" style="{ 'background-image': 'url(\'' + require(image) + '\')' }">
    <div class="title">{{title}}</div>
  </div>
</template>

<style scoped>

.title {
  font-size: 4vw;
  margin-left: 1.4vw;
  text-align: left;
  margin-top: 1.4vw;
}

.image {
  background-position: 100% 100%;
  background-size: cover;
  background-image: v-bind(imageUrl);
  display: flex;
  flex-direction: column;
  align-items: normal;
  cursor: pointer;
  width:100%;
  height: 100%;
}

</style>