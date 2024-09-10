<script setup lang="ts">

import NumberCard from "../components/cards/NumberCard.vue";
import ImageCard from "../components/cards/ImageCard.vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import Footer from "@/components/Footer.vue";
import Section1 from "../components/Section1.vue";
import ContactCard from "@/components/cards/ContactCard.vue";
import SocialCard from "@/components/cards/SocialCard.vue";
</script>

<template>

  <div class="grid">
    <div class="banner"><Section1></Section1></div>
    <ImageCard class="box big" image="/src/assets/images/flower5.jpg" title="SAGE" price="$6"></ImageCard>
    <div class="box"><NumberCard number="01" title='FLOWER CARDS'></NumberCard></div>
    <ImageCard class="box big2" image="/src/assets/images/flower7.jpg" title="LAVENDER" price="$3"></ImageCard>
    <ImageCard class="box" image="/src/assets/images/flower4.jpg" title="LAVENDER" price="$6"></ImageCard>
    <ImageCard class="box" image="/src/assets/images/flower5.jpg" title="DESERT ROSE" price="$6"></ImageCard>
    <ImageCard class="box" image="/src/assets/images/flower6.jpg" title="BORAGE" price="$6"></ImageCard>
    <ImageCard class="box" image="/src/assets/images/flower7.jpg" title="JADEA" price="$3"></ImageCard>
    <div class="box"><NumberCard number="02" title='FLOWER SEEDS'></NumberCard></div>
    <ImageCard class="box" image="/src/assets/images/flower4.jpg" title="HONEYSTALK" price="$3"></ImageCard>
    <ImageCard class="box" image="/src/assets/images/flower6.jpg" title="WILDFLOWER" price="$3"></ImageCard>
    <InfoCard class="box" title="LOCATION" info="PO.256, Trinidad, CO 81082, United States"></InfoCard>
    <InfoCard class="box" title="EMAIL" info="sales@florashop.com"></InfoCard>
    <InfoCard class="box" title="PHONE" info="+1 720.000.0271"></InfoCard>
    <SocialCard class="box" title="SOCIAL"/>
    <ContactCard class="box big3"/>
    <Footer></Footer>
  </div>
</template>

<style scoped>

.banner{
  grid-row: 1 / 3;
  grid-column: 1 / 5;
}

.big{
  grid-row: 3 / 5;
  grid-column: 3 / 5;
}

.big2{
  grid-row: 5 / 7;
  grid-column: 1 / 3;
}

.big3{
  grid-row: 7 / 9;
  grid-column: 3 / 5;
}

</style>