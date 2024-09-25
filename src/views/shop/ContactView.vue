<script setup lang="ts">
import InfoCard from "../../components/cards/InfoCard.vue";
import Footer from "../../components/Footer.vue";
import ContactCard from "../../components/cards/ContactCard.vue";
import BannerCard from "../../components/cards/BannerCard.vue";
import SocialCard from "../../components/cards/SocialCard.vue";
</script>

<template>
  <div class="grid">
    <div class="imageWrap">
      <BannerCard title="CONTACT" image="/src/assets/images/flower6.jpg"/>
    </div>
    <div class="infoWrap">
      <ContactCard/>
    </div>
    <InfoCard class="box" title="LOCATION" info="PO.256, Trinidad, CO 81082, United States"></InfoCard>
    <InfoCard class="box" title="EMAIL" info="sales@florashop.com"></InfoCard>
    <InfoCard class="box" title="PHONE" info="+1 720.000.0271"></InfoCard>
    <SocialCard class="box" title="SOCIAL"></SocialCard>
    <Footer/>
  </div>
</template>

<style scoped>

.infoWrap{
  aspect-ratio: 1/1;
  grid-row: 1/3;
  grid-column:1/3;
}

.imageWrap{
  grid-row: 1/5;
  grid-column: 3/5;
}

</style>