<script setup lang="ts">

import router from "@/router";
import {ref} from "vue";

initialize();
const email = ref('');
async function initialize() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sessionId = urlParams.get('session_id');
  const response = await fetch(`/session-status?session_id=${sessionId}`);
  const session = await response.json();

  if (session.status == 'open') {
    router.push('/checkout');
  } else if (session.status == 'complete') {
    document.getElementById('success').classList.remove('hidden');
    document.getElementById('customer-email').textContent = session.customer_email
    email.value = session.customer_email;
  }
}

</script>

<template>
  <div class="grid">
    <div class="confirmation">
      <div class="line"></div>
      <div class="title">THANK YOU FOR YOUR ORDER</div>
      <section id="success" class="hidden">
        <p>
          We appreciate your business! A confirmation email will be sent to.

          If you have any questions, please email <a href="mailto:orders@example.com">sales@florashop.com</a>.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>

.confirmation{
  background-color: #f1f1f1;
}

.title {
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-top: 0.8vw;
}

</style>