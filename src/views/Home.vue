<template>
  <div class="home">
    <Features></Features>
    <Cources></Cources>
    <Whatsay></Whatsay>
    <Statices></Statices>
    <Contact></Contact>
  </div>
</template>

<script>
// @ is an alias to /src
import Features from  '@/components/Features.vue';
import Cources from  '@/components/Cources.vue';
import Whatsay from  '@/components/Whatsay.vue';
import Statices from  '@/components/Statices.vue';
import Contact from  '@/components/Contact.vue';
export default {
  name: "Home",
  components: {
    Features,
    Cources,
    Whatsay,
    Statices,
    Contact,
  }
};
</script>
