<script setup lang="ts">
  import {computed} from "vue";
  import router from "@/router";

  const props = defineProps({
    image:  { type: String, default: ''},
    title:  { type: String, default: '' },
    price: { type: String, default: '' },
    id: { type: String, default: '00' },
  })
  const imageUrl = computed(()=> 'url("'+props.image+'")').value;
  const id = props.id;
  const click = function (){
    router.push({ name: 'product', params: { id } })
  }
</script>

<template>
  <div class="image" style="{ 'background-image': 'url(\'' + require(image) + '\')' }" @click="click()">
    <div class="line"></div>
    <div class="title">{{title}}</div>
    <div class="price">{{price}}</div>
  </div>
</template>

<style scoped>

.title {
  font-size: 1.3vw;
  margin-left: 1vw;
  text-align: left;
  margin-top: 1vw;
}

.line{
  background-color: black;
  height: 4px;
  width: 3vw;
  margin-left: 1vw;
  margin-top: 2vw;
}
.price{
  margin-top: auto;
  margin-left: 1vw;
  margin-bottom: 1vw;
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
}

</style>