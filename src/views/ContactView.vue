<script setup lang="ts">

import ImageCard from "@/components/ImageCard.vue";
import InfoCard from "@/components/InfoCard.vue";
import Footer from "@/components/Footer.vue";
import ContactCard from "@/components/ContactCard.vue";
import BannerCard from "@/components/BannerCard.vue";
import SocialCard from "@/components/SocialCard.vue";
</script>

<template>
<div class="contactWrap">
  <div class="imageWrap">
    <BannerCard title="CONTACT" image="/src/assets/flower6.jpg"/>
  </div>
  <div class="infoWrap">
    <ContactCard/>
  </div>
  <InfoCard class="box" title="LOCATION" info="PO.256, Trinidad, CO, USA"></InfoCard>
  <InfoCard class="box" title="EMAIL" info="sales@florashop.com"></InfoCard>
  <InfoCard class="box" title="PHONE" info="+1 720.000.0271"></InfoCard>
  <SocialCard class="box" title="SOCIAL"></SocialCard>
  <Footer/>
</div>
</template>

<style scoped>
.contactWrap{
  width: 76vw;
  display: grid;
  grid-template-columns: repeat(4,16vw);
  grid-template-rows: 16vw;
  column-gap: 4vw;
  row-gap: 4vw;
}
.infoWrap{
  aspect-ratio: 1/1;
  grid-row: 1/3;
  grid-column:1/3;
}

.imageWrap{
  grid-row: 1/5;
  grid-column: 3/5;
}
.box{
  aspect-ratio: 1/1;
}

</style>