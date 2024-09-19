<script setup lang="ts">

import router from "@/router";
import {ref} from "vue";
import ImageCard from "@/components/cards/ImageCard.vue";
import Footer from "@/components/Footer.vue";

initialize();
const email = ref('');
async function initialize() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sessionId = urlParams.get('session_id');
  const response = await fetch(`http://localhost:3000/order/session-status?session_id=${sessionId}`);
  const session = await response.json();
  if (session.status === 'open') {
    router.push('/checkout');
  } else if (session.status === 'complete') {
    email.value = session.customer_email;
    console.log('email.value: '+email.value)
  }
}

</script>

<template>
  <div class="grid">
    <div class="confirmation">
      <div class="line"></div>
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to {{email}}.
          If you have any questions, please email <a href="mailto:orders@example.com">sales@florashop.com</a>.
        </p>
      </section>
      <div class="buttonWrap"><div class="button">VIEW ORDER</div></div>
    </div>
    <ImageCard class="image1" title="THANK YOU FOR YOUR ORDER" image="/src/assets/images/flower12.jpg"/>
    <Footer/>
  </div>
</template>

<style scoped>

.confirmation{
  background-color: #f1f1f1;
  grid-row: 1/3;
  grid-column: 3/5;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  font-size: 1.2vw;
}

#success{
  margin-right: 1.5vw;
  margin-left: 1.5vw;
}

.image1{
  grid-row: 1/3;
  grid-column: 1/3;
}

.title {
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 0.8vw;
}

.buttonWrap{
  margin-top: auto;
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

</style>